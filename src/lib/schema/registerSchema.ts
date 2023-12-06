import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z
    .string()
    .min(8, {
      message:
        "Senha inválida. A senha deve ter pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número, 1 símbolo e ter pelo menos 8 caracteres.",
    })
    .refine(
      (password) => {
        if (!/[a-z]/.test(password)) return false;
        if (!/[A-Z]/.test(password)) return false;
        if (!/\d/.test(password)) return false;
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
        return true;
      },
      {
        message:
          "Senha inválida. A senha deve ter pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número, 1 símbolo e ter pelo menos 8 caracteres.",
      },
    ),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
