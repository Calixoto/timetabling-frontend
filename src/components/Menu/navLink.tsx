"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, ReactNode } from "react";

type NavLinkProps = {
  children: ReactNode;
  href: string;
} & LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavLink = ({ children, href, ...rest }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      data-active={href === pathname}
      className="flex items-center gap-2 py-2 px-4 rounded-md w-full text-base font-medium data-[active=true]:bg-input data-[active=true]:text-primary hover:bg-secondary hover:text-primary transition-all"
      {...rest}
    >
      {children}
    </Link>
  );
};
