import { snackbar } from "@/lib/snackbar";
import axios from "axios";
import { destroyCookie, parseCookies } from "nookies";

const { "@timetabling-token-auth": token } = parseCookies();

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        snackbar("error", "Unauthorized.");
        destroyCookie(null, "@timetabling-token-auth");
    }
    return Promise.reject(error);
  },
);
