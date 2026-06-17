// src/components/contact/contactFormOptions.js
//
// Canonical option values for the Contact request form. Each value is also
// used as the i18n key (matching the convention already used across the
// site: English copy is the key, translations live in /locales/*).

export const PREFERRED_LANGUAGE_OPTIONS = [
  "English",
  "French",
  "Arabic",
  "Darija",
  "Spanish",
  "Other",
];

export const PROPERTY_TYPE_OPTIONS = ["Apartment", "Villa", "House", "Other"];

export const VISIT_FREQUENCY_OPTIONS = [
  "Regularly",
  "Occasionally",
  "Rarely",
  "Not sure yet",
];

export const MAIN_CONCERN_OPTIONS = [
  "No recent updates",
  "Empty home",
  "No trusted person",
  "Bad surprises",
  "Before arrival stress",
  "Remote management",
  "Works or repairs",
];

export const CARE_LEVEL_OPTIONS = [
  "Once a month",
  "Twice a month",
  "Four times a month",
  "I need advice",
];

export const YES_SOMETIMES_NO_NOTSURE_OPTIONS = ["Yes", "Sometimes", "No", "Not sure"];

export const AMANI_WORKS_OPTIONS = ["Yes, now", "Maybe later", "No", "Not sure"];

export const START_TIMELINE_OPTIONS = [
  "As soon as possible",
  "This month",
  "In 2–3 months",
  "Just exploring",
];

// Lets a visitor coming from /plans (Plans.js -> navigate(`/contact?plan=...`))
// land with a sensible care-level pre-selected, without skipping the step.
export const PLAN_QUERY_TO_CARE_LEVEL = {
  Silver: "Once a month",
  Gold: "Twice a month",
  Platinum: "Four times a month",
};
