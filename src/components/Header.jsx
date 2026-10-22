import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const links = [
    ["/", "HOME"],
    ["/products", "PRODUCTS"],
    ["/about", "ABOUT"],
    ["/contact", "CONTACT"],
  ];
  const isTargetPage = pathname === "/";
  const activeColor = isTargetPage ? 'text-white' : 'text-black';
  const idleColor = isTargetPage
    ? 'text-white/60 hover:text-white'
    : 'text-black/60 hover:text-black';


  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1900px] items-center justify-between px-5 py-5 md:px-10">
        <Link to="/" className="flex items-center gap-2 text-white">
          <span className="grid h-9 w-9 place-items-center rounded bg-brand-orange font-display text-xl">SR</span>
          <span className={`hidden text-xs font-black tracking-[0.22em] sm:block ${isTargetPage ? "text-white" : "text-black"
            }`} > Enterprises</span>
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-bold tracking-[0.12em] text-white/80 md:flex">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `transition-colors ${isActive ? activeColor : idleColor}`}>
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className={(isActive) => `rounded-full border px-5 py-2.5 transition-colors hover:bg-white hover:text-brand-charcoal ${isActive ? activeColor : idleColor} ${isActive ? "border-white/20" : "border-black/20"}`}
          >
            REQUEST QUOTE
          </Link>
        </nav>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {
        open && (
          <div className="mx-4 rounded-2xl bg-brand-charcoal p-6 shadow-card md:hidden">
            <div className="flex flex-col gap-5 text-sm font-bold text-white">
              {links.map(([to, label]) => <Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>)}
            </div>
          </div>
        )
      }
    </header >
  );
}