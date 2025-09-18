import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://backend.dmt-edu.com",
});

apiClient.interceptors.request.use((config) => {
  const lang = localStorage.getItem("lang") || "ar";
  if (lang) {
    config.headers["lang"] = lang;
  }
  return config;
});

export default apiClient;
