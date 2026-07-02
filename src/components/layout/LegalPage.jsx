import { motion } from "framer-motion";
import { Container } from "../ui/Primitives";
import SEO from "./SEO";

/** Individual section block within a legal page */
export function LegalSection({ heading, children }) {
  return (
    <div>
      <h2 className="mb-3 text-base font-bold" style={{ color: "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {heading}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {children}
      </div>
    </div>
  );
}

/** Page wrapper for legal/policy pages */
export default function LegalPage({ title, eyebrow, description, path, effectiveDate, children }) {
  return (
    <>
      {path && description && (
        <SEO title={title} description={description} path={path} />
      )}

      <section className="page-hero">
        <div className="blob animate-blob" style={{ width: 400, height: 400, background: "radial-gradient(circle, #818cf8, transparent 70%)", top: "-80px", right: "5%" }} />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">{eyebrow || "Legal"}</span>
            <h1 className="mt-2 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <span className="gradient-text">{title}</span>
            </h1>
            {effectiveDate && (
              <p className="mt-4 text-sm" style={{ color: "var(--text-dim)" }}>
                Effective date: {effectiveDate}
              </p>
            )}
          </motion.div>
        </Container>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--bg)" }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-3xl space-y-8 rounded-2xl p-8 sm:p-10"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "0 2px 15px rgba(0,0,0,0.04)" }}
          >
            {children}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
