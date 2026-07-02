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
  { icon: "🛡️", label: "Expert Support", detail: "Chartered accountants and tax professionals on every filing.", color: "accent" },
  { icon: "💰", label: "Affordable Pricing", detail: "Transparent, upfront fees with no hidden charges.", color: "emerald" },
  { icon: "⏰", label: "Timely Filing", detail: "Reminders and tracking so no due date is ever missed.", color: "gold" },
  { icon: "🔄", label: "End-to-End Coverage", detail: "From registration to returns, audits and reporting.", color: "accent" },
  { icon: "👤", label: "Personalized Assistance", detail: "A dedicated point of contact for every client.", color: "emerald" },
  { icon: "🌍", label: "Trusted Across India", detail: "Serving individuals, startups and growing businesses.", color: "gold" },
];

const colorConfig = {
  accent: { bg: "var(--accent-bg)", border: "rgba(79,70,229,0.12)", iconClass: "icon-circle" },
  emerald: { bg: "#ecfdf5", border: "rgba(5,150,105,0.12)", iconClass: "icon-circle-emerald" },
  gold: { bg: "#fffbeb", border: "rgba(217,119,6,0.12)", iconClass: "icon-circle-gold" },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

// Free-to-use images (Unsplash License — free for commercial & personal use, no permission needed, no attribution required)
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80", // Scott Graham — paperwork/laptop meeting
  about: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80", // Kelly Sikkema — paper, pen & calculator
};

