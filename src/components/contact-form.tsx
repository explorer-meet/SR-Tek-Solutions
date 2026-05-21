"use client";

import { FormEvent, useState } from "react";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

const initialState: FormState = {
  status: "idle",
  message: "Your information will only be used to respond to your request.",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormState({ status: "loading", message: "Submitting your inquiry..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setFormState({
        status: "success",
        message: "Thanks. Your message has been received. Our team will reach out shortly.",
      });
    } catch {
      setFormState({
        status: "error",
        message: "Unable to submit right now. Please email hr@srteksolutions.com directly.",
      });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-grid">
        <div>
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div>
          <label htmlFor="email">Business Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" />
        </div>
      </div>
      <div className="form-section-gap">
        <label htmlFor="service">Interested Service</label>
        <select id="service" name="service">
          <option value="">Select an option</option>
          <option>Data Warehousing and BI</option>
          <option>Functional Business Analysts</option>
          <option>Healthcare Services</option>
          <option>System and Database Administration</option>
          <option>Web App and Enterprise Portals</option>
          <option>Development and Testing</option>
        </select>
      </div>
      <div className="form-section-gap">
        <label htmlFor="message">Project Brief</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us what you are building and expected timeline"
          required
        />
      </div>
      <div className="form-section-gap">
        <button className="btn btn-primary" type="submit" disabled={formState.status === "loading"}>
          {formState.status === "loading" ? "Submitting..." : "Submit Inquiry"}
        </button>
      </div>
      <p className={`form-note ${formState.status}`}>{formState.message}</p>
    </form>
  );
}
