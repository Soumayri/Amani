// src/portal/utils/formatDate.js

/**
 * Formats a date string to a readable format.
 * @param {string} dateStr - ISO date string (e.g. "2025-03-15")
 * @param {string} [locale="en-GB"] - Locale for formatting
 * @returns {string} Formatted date (e.g. "15 March 2025")
 */
export const formatDate = (dateStr, locale = "en-GB") => {
  if (!dateStr) return "—";
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
};
