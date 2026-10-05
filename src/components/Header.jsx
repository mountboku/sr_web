import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["/", "HOME"],
    ["/products", "PRODUCTS"],
    ["/about", "ABOUT"],
    ["/contact", "CONTACT"],
  ];

  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1900px] items-center justify-between px-5 py-5 md:px-10">
        <Link to="/" className="flex items-center gap-2 text-white">
          <span className="grid h-9 w-9 place-items-center rounded bg-brand-orange font-display text-xl">SR</span>
          <span className="hidden text-xs font-black tracking-[0.22em] sm:block">Enterprises</span>
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-bold tracking-[0.12em] text-white/80 md:flex">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => isActive ? "text-white" : "hover:text-white"}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="rounded-full border border-white/20 px-5 py-2.5 hover:bg-white hover:text-brand-charcoal">
            REQUEST QUOTE
          </Link>
        </nav>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mx-4 rounded-2xl bg-brand-charcoal p-6 shadow-card md:hidden">
          <div className="flex flex-col gap-5 text-sm font-bold text-white">
            {links.map(([to, label]) => <Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>)}
          </div>
        </div>
      )}
    </header>
  );
}