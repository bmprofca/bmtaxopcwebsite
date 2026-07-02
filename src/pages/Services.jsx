import { useState } from "react";
import SEO from "../components/layout/SEO";
import ServiceCard from "../components/ui/ServiceCard";
import { Container } from "../components/ui/Primitives";
import { services } from "../data/services";
import { motion } from "framer-motion";

const categories = [
  { id: "all", label: "All Services" }, { id: "GST", label: "GST" }, { id: "ITR", label: "Income Tax" }, { id: "AUD", label: "Audit" }, { id: "FIN", label: "Financial" }, { id: "MSME", label: "MSME" }, { id: "TDS", label: "TDS" },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = activeCategory === "all" ? services : services.filter((s) => s.code.startsWith(activeCategory));

  return (
    <>
      <SEO title="Our Services" description="Explore BMTAX's full range of tax and compliance services — GST registration, GST return filing, income tax returns, tax audits, Udyam registration, balance sheet & P&L preparation, and TDS return filing." path="/services" jsonLd={{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: `https://bmtaxopc.com/services/${s.slug}`, name: s.name })) }} />

      <section className="page-hero">
        <div className="blob animate-blob" style={{ width: 450, height: 450, background: "radial-gradient(circle, #818cf8, transparent 70%)", top: "-80px", right: "0%" }} />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">What We Do</span>
            <h1 className="mt-2 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text)" }}>Every filing, registration &amp; report — <span className="gradient-text">handled.</span></h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>Nine core services covering the full lifecycle of tax and financial compliance for individuals, startups and businesses.</p>
            <div className="mt-6 flex flex-wrap gap-5 sm:mt-8 sm:gap-6">
              {[{ n: "9", l: "Services" }, { n: "500+", l: "Clients" }, { n: "100%", l: "Compliant" }].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--accent)" }}>{s.n}</div>
                  <div className="text-xs font-medium" style={{ color: "var(--text-dim)" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-14 sm:py-16" style={{ backgroundColor: "var(--bg)" }}>
        <Container>
          <div className="mb-8 flex flex-wrap gap-2 sm:mb-10">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className="rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200"
                style={activeCategory === cat.id ? { background: "var(--accent-bg)", border: "1px solid rgba(79,70,229,0.2)", color: "var(--accent)" } : { background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                {cat.label}
              </button>
            ))}
          </div>
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {filtered.length > 0 ? filtered.map((service, i) => (<ServiceCard key={service.slug} service={service} index={i} />)) : <div className="col-span-3 py-20 text-center" style={{ color: "var(--text-dim)" }}>No services in this category.</div>}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
