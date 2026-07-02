import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/layout/SEO";
import ServiceCard from "../components/ui/ServiceCard";
import { Container } from "../components/ui/Primitives";
import { business } from "../data/business";
import { services } from "../data/services";

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "9+", label: "Core Services" },
  { number: "100%", label: "Compliance Rate" },
  { number: "3+", label: "Years Active" },
];

const highlights = [
  {
    icon: "🛡️",
    label: "Expert Support",
    detail: "Chartered accountants and tax professionals on every filing.",
    color: "accent",
  },
  {
    icon: "💰",
    label: "Affordable Pricing",
    detail: "Transparent, upfront fees with no hidden charges.",
    color: "emerald",
  },
  {
    icon: "⏰",
    label: "Timely Filing",
    detail: "Reminders and tracking so no due date is ever missed.",
    color: "gold",
  },
  {
    icon: "🔄",
    label: "End-to-End Coverage",
    detail: "From registration to returns, audits and reporting.",
    color: "accent",
  },
  {
    icon: "👤",
    label: "Personalized Assistance",
    detail: "A dedicated point of contact for every client.",
    color: "emerald",
  },
  {
    icon: "🌍",
    label: "Trusted Across India",
    detail: "Serving individuals, startups and growing businesses.",
    color: "gold",
  },
];

