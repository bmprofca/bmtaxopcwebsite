import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { business } from "../../data/business";
import { Button, Container } from "../ui/Primitives";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-bmtax", label: "Why BMTAX" },
  { to: "/contact", label: "Contact" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink-700/95 shadow-stamp backdrop-blur" : "bg-ink-700"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="BMTAX home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brass-400/60 font-display text-lg font-semibold text-paper-100">
            B
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold text-paper-100">BMTAX</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brass-300">
              India (OPC) Pvt. Ltd.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium tracking-wide text-paper-100/85 transition-colors hover:text-paper-100 ${
                  isActive ? "text-paper-100 after:w-full" : "after:w-0"
                } after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-brass-400 after:transition-all after:duration-300`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={business.phoneHref} className="font-mono text-xs text-paper-100/70 hover:text-brass-300">
            {business.phone}
          </a>
          <Button href={business.loginUrl} variant="brass">
            Client Login
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-paper-100 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-paper-100/10 bg-ink-700 md:hidden"
            aria-label="Mobile"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-sm px-3 py-3 text-sm font-medium ${
                      isActive ? "bg-paper-100/10 text-paper-100" : "text-paper-100/80"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button href={business.loginUrl} variant="brass" className="mt-3 w-full">
                Client Login
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
