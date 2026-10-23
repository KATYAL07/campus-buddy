const locale = "en-IN";

/** Friendly local date, e.g. "12 Oct 2026". */
export function formatFriendlyDate(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString(locale, { day: "numeric", month: "short", year: "numeric" });
}

/** Friendly local date and time, e.g. "12 Oct 2026, 4:30 pm". */
export function formatFriendlyDateTime(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString(locale, { dateStyle: "medium", timeStyle: "short" });
}

/** Long weekday form for event detail pages, e.g. "Monday, 12 October 2026, 4:30 pm". */
export function formatFriendlyDateTimeLong(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString(locale, { dateStyle: "full", timeStyle: "short" });
}
