import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

API.interceptors.request.use((req) => {
  req.headers["Accept-Language"] = Cookies.get("NEXT_LOCALE")
    ? Cookies.get("NEXT_LOCALE")
    : "uz";
  return req;
});

export default API;
