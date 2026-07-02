import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/layout/SEO";
import { Container } from "../components/ui/Primitives";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <section
        className="relative flex min-h-[88vh] items-center justify-center overflow-hidden"
        style={{ backgroundColor: "var(--deep)" }}
      >
        {/* Blobs */}
        <div
          className="blob animate-blob"
          style={{
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* 404 */}
            <div
              className="text-[9rem] font-extrabold leading-none tracking-tighter"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: "linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0.08) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              404
            </div>

            <h1
              className="mt-4 text-3xl font-extrabold sm:text-4xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="gradient-text">Page not found</span>
            </h1>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.7)" }}>
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
                }}
              >
                ← Back to Home
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(248,250,252,0.8)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                Contact Support
              </Link>
            </div>

            {/* Quick links */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                { to: "/services", label: "Services" },
                { to: "/about", label: "About" },
                { to: "/why-bmtax", label: "Why BMTAX" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200"
                  style={{
                    background: "rgba(30,41,59,0.6)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "rgba(148,163,184,0.7)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#f8fafc";
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(148,163,184,0.7)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
