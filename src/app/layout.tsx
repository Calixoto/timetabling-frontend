import { QueryProvider } from "@/components/Providers/queryProvider";
import { SnackbarProvider } from "@/components/Snackbar/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timetabling",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <QueryProvider>
          {children}
          <SnackbarProvider />
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;