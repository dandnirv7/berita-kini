import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api-berita-indonesia.vercel.app/",
  timeout: 1000,
  headers: { Accept: "application/json" },
});
