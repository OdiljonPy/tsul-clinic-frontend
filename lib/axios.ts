import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

API.interceptors.request.use((req) => {
  req.headers["Accept-Language"] = Cookies.get("i18nextLng")
    ? Cookies.get("i18nextLng")
    : "uz";
  return req;
});

API.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log(err, "error");
    console.log(err?.status, "error");
    if (err?.status === 404) {
      window.location.href = "/not-found";
    }
    return Promise.reject(err);
  },
);

export default API;
