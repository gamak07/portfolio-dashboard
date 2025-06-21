export const formatDate = (dateString) => {
  if (!dateString) {
    return null
  }
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short", // e.g. Jan, Feb
    day: "numeric",
  });
};
