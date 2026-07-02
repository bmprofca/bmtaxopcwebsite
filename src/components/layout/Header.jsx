import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";


const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-bmtax", label: "Why BMTAX" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.05)" : "none",
      }}
    >
      <div className="container-page flex h-[68px] items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3" aria-label="BMTAX home">
          <div
            className="relative flex h-10 w-10 items-center justify-center rounded-xl font-bold text-white text-lg transition-all duration-300 group-hover:scale-105"
            style={{ background: "linear-gradient(135deg, #4f46e5, #6366f1)", boxShadow: "0 4px 12px rgba(79,70,229,0.25)" }}
          >
            B
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold" style={{ color: "var(--text)" }}>BMTAX</span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--text-dim)" }}>
              India (OPC) Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive ? "text-accent" : "text-slate-500 hover:text-slate-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-bg"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "var(--accent-bg)", border: "1px solid rgba(79,70,229,0.12)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200 md:hidden"
          style={{ background: "var(--accent-bg)", border: "1px solid rgba(79,70,229,0.12)" }}
        >
          <motion.div animate={open ? "open" : "closed"} className="flex h-5 w-5 flex-col items-center justify-center gap-1.5">
            <motion.span variants={{ open: { rotate: 45, y: 7 }, closed: { rotate: 0, y: 0 } }} transition={{ duration: 0.25 }} className="block h-0.5 w-5 rounded-full" style={{ background: "var(--accent)" }} />
            <motion.span variants={{ open: { opacity: 0, scaleX: 0 }, closed: { opacity: 1, scaleX: 1 } }} transition={{ duration: 0.25 }} className="block h-0.5 w-5 rounded-full" style={{ background: "var(--accent)" }} />
            <motion.span variants={{ open: { rotate: -45, y: -7 }, closed: { rotate: 0, y: 0 } }} transition={{ duration: 0.25 }} className="block h-0.5 w-5 rounded-full" style={{ background: "var(--accent)" }} />
          </motion.div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden fixed w-full md:hidden"
            style={{ background: "rgba(255,255,255,0.98)", borderTop: "1px solid var(--border)" }}
            aria-label="Mobile navigation"
          >
            <div className="container-page flex flex-col gap-1 pb-6 pt-4">
              {navLinks.map((link, i) => (
                <motion.div key={link.to} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06, duration: 0.3 }}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive ? "text-accent" : "text-slate-500"}`
                    }
                    style={({ isActive }) =>
                      isActive
                        ? { background: "var(--accent-bg)", border: "1px solid rgba(79,70,229,0.12)" }
                        : { background: "transparent", border: "1px solid transparent" }
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
