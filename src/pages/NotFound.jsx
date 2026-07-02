import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/layout/SEO";
import { Container } from "../components/ui/Primitives";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
        <div className="blob animate-blob" style={{ width: 500, height: 500, background: "radial-gradient(circle, #818cf8, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

        <Container className="relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <div className="text-[9rem] font-extrabold leading-none tracking-tighter" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "linear-gradient(135deg, #4f46e5 0%, #a5b4fc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              404
            </div>
            <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <span className="gradient-text">Page not found</span>
            </h1>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/" className="btn-primary">← Back to Home</Link>
              <Link to="/contact" className="btn-outline">Contact Support</Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[{ to: "/services", label: "Services" }, { to: "/about", label: "About" }, { to: "/why-bmtax", label: "Why BMTAX" }].map((link) => (
                <Link key={link.to} to={link.to} className="rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}>
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
