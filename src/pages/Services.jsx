import { useState } from "react";
import SEO from "../components/layout/SEO";
import ServiceCard from "../components/ui/ServiceCard";
import { Container } from "../components/ui/Primitives";
import { services } from "../data/services";
import { motion } from "framer-motion";

const categories = [
  { id: "all", label: "All Services" },
  { id: "GST", label: "GST" },
  { id: "ITR", label: "Income Tax" },
  { id: "AUD", label: "Audit" },
  { id: "FIN", label: "Financial" },
  { id: "MSME", label: "MSME" },
  { id: "TDS", label: "TDS" },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.code.startsWith(activeCategory));

  return (
    <>
      <SEO
        title="Our Services"
        description="Explore BMTAX's full range of tax and compliance services — GST registration, GST return filing, income tax returns, tax audits, Udyam registration, balance sheet & P&L preparation, and TDS return filing."
        path="/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://bmtaxopc.com/services/${s.slug}`,
            name: s.name,
          })),
        }}
      />

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="page-hero">
        <div
          className="blob animate-blob"
          style={{
            width: 450,
            height: 450,
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
            top: "-80px",
            right: "0%",
          }}
        />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">What We Do</span>
            <h1
              className="mt-2 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Every filing, registration &amp; report —{" "}
              <span className="gradient-text">handled.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "rgba(148,163,184,0.8)" }}>
              Nine core services covering the full lifecycle of tax and financial compliance
              for individuals, startups and businesses.
            </p>

            {/* Stats row */}
            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { n: "9", l: "Services" },
                { n: "500+", l: "Clients" },
                { n: "100%", l: "Compliant" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="text-2xl font-extrabold"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      background: "linear-gradient(135deg, #f8fafc, #a5b4fc)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="text-xs font-medium" style={{ color: "rgba(148,163,184,0.6)" }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── FILTER + GRID ─────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--deep)" }}>
        <Container>
          {/* Filter tabs */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200"
                style={
                  activeCategory === cat.id
                    ? {
                        background: "rgba(99,102,241,0.15)",
                        border: "1px solid rgba(99,102,241,0.4)",
                        color: "var(--accent-light)",
                      }
                    : {
                        background: "rgba(30,41,59,0.6)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "rgba(148,163,184,0.7)",
                      }
                }
                onMouseEnter={(e) => {
                  if (activeCategory !== cat.id) {
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)";
                    e.currentTarget.style.color = "rgba(248,250,252,0.9)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat.id) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.color = "rgba(148,163,184,0.7)";
                  }
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.length > 0 ? (
              filtered.map((service, i) => (
                <ServiceCard key={service.slug} service={service} index={i} />
              ))
            ) : (
              <div className="col-span-3 py-20 text-center" style={{ color: "rgba(148,163,184,0.5)" }}>
                No services in this category.
              </div>
            )}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
