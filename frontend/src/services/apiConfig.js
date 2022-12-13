import axios from "axios";

export const domain = "http://localhost:5000";

const apiConfig = axios.create({
  baseURL: `${domain}/api`,
  headers: { "Content-Type": "application/json" },
});

export default apiConfig;
