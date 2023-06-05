export const formatingPhone = (value) =>
  value
    .replace(/\D/g, "")
    .slice(0, 10)
    .replace(/(\d{3})(\d{7})/, "($1)$2");
