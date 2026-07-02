import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/layout/SEO";
import { Container } from "../components/ui/Primitives";

const reasons = [
  { icon: "🛡️", title: "Expert Support & Guidance", detail: "Every filing is handled by professionals who know the Income Tax Act and GST law inside out, so you get advice you can rely on, not guesswork.", color: "accent" },
  { icon: "💰", title: "Affordable Pricing", detail: "Transparent, upfront fees for every service, with no hidden charges or last-minute surprises.", color: "emerald" },
  { icon: "⏰", title: "Timely Filing & Compliance", detail: "We track every due date on your behalf and file ahead of deadlines to help you avoid penalties and interest.", color: "gold" },
  { icon: "🔄", title: "End-to-End Coverage", detail: "From registration to returns, audits and financial reporting — one partner for your entire compliance calendar.", color: "accent" },
  { icon: "👤", title: "Personalized Assistance", detail: "A dedicated point of contact who understands your business, not a rotating queue of support tickets.", color: "emerald" },
  { icon: "🌍", title: "Trusted by Clients Across India", detail: "Individuals, startups and growing businesses rely on BMTAX for accurate, dependable compliance support.", color: "gold" },
];

const stats = [
  { number: "500+", label: "Clients Served" }, { number: "100%", label: "Compliance Rate" }, { number: "9+", label: "Services Offered" }, { number: "24h", label: "Avg Response Time" },
];

const colorConfig = {
  accent: { bg: "var(--accent-bg)", border: "rgba(79,70,229,0.12)" },
  emerald: { bg: "#ecfdf5", border: "rgba(5,150,105,0.12)" },
  gold: { bg: "#fffbeb", border: "rgba(217,119,6,0.12)" },
};

export default function WhyBmtax() {
  return (
    <>
      <SEO title="Why Choose BMTAX" description="Why choose BMTAX INDIA (OPC) PRIVATE LIMITED: expert support, affordable pricing, timely filing, end-to-end service coverage, personalized assistance, and a track record trusted by clients across India." path="/why-bmtax" />

      <section className="page-hero">
        <div className="blob animate-blob" style={{ width: 500, height: 500, background: "radial-gradient(circle, #818cf8, transparent 70%)", top: "-100px", right: "-50px" }} />
        <div className="blob animate-blob animation-delay-3000" style={{ width: 350, height: 350, background: "radial-gradient(circle, #06b6d4, transparent 70%)", bottom: "-50px", left: "5%" }} />

        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">Why BMTAX</span>
            <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text)" }}>
              Built on trust, expertise &amp; <span className="gradient-text">personalized service.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Choosing the right partner for your tax and compliance needs is crucial — and that's where BMTAX INDIA (OPC) PRIVATE LIMITED stands out.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-10 sm:py-14" style={{ backgroundColor: "var(--bg)" }}>
        <Container>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="max-w-3xl text-base leading-loose" style={{ color: "var(--text-muted)" }}>
            Whether you're an individual, a startup, or a growing business, we provide reliable and cost-effective solutions that save your time, ensure accuracy, and keep you fully compliant with all legal requirements. With a team of experienced professionals and a commitment to quality, BMTAX simplifies complex processes like GST, Income Tax, audits and financial reporting — so you can focus on what you do best: growing your business.
          </motion.p>
        </Container>
      </section>

      <div style={{ background: "linear-gradient(135deg, rgba(79,70,229,0.05) 0%, rgba(5,150,105,0.03) 100%)", borderTop: "1px solid rgba(79,70,229,0.1)", borderBottom: "1px solid rgba(79,70,229,0.1)" }}>
        <Container className="py-8 sm:py-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }} className="text-center">
                <div className="text-2xl font-extrabold sm:text-3xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--accent)" }}>{s.number}</div>
                <div className="mt-1 text-xs font-medium" style={{ color: "var(--text-dim)" }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      <section className="py-14 sm:py-16" style={{ backgroundColor: "var(--surface)" }}>
        <Container>
          <div className="mb-8 sm:mb-10">
            <span className="eyebrow">Our Advantages</span>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text)" }}>6 reasons to choose us</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {reasons.map((reason, i) => {
              const cfg = colorConfig[reason.color];
              return (
                <motion.div key={reason.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-7"
                  style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{reason.icon}</span>
                      <div>
                        <h2 className="text-base font-bold" style={{ color: "var(--text)" }}>{reason.title}</h2>
                        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{reason.detail}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="mt-12 text-center">
            <Link to="/contact" className="btn-primary">Talk to BMTAX →</Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
