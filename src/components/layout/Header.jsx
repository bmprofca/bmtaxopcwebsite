import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { business } from "../../data/business";

const navLinks = [
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

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(15, 23, 42, 0.85)"
          : "rgba(15, 23, 42, 0.5)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(99, 102, 241, 0.15)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="container-page flex h-[70px] items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label="BMTAX home"
        >
          {/* Logo mark */}
          <div
            className="relative flex h-10 w-10 items-center justify-center rounded-xl font-bold text-white text-lg transition-all duration-300 group-hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #6366f1, #4f46e5)",
              boxShadow: "0 4px 15px rgba(99,102,241,0.35)",
            }}
          >
            B
            <div
              className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ boxShadow: "0 0 20px rgba(99,102,241,0.6)" }}
            />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="font-display text-lg font-bold"
              style={{ color: "#f8fafc" }}
            >
              BMTAX
            </span>
            <span
              className="text-[9px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: "rgba(148,163,184,0.7)" }}
            >
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
                  isActive
                    ? "text-white"
                    : "text-paper-100/60 hover:text-paper-100/90"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-bg"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={business.phoneHref}
            className="text-xs font-medium transition-colors duration-200 hover:text-white"
            style={{ color: "rgba(148,163,184,0.7)" }}
          >
            {business.phone}
          </a>
          <a
            href={business.loginUrl}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #6366f1, #4f46e5)",
              boxShadow: "0 4px 15px rgba(99,102,241,0.3)",
            }}
          >
            Client Login
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200 md:hidden"
          style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}
        >
          <motion.div
            animate={open ? "open" : "closed"}
            className="flex h-5 w-5 flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              variants={{
                open: { rotate: 45, y: 7 },
                closed: { rotate: 0, y: 0 },
              }}
              transition={{ duration: 0.25 }}
              className="block h-0.5 w-5 rounded-full bg-paper-100"
            />
            <motion.span
              variants={{
                open: { opacity: 0, scaleX: 0 },
                closed: { opacity: 1, scaleX: 1 },
              }}
              transition={{ duration: 0.25 }}
              className="block h-0.5 w-5 rounded-full bg-paper-100"
            />
            <motion.span
              variants={{
                open: { rotate: -45, y: -7 },
                closed: { rotate: 0, y: 0 },
              }}
              transition={{ duration: 0.25 }}
              className="block h-0.5 w-5 rounded-full bg-paper-100"
            />
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
            className="overflow-hidden md:hidden"
            style={{
              background: "rgba(15,23,42,0.97)",
              borderTop: "1px solid rgba(99,102,241,0.12)",
            }}
            aria-label="Mobile navigation"
          >
            <div className="container-page flex flex-col gap-1 pb-6 pt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-paper-100/65 hover:text-paper-100"
                      }`
                    }
                    style={({ isActive }) =>
                      isActive
                        ? { background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)" }
                        : { background: "transparent", border: "1px solid transparent" }
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.3 }}
                className="mt-3 flex flex-col gap-2"
              >
                <a
                  href={business.phoneHref}
                  className="block rounded-xl px-4 py-3 text-sm font-medium transition-colors"
                  style={{
                    color: "rgba(148,163,184,0.8)",
                    background: "rgba(51,65,85,0.3)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  📞 {business.phone}
                </a>
                <a
                  href={business.loginUrl}
                  className="block rounded-xl px-4 py-3.5 text-center text-sm font-bold text-white transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                    boxShadow: "0 4px 15px rgba(99,102,241,0.3)",
                  }}
                >
                  Client Login ↗
                </a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
