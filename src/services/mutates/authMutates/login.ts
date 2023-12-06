import { snackbar } from "@/lib/snackbar";
import { api } from "@/services/api";
import type { LoginData } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "nookies";

const Login = async ({
  email,
  password,
}: LoginData): Promise<{ email: string; name: string }> =>
  await api
    .post("sessions", {
      email,
      password,
    })
    .then(({ data }) => {
      api.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      setCookie(null, "@timetabling-token-auth", data.token, {
        maxAge: 60 * 60 * 24 * 7, // 7 dias
        path: "/",
      });
      snackbar("success", "Welcome!");
      return data;
    })
    .catch((err) => {
      const message = err.response.data.message;
      snackbar("error", message);
      throw new Error(message);
    });

export const useLogin = () =>
  useMutation({
    mutationFn: Login,
  });
