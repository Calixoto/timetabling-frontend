import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen p-4">
      {children}
    </main>
  );
};

export default AuthLayout;
