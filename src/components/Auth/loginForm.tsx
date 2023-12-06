"use client";
import { LoginSchemaType, loginSchema } from "@/lib/schema/loginSchema";
import { useLogin } from "@/services/mutates/authMutates/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const LoginForm = () => {
  const { push } = useRouter();
  const { handleSubmit, register } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const { mutateAsync } = useLogin();
  const onSubmit = async ({ email, password }: LoginSchemaType) => {
    console.log(email, password);
    await mutateAsync({ email, password }).then(() => {
      push("/dashboard");
    });
  };

  const handlePushToRegister = () => {
    push("/auth/register");
  };

  return (
    <form
      className="flex flex-col space-y-6 max-w-sm w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input placeholder="E-mail" type="email" {...register("email")} />
      <Input placeholder="Password" type="password" {...register("password")} />
      <section className="flex items-center justify-end space-x-4">
        <Button type="submit">Login</Button>
        <Button
          variant="secondary"
          type="button"
          onClick={handlePushToRegister}
        >
          Register
        </Button>
      </section>
    </form>
  );
};
