import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.name || !body.email || !body.message || !validateEmail(body.email)) {
      return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
    }

    const payload = {
      name: body.name,
      email: body.email,
      company: body.company || "",
      phone: body.phone || "",
      service: body.service || "",
      message: body.message,
      submittedAt: new Date().toISOString(),
    };

    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    const webhookEndpoint = process.env.CONTACT_WEBHOOK_URL;

    if (formspreeEndpoint) {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        return NextResponse.json({ error: "Formspree request failed" }, { status: 502 });
      }

      return NextResponse.json({ ok: true });
    }

    if (webhookEndpoint) {
      const response = await fetch(webhookEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        return NextResponse.json({ error: "Webhook request failed" }, { status: 502 });
      }

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({
      ok: true,
      mode: "no-provider-configured",
    });
  } catch {
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
