// src/utils/contactPlanHint.js
//
// Internal qualification helpers for the Contact request form.
// `recommendedPlanHint` is for Amani back-office use only — it must never be
// displayed to the client as a final decision. See Contact.js / docs in the
// ContactRequestForm component for the full mapping rules.

const CARE_LEVEL_TIER = {
  "Once a month": "Silver",
  "Twice a month": "Gold",
  "Four times a month": "Platinum",
  "I need advice": null,
};

const TIER_RANK = { Silver: 1, Gold: 2, Platinum: 3 };

function higherTier(a, b) {
  if (!a) return b;
  if (!b) return a;
  return TIER_RANK[a] >= TIER_RANK[b] ? a : b;
}

/**
 * Computes an internal plan/add-on hint from the raw answers of the
 * Contact request form. Never shown to the client — used by Amani to
 * pre-qualify the request before a human reviews it.
 */
export function computeRecommendedPlanHint({
  careLevel,
  welcomeHome,
  proAccess,
  amaniWorks,
  mainConcern,
} = {}) {
  let tier = CARE_LEVEL_TIER[careLevel] ?? null;
  let manualReviewNeeded = careLevel === "I need advice";

  if (welcomeHome === "Yes" || welcomeHome === "Sometimes") {
    tier = higherTier(tier, "Gold");
  } else if (welcomeHome === "Not sure") {
    manualReviewNeeded = true;
  }

  const addons = [];
  if (proAccess === "Yes" || proAccess === "Sometimes") {
    addons.push("ProAccess potential");
  }
  if (
    amaniWorks === "Yes, now" ||
    amaniWorks === "Maybe later" ||
    mainConcern === "Works or repairs"
  ) {
    addons.push("Amani Works potential");
  }
  const uniqueAddons = Array.from(new Set(addons));

  const summaryParts = [];
  if (tier) summaryParts.push(`${tier} potential`);
  summaryParts.push(...uniqueAddons);
  if (manualReviewNeeded) summaryParts.push("Manual qualification needed");
  if (summaryParts.length === 0) summaryParts.push("Manual qualification needed");

  return {
    planTier: tier, // "Silver" | "Gold" | "Platinum" | null
    manualReviewNeeded,
    addons: uniqueAddons,
    summary: summaryParts.join(" · "),
  };
}
