import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="grid grid-cols-[max-content_1fr]">
      <Menu />
      <section>
        <Header />
        <section className="flex flex-col items-center justify-center px-6 py-10">
          {children}
        </section>
      </section>
    </main>
  );
};

export default DashboardLayout;