const colorConfig = {
  accent: {
    icon: "icon-circle",
    badge: "badge-accent",
    glow: "rgba(99,102,241,0.15)",
    border: "rgba(99,102,241,0.2)",
  },
  emerald: {
    icon: "icon-circle-emerald",
    badge: "badge-emerald",
    glow: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.2)",
  },
  gold: {
    icon: "icon-circle-gold",
    badge: "badge-gold",
    glow: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.2)",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Home() {
  return (
    <>
      <SEO
        title="GST, Income Tax & Compliance Services in India"
        description="BMTAX INDIA (OPC) PRIVATE LIMITED offers GST registration, GST return filing, Income Tax returns, tax audits, Udyam registration, balance sheet and P&L preparation, and TDS return filing for individuals and businesses across India."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AccountingService",
          name: business.legalName,
          url: "https://bmtaxopc.com/",
          telephone: business.phone,
          email: business.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address.line1,
            addressLocality: "Darrang",
            addressRegion: "Assam",
            postalCode: "784115",
            addressCountry: "IN",
          },
        }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-section min-h-[92vh] flex items-center">
        <div className="hero-bg" />

        {/* Blobs */}
        <div
          className="blob animate-blob h-[500px] w-[500px]"
          style={{
            background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
            top: "5%",
            right: "5%",
            animationDelay: "0s",
          }}
        />
        <div
          className="blob animate-blob h-[400px] w-[400px] animation-delay-2000"
          style={{
            background: "radial-gradient(circle, #10b981 0%, transparent 70%)",
            bottom: "10%",
            left: "10%",
          }}
        />
        <div
          className="blob animate-blob h-[300px] w-[300px] animation-delay-4000"
          style={{
            background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)",
            top: "40%",
            left: "30%",
            opacity: 0.07,
          }}
        />

        <Container className="relative z-10 grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow">Tax Consultancy · Kharupetia, Assam</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Simplifying tax,
              <br />
              <span className="gradient-text">empowering growth.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mt-6 max-w-lg text-base leading-relaxed"
              style={{ color: "rgba(148,163,184,0.85)" }}
            >
              BMTAX INDIA (OPC) PRIVATE LIMITED — your professional tax consultancy
              for GST, Income Tax, audits and financial reporting, handled end-to-end
              for individuals, businesses and startups across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-glow active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
                }}
              >
                Get started free
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(248,250,252,0.85)",
                  background: "rgba(255,255,255,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                  e.currentTarget.style.background = "rgba(99,102,241,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                Explore services
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-7 flex flex-wrap items-center gap-4 text-xs"
              style={{ color: "rgba(148,163,184,0.5)" }}
            >
              <a href={business.phoneHref} className="hover:text-white transition-colors">
                📞 {business.phone}
              </a>
              <span style={{ color: "rgba(148,163,184,0.25)" }}>•</span>
              <a href={`mailto:${business.email}`} className="hover:text-white transition-colors">
                ✉️ {business.email}
              </a>
            </motion.p>
          </div>

          {/* Right – Stats grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-8 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
                }}
              />

              <div className="relative grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="stat-card"
                  >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 rounded-2xl px-4 py-3"
                style={{
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold" style={{ color: "#34d399" }}>
                    GST Filing Active
                  </span>
                </div>
              </motion.div>

              {/* Top badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-5 -left-3 rounded-2xl px-4 py-3"
                style={{
                  background: "rgba(99,102,241,0.12)",
                  border: "1px solid rgba(99,102,241,0.25)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">⚡</span>
                  <span className="text-xs font-semibold" style={{ color: "var(--accent-light)" }}>
                    ITR Filed in 24h
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────── */}
      <section className="py-20" style={{ background: "rgba(30,41,59,0.3)" }}>
        <div className="section-divider mb-0" />
        <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">What is BMTAX?</span>
            <h2
              className="mt-2 text-3xl font-extrabold leading-snug sm:text-4xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              A trusted partner for your{" "}
              <span className="gradient-text-accent">end-to-end taxation</span> needs.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.8)" }}>
              BMTAX is a professional tax consultancy and compliance service provider dedicated to
              simplifying financial, legal and regulatory processes for individuals, small businesses
              and startups across India.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.8)" }}>
              With a client-first approach and in-depth domain knowledge, we act as a trusted
              partner for GST, Income Tax, audits and financial reporting — reliable, affordable,
              and always on time.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
              style={{ color: "var(--accent-light)" }}
            >
              More about BMTAX
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </Container>
        <div className="section-divider mt-0" />
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "var(--deep)" }}>
        <Container>
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Popular Services</span>
              <h2
                className="mt-2 text-3xl font-extrabold sm:text-4xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Filed right.{" "}
                <span className="gradient-text">On time. Every time.</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
              style={{
                border: "1px solid rgba(99,102,241,0.25)",
                color: "var(--accent-light)",
                background: "rgba(99,102,241,0.06)",
              }}
            >
              View all services →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────── */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, rgba(30,27,75,0.8) 0%, rgba(15,23,42,0.9) 100%)",
          borderTop: "1px solid rgba(99,102,241,0.1)",
          borderBottom: "1px solid rgba(99,102,241,0.1)",
        }}
      >
        <Container>
          <div className="max-w-xl">
            <span className="eyebrow">Why Choose BMTAX?</span>
            <h2
              className="mt-2 text-3xl font-extrabold sm:text-4xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Trust, expertise and{" "}
              <span className="gradient-text">personalized service.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.75)" }}>
              Whether you're an individual, a startup, or a growing business, we provide
              reliable, cost-effective solutions that save your time and keep you fully compliant.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, i) => {
              const cfg = colorConfig[item.color];
              return (
                <motion.div
                  key={item.label}
                  custom={i % 3}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(30, 41, 59, 0.5)",
                    border: `1px solid ${cfg.border}`,
                  }}
                >
                  {/* Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle at 20% 20%, ${cfg.glow}, transparent 70%)` }}
                  />

                  <div className="relative z-10">
                    {/* Number + Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{item.icon}</span>
                      <span
                        className="font-mono text-xs font-bold"
                        style={{ color: "rgba(148,163,184,0.3)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-3 text-sm font-bold text-paper-100">{item.label}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "rgba(148,163,184,0.7)" }}>
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10">
            <Link
              to="/why-bmtax"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.3)",
              }}
            >
              Why BMTAX, in detail →
            </Link>
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 40%, #064e3b 100%)",
          }}
        />
        <div
          className="blob"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
            width: 600,
            height: 600,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.5,
          }}
        />

        <Container className="relative z-10 flex flex-col items-center gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Ready to Start?</span>
            <h2
              className="mt-3 max-w-2xl text-3xl font-extrabold sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Ready to get{" "}
              <span className="gradient-text">compliant, stress-free?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.8)" }}>
              Talk to our team about GST, ITR, audits or registration — we'll take it from there.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.04]"
              style={{
                background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                boxShadow: "0 8px 30px rgba(99,102,241,0.4)",
              }}
            >
              Contact BMTAX
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              📞 Call Now
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
