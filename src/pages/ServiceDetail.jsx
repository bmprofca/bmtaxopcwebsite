import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/layout/SEO";
import { Container } from "../components/ui/Primitives";
import { services, getServiceBySlug } from "../data/services";
import { business } from "../data/business";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <SEO
        title={service.name}
        description={service.description}
        path={`/services/${service.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.name,
          provider: {
            "@type": "AccountingService",
            name: business.legalName,
          },
          areaServed: "IN",
          description: service.description,
        }}
      />

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="page-hero">
        <div
          className="blob animate-blob"
          style={{
            width: 400,
            height: 400,
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
            top: "-80px",
            right: "5%",
          }}
        />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/services"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
              style={{ color: "rgba(148,163,184,0.6)" }}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              All services
            </Link>

            <span className="eyebrow">{service.code}</span>

            <h1
              className="mt-2 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="gradient-text">{service.name}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "rgba(148,163,184,0.8)" }}>
              {service.short}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── DETAIL ────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--deep)" }}>
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold text-white mb-5">Overview</h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.8)" }}>
              {service.description}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
                }}
              >
                Request this service
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(248,250,252,0.8)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                📞 Call us
              </a>
            </div>

            {/* Quick contact info */}
            <div
              className="mt-8 flex items-center gap-3 rounded-xl p-4 text-sm"
              style={{
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.15)",
              }}
            >
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span style={{ color: "rgba(148,163,184,0.8)" }}>
                Typical turnaround: <strong className="text-white">1–3 business days</strong>
              </span>
            </div>
          </motion.div>

          {/* What's included */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="rounded-2xl p-7"
            style={{
              background: "rgba(30,41,59,0.7)",
              border: "1px solid rgba(99,102,241,0.15)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="icon-circle text-sm">✅</div>
              <h2 className="text-sm font-bold text-white">What's Included</h2>
            </div>

            <ul className="space-y-3.5">
              {service.included.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.25)" }}
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" style={{ color: "#34d399" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(248,250,252,0.75)" }}>
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Price note */}
            <div
              className="mt-6 rounded-xl p-4 text-xs"
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.15)",
              }}
            >
              <p className="font-semibold" style={{ color: "var(--accent-light)" }}>💬 Transparent Pricing</p>
              <p className="mt-1" style={{ color: "rgba(148,163,184,0.7)" }}>
                No hidden charges. Get a detailed quote before we start.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── RELATED SERVICES ──────────────────────────── */}
      <section
        className="py-16"
        style={{
          background: "rgba(30,41,59,0.3)",
          borderTop: "1px solid rgba(99,102,241,0.08)",
        }}
      >
        <Container>
          <h2 className="mb-8 text-xl font-bold text-white">Related Services</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {related.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex flex-col gap-2 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(30,41,59,0.6)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  }}
                >
                  <span className="badge badge-accent w-fit">{s.code}</span>
                  <h3 className="text-sm font-bold text-white group-hover:text-accent-light transition-colors">
                    {s.name}
                  </h3>
                  <span className="text-xs" style={{ color: "var(--accent-light)" }}>
                    Learn more →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
