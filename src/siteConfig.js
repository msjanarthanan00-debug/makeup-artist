// Central place for content that repeats across components/pages.
// Swap these values for the real business details.

export const site = {
  name: "Marlowe Reyes",
  tagline: "Makeup artistry for weddings, editorial, and everything worth remembering.",
  email: "hello@marlowereyesmakeup.com",
  phone: "+1 (415) 555-0142",
  instagramHandle: "@marlowereyesmakeup",
  city: "San Francisco, CA — available for travel",
};

// Calendly (or Cal.com) base URL + one slug per service/event type.
// Read from .env so real values never get hardcoded/committed.
export const calendlyBaseUrl =
  import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/your-handle";

export const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "";

export const services = [
  {
    slug: "bridal-trial",
    name: "Bridal Trial",
    price: "$180",
    duration: "90 min",
    description:
      "A full run-through of your wedding-day look, done in advance so the only thing left to feel on the day itself is ready.",
  },
  {
    slug: "wedding-day",
    name: "Wedding Day",
    price: "$350",
    duration: "2–3 hrs, on location",
    description:
      "On-site makeup for the bride, timed against your photographer's schedule so we're never the reason anything runs late.",
  },
  {
    slug: "editorial-photoshoot",
    name: "Editorial / Photoshoot",
    price: "From $250",
    duration: "Varies by brief",
    description:
      "Camera-ready looks built around a mood board, a concept, or a creative director's notes — soft glam to full character work.",
  },
  {
    slug: "special-event",
    name: "Special Event",
    price: "$140",
    duration: "60 min",
    description:
      "Galas, portraits, nights out — a polished look that holds up under flash photography and long hours.",
  },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
