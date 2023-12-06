import { Calendar, Home } from "lucide-react";
import { NavLink } from "./navLink";

export const Menu = () => {
  return (
    <aside className="flex flex-col items-start space-y-10 ring-1 px-3 pt-4 h-screen">
      <section>logo</section>
      <nav className="flex flex-col space-y-4">
        <NavLink href="/dashboard">
          <Home strokeWidth={2.25} size={16} />
          Home
        </NavLink>
        <NavLink href="/dashboard/schedule">
          <Calendar strokeWidth={2.25} size={16} />
          schedule
        </NavLink>
        <NavLink href="/dashboard/dolar">
          <Home strokeWidth={2.25} size={16} />
          home
        </NavLink>
      </nav>
    </aside>
  );
};