export default function Home() {
  return (
    <>
      <SEO
        title="GST, Income Tax & Compliance Services in India"
        description="BMTAX INDIA (OPC) PRIVATE LIMITED offers GST registration, GST return filing, Income Tax returns, tax audits, Udyam registration, balance sheet and P&L preparation, and TDS return filing for individuals and businesses across India."
        path="/"
        jsonLd={{ "@context": "https://schema.org", "@type": "AccountingService", name: business.legalName, url: "https://bmtaxopc.com/", telephone: business.phone, email: business.email, address: { "@type": "PostalAddress", streetAddress: business.address.line1, addressLocality: "Darrang", addressRegion: "Assam", postalCode: "784115", addressCountry: "IN" } }}
      />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="hero-section flex items-center lg:min-h-[80vh]">
        <div className="hero-bg" />
        <div className="blob animate-blob h-[500px] w-[500px]" style={{ background: "radial-gradient(circle, #818cf8, transparent 70%)", top: "5%", right: "5%" }} />
        <div className="blob animate-blob h-[400px] w-[400px] animation-delay-2000" style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)", bottom: "10%", left: "10%" }} />
        <div className="blob animate-blob h-[300px] w-[300px] animation-delay-4000" style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)", top: "40%", left: "30%", opacity: 0.08 }} />

        <Container className="relative z-10 grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="eyebrow">Tax Consultancy · Kharupetia, Assam</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text)" }}>
              Simplifying tax,<br /><span className="gradient-text">empowering growth.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2 }}
              className="mt-4 max-w-lg text-sm leading-relaxed sm:mt-6 sm:text-base" style={{ color: "var(--text-muted)" }}>
              BMTAX INDIA (OPC) PRIVATE LIMITED — your professional tax consultancy for GST, Income Tax, audits and financial reporting, handled end-to-end for individuals, businesses and startups across India.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.3 }} className="mt-6 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <Link to="/contact" className="btn-primary hover:scale-[1.03] active:scale-[0.98]">
                Get started free
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link to="/services" className="btn-outline hover:scale-[1.02]">Explore services</Link>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-5 flex flex-wrap items-center gap-3 text-xs sm:mt-7 sm:gap-4" style={{ color: "var(--text-dim)" }}>
              <a href={business.phoneHref} className="hover:text-accent transition-colors">📞 {business.phone}</a>
              <span style={{ color: "var(--border)" }}>•</span>
              <a href={`mailto:${business.email}`} className="hover:text-accent transition-colors">✉️ {business.email}</a>
            </motion.p>
          </div>

          {/* Right – Photo with stat cards overlaid */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.25 }} className="hidden lg:block">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl" style={{ boxShadow: "0 20px 50px rgba(79,70,229,0.15)" }}>
                <img
                  src={IMAGES.hero}
                  alt="Tax documents and financial paperwork on a desk"
                  className="h-[420px] w-full object-cover"
                  loading="eager"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 grid grid-cols-2 gap-3 rounded-2xl p-4" style={{ background: "var(--bg)", boxShadow: "0 12px 30px rgba(0,0,0,0.1)", border: "1px solid var(--border)" }}>
                {stats.map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }} className="stat-card">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-4 rounded-2xl px-4 py-3" style={{ background: "#ecfdf5", border: "1px solid rgba(5,150,105,0.15)", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold" style={{ color: "#059669" }}>GST Filing Active</span>
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -left-8 rounded-2xl px-4 py-3" style={{ background: "var(--accent-bg)", border: "1px solid rgba(79,70,229,0.12)", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                <div className="flex items-center gap-2">
                  <span className="text-sm">⚡</span>
                  <span className="text-xs font-semibold" style={{ color: "var(--accent)" }}>ITR Filed in 24h</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────── */}
      <section className="py-14 sm:py-16" style={{ background: "var(--surface)" }}>
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="overflow-hidden rounded-2xl" style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}>
              <img
                src={IMAGES.about}
                alt="Professional reviewing financial paperwork"
                className="h-56 w-full object-cover sm:h-72 lg:h-96"
                loading="lazy"
              />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-3 sm:space-y-4">
            <span className="eyebrow">What is BMTAX?</span>
            <h2 className="mt-2 text-2xl font-extrabold leading-snug sm:text-4xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text)" }}>
              A trusted partner for your <span className="gradient-text-accent">end-to-end taxation</span> needs.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>BMTAX is a professional tax consultancy and compliance service provider dedicated to simplifying financial, legal and regulatory processes for individuals, small businesses and startups across India.</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>With a client-first approach and in-depth domain knowledge, we act as a trusted partner for GST, Income Tax, audits and financial reporting — reliable, affordable, and always on time.</p>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-accent-dark" style={{ color: "var(--accent)" }}>More about BMTAX →</Link>
          </motion.div>
        </Container>
      </section>

      <Container><div className="section-divider" /></Container>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section className="py-14 sm:py-16 lg:py-20" style={{ backgroundColor: "var(--bg)" }}>
        <Container>
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Popular Services</span>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text)" }}>Filed right. <span className="gradient-text">On time. Every time.</span></h2>
            </div>
            <Link to="/services" className="btn-outline shrink-0 text-xs">View all services →</Link>
          </div>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {services.map((service, i) => (<ServiceCard key={service.slug} service={service} index={i} />))}
          </div>
        </Container>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section className="py-14 sm:py-16 lg:py-20" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <Container>
          <div className="max-w-xl">
            <span className="eyebrow">Why Choose BMTAX?</span>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text)" }}>Trust, expertise and <span className="gradient-text">personalized service.</span></h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>Whether you're an individual, a startup, or a growing business, we provide reliable, cost-effective solutions that save your time and keep you fully compliant.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {highlights.map((item, i) => {
              const cfg = colorConfig[item.color];
              return (
                <motion.div key={item.label} custom={i % 3} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
                  className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-6"
                  style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-mono text-xs font-bold" style={{ color: "var(--text-dim)" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-3 text-sm font-bold" style={{ color: "var(--text)" }}>{item.label}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.detail}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-10"><Link to="/why-bmtax" className="btn-outline">Why BMTAX, in detail →</Link></div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 40%, #ecfdf5 100%)" }} />
        <div className="blob" style={{ background: "radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)", width: 600, height: 600, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <Container className="relative z-10 flex flex-col items-center gap-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">Ready to Start?</span>
            <h2 className="mt-3 max-w-2xl text-2xl font-extrabold sm:text-4xl lg:text-5xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text)" }}>
              Ready to get <span className="gradient-text">compliant, stress-free?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>Talk to our team about GST, ITR, audits or registration — we'll take it from there.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary hover:scale-[1.04]">Contact BMTAX <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></Link>
            <a href={business.phoneHref} className="btn-outline">📞 Call Now</a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
