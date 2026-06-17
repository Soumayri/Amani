// src/utils/contactSubmission.js
//
// Submission helpers for the premium Contact request form.
//
// TODO(Amani backend): once the Google Apps Script Web App is deployed
// (writing new leads to a dedicated tab in the AMANI HOME Board + emailing
// contact.amani.home@gmail.com), set its URL as REACT_APP_CONTACT_ENDPOINT
// in the environment — submitContactRequest() will then POST the payload
// there automatically. Until that endpoint is configured, the form still
// works: WhatsApp remains available as a manual fallback link on the
// success screen, but is no longer opened automatically.

// Canonical Amani Home WhatsApp number, already used by FloatingWhatsApp.js
// and the legacy Contact form — kept identical here for consistency.
export const WHATSAPP_PHONE = "33670779256";

/**
 * Best-effort delivery of the qualified request to a backend endpoint, if
 * one is configured. Never blocks or breaks the WhatsApp fallback.
 */
export async function submitContactRequest(payload) {
  const endpoint = process.env.REACT_APP_CONTACT_ENDPOINT;

  if (!endpoint) {
    return { ok: true, delivered: "whatsapp-only" };
  }

  try {
    // NOTE: Content-Type is deliberately "text/plain" (not "application/json").
    // Google Apps Script Web Apps don't handle the CORS preflight (OPTIONS)
    // that browsers send for application/json requests. Sending the JSON
    // string with a text/plain content-type keeps this a CORS "simple
    // request" (no preflight), while the Apps Script side still does
    // JSON.parse(e.postData.contents) on the raw body — the payload itself
    // is unchanged, only the declared header differs.
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Endpoint responded with status ${response.status}`);
    }

    return { ok: true, delivered: "endpoint" };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Amani contact form: failed to reach intake endpoint", error);
    // The request is not lost — WhatsApp remains available as a fallback.
    return { ok: false, delivered: "whatsapp-fallback", error };
  }
}

/** Builds the pre-filled WhatsApp message from the submitted payload. */
export function buildWhatsAppMessage(payload = {}) {
  const lines = [
    "Hello Amani Home, I would like to start a home care request.",
    `Name: ${payload.fullName || ""}`,
    `Country of residence: ${payload.country || ""}`,
    `City in Morocco: ${payload.city || ""}`,
    `District: ${payload.district || ""}`,
    `Property type: ${payload.propertyType || ""}`,
    `Visit frequency: ${payload.visitFrequency || ""}`,
    `Main concern: ${payload.mainConcern || ""}`,
    `Care level: ${payload.careLevel || ""}`,
    `Welcome Home: ${payload.welcomeHomeNeed || ""}`,
    `ProAccess: ${payload.proAccessNeed || ""}`,
    `Amani Works: ${payload.amaniWorksNeed || ""}`,
    `Start timeline: ${payload.startTimeline || ""}`,
    `Message: ${payload.message || ""}`,
  ];
  return lines.join("\n");
}

/** Builds the full wa.me deep link for the given payload. */
export function buildWhatsAppUrl(payload = {}) {
  const message = buildWhatsAppMessage(payload);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
