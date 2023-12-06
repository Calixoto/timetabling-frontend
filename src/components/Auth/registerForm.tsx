"use client";
import {
  registerSchema,
  RegisterSchemaType,
} from "@/lib/schema/registerSchema";
import { snackbar } from "@/lib/snackbar";
import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const RegisterForm = () => {
  const { back, push } = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  // console.log(process.env.NEXT_PUBLIC_API_URL);
  const onSubmit = async ({ name, email, password }: RegisterSchemaType) => {
    await api
      .post("/users", {
        name,
        email,
        password,
      })
      .then((response) => {
        snackbar("success", "user successfully registered.");
        push("/auth/login");
      })
      .catch((err) => {
        snackbar("error", "Something went wrong.");
      });
  };

  return (
    <form
      className="flex flex-col space-y-6 max-w-sm w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input type="text" placeholder="Name" {...register("name")} />
      <Input type="email" placeholder="E-mail" {...register("email")} />
      <Input type="password" placeholder="Password" {...register("password")} />
      <section className="flex items-center justify-end space-x-4">
        <Button type="submit">Confirm</Button>
        <Button variant="secondary" type="button" onClick={back}>
          Back
        </Button>
      </section>
    </form>
  );
};
