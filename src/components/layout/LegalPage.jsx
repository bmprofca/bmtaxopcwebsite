import { motion } from "framer-motion";
import SEO from "./SEO";
import { Container, Eyebrow } from "../ui/Primitives";

export default function LegalPage({ path, title, description, effectiveDate, eyebrow, children }) {
  return (
    <>
      <SEO title={title} description={description} path={path} />

      <section className="bg-ink-700 py-20 text-paper-100">
        <Container>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="max-w-2xl text-4xl font-semibold sm:text-5xl">{title}</h1>
          {effectiveDate && (
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-paper-100/50">
              Effective date: {effectiveDate}
            </p>
          )}
        </Container>
      </section>

      <section className="bg-paper-100 py-16">
        <Container className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose-legal space-y-8 text-ink-700/80"
          >
            {children}
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export function LegalSection({ heading, children }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-ink-800">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed sm:text-base">{children}</div>
    </div>
  );
}
