export function generateSlug(str) {
  return (
    str
      .toLowerCase()
      .trim()
      // collapse any non-alphanumeric into a single dash
      .replace(/[^a-z0-9]+/g, "-")
      // strip leading/trailing dashes
      .replace(/(^-+|-+$)/g, "")
  );
}