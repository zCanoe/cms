let BASE_URL = "";
if (import.meta.env.DEV) {
  BASE_URL = "http://codercba.com:8000" as const;
} else {
  BASE_URL = "http://codercba.com:8000" as const;
}
export const TIME_OUT1 = 10000 as const;
export { BASE_URL };
