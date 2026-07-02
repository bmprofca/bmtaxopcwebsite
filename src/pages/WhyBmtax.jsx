import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/layout/SEO";
import { Container } from "../components/ui/Primitives";

const reasons = [
  {
    icon: "🛡️",
    title: "Expert Support & Guidance",
    detail:
      "Every filing is handled by professionals who know the Income Tax Act and GST law inside out, so you get advice you can rely on, not guesswork.",
    color: "accent",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    detail:
      "Transparent, upfront fees for every service, with no hidden charges or last-minute surprises.",
    color: "emerald",
  },
  {
    icon: "⏰",
    title: "Timely Filing & Compliance",
    detail:
      "We track every due date on your behalf and file ahead of deadlines to help you avoid penalties and interest.",
    color: "gold",
  },
  {
    icon: "🔄",
    title: "End-to-End Coverage",
    detail:
      "From registration to returns, audits and financial reporting — one partner for your entire compliance calendar.",
    color: "accent",
  },
  {
    icon: "👤",
    title: "Personalized Assistance",
    detail:
      "A dedicated point of contact who understands your business, not a rotating queue of support tickets.",
    color: "emerald",
  },
  {
    icon: "🌍",
    title: "Trusted by Clients Across India",
    detail:
      "Individuals, startups and growing businesses rely on BMTAX for accurate, dependable compliance support.",
    color: "gold",
  },
];

const stats = [
  { number: "500+", label: "Clients Served" },
  { number: "100%", label: "Compliance Rate" },
  { number: "9+", label: "Services Offered" },
  { number: "24h", label: "Avg Response Time" },
];

const colorConfig = {
  accent: { bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.2)", glow: "rgba(99,102,241,0.12)" },
  emerald: { bg: "rgba(16,185,129,0.06)", border: "rgba(16,185,129,0.2)", glow: "rgba(16,185,129,0.1)" },
  gold: { bg: "rgba(245,158,11,0.06)", border: "rgba(245,158,11,0.2)", glow: "rgba(245,158,11,0.08)" },
};

export default function WhyBmtax() {
  return (
    <>
      <SEO
        title="Why Choose BMTAX"
        description="Why choose BMTAX INDIA (OPC) PRIVATE LIMITED: expert support, affordable pricing, timely filing, end-to-end service coverage, personalized assistance, and a track record trusted by clients across India."
        path="/why-bmtax"
      />

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="page-hero">
        <div
          className="blob animate-blob"
          style={{
            width: 500,
            height: 500,
            background: "radial-gradient(circle, #4f46e5, transparent 70%)",
            top: "-100px",
            right: "-50px",
          }}
        />
        <div
          className="blob animate-blob animation-delay-3000"
          style={{
            width: 350,
            height: 350,
            background: "radial-gradient(circle, #10b981, transparent 70%)",
            bottom: "-50px",
            left: "5%",
          }}
        />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Why BMTAX</span>
            <h1
              className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Built on trust, expertise &amp;{" "}
              <span className="gradient-text">personalized service.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "rgba(148,163,184,0.8)" }}>
              Choosing the right partner for your tax and compliance needs is crucial — and
              that's where BMTAX INDIA (OPC) PRIVATE LIMITED stands out.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── INTRO PARA ────────────────────────────────── */}
      <section className="py-14" style={{ backgroundColor: "var(--deep)" }}>
        <Container>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl text-base leading-loose"
            style={{ color: "rgba(148,163,184,0.75)" }}
          >
            Whether you're an individual, a startup, or a growing business, we provide
            reliable and cost-effective solutions that save your time, ensure accuracy, and keep
            you fully compliant with all legal requirements. With a team of experienced
            professionals and a commitment to quality, BMTAX simplifies complex processes like
            GST, Income Tax, audits and financial reporting — so you can focus on what you do
            best: growing your business.
          </motion.p>
        </Container>
      </section>

      {/* ── STATS BANNER ──────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(16,185,129,0.06) 100%)",
          borderTop: "1px solid rgba(99,102,241,0.12)",
          borderBottom: "1px solid rgba(99,102,241,0.12)",
        }}
      >
        <Container className="py-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="text-center"
              >
                <div
                  className="text-3xl font-extrabold"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    background: "linear-gradient(135deg, #f8fafc, #a5b4fc)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.number}
                </div>
                <div className="mt-1 text-xs font-medium" style={{ color: "rgba(148,163,184,0.6)" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── REASONS GRID ──────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--deep)" }}>
        <Container>
          <div className="mb-10">
            <span className="eyebrow">Our Advantages</span>
            <h2
              className="mt-2 text-3xl font-extrabold sm:text-4xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              6 reasons to choose us
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, i) => {
              const cfg = colorConfig[reason.color];
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: cfg.bg,
                    border: `1px solid ${cfg.border}`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle at 10% 20%, ${cfg.glow}, transparent 60%)` }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{reason.icon}</span>
                      <div>
                        <h2 className="text-base font-bold text-white">{reason.title}</h2>
                        <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.75)" }}>
                          {reason.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-12 text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.04]"
              style={{
                background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                boxShadow: "0 8px 30px rgba(99,102,241,0.35)",
              }}
            >
              Talk to BMTAX →
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
