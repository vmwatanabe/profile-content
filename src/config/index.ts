export const route =
  process.env.NODE_ENV === "development"
    ? "https://s3.amazonaws.com/watanabethedev.com"
    : "https://watanabethedev.com";
