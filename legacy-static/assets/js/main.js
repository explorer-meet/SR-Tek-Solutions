const menuButton = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const counters = document.querySelectorAll('[data-counter]');

const animateCounter = (counter) => {
  const target = Number(counter.getAttribute('data-counter'));
  const suffix = counter.getAttribute('data-suffix') || '';
  const duration = 1200;
  const startTime = performance.now();

  const step = (time) => {
    const progress = Math.min((time - startTime) / duration, 1);
    const value = Math.floor(progress * target);
    counter.textContent = `${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

if ('IntersectionObserver' in window && counters.length > 0) {
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.7 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

const form = document.querySelector('[data-contact-form]');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = form.querySelector('[data-form-note]');
    const email = form.querySelector('input[type="email"]');

    if (!email || !email.value.includes('@')) {
      if (note) {
        note.textContent = 'Please enter a valid email address before submitting.';
      }
      return;
    }

    if (note) {
      note.textContent = 'Thanks. Your message has been received. Our team will reach out shortly.';
    }

    form.reset();
  });
}
