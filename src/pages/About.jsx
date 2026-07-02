import { motion } from "framer-motion";
import SEO from "../components/layout/SEO";
import TeamCard from "../components/ui/TeamCard";
import { Container } from "../components/ui/Primitives";
import { business } from "../data/business";
import { team } from "../data/team";

const milestones = [
  { year: "2025", title: "Company Incorporated", desc: "BMTAX INDIA (OPC) PRIVATE LIMITED registered with MCA." },
  { year: "2025", title: "GST Services Launch", desc: "Started offering end-to-end GST registration and return filing." },
  { year: "2025", title: "Expanding Coverage", desc: "Extended services to Income Tax, Audits, and Financial reporting." },
  { year: "Now", title: "500+ Clients Served", desc: "Trusted by individuals, startups and businesses across India." },
];

const values = [
  { icon: "🎯", title: "Accuracy First", desc: "Every return, every form — filed correctly the first time." },
  { icon: "🤝", title: "Client-First Approach", desc: "Your success is our metric. We go beyond just filing." },
  { icon: "⚡", title: "Speed & Efficiency", desc: "Quick turnarounds without compromising on quality." },
  { icon: "🔒", title: "Data Confidentiality", desc: "Your financial data is handled with the utmost security." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  return (
    <>
      <SEO
        title="About BMTAX"
        description="BMTAX INDIA (OPC) PRIVATE LIMITED is a tax consultancy and compliance service provider based in Kharupetia, Assam, serving individuals, small businesses and startups across India."
        path="/about"
      />

      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="page-hero">
        {/* Blobs */}
        <div
          className="blob animate-blob"
          style={{
            width: 400,
            height: 400,
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
            top: "-100px",
            right: "10%",
          }}
        />
        <div
          className="blob animate-blob animation-delay-2000"
          style={{
            width: 300,
            height: 300,
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
            <span className="eyebrow">About BMTAX</span>
            <h1
              className="mt-2 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              A trusted partner for{" "}
              <span className="gradient-text">taxation and compliance.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "rgba(148,163,184,0.8)" }}>
              Based in Kharupetia, Assam — serving clients across India with expertise,
              transparency and a commitment to getting it right.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── ABOUT + REGISTERED DETAILS ───────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--deep)" }}>
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Who We Are
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.8)" }}>
              <strong className="text-white">{business.legalName}</strong>, popularly known as
              BMTAX, is a professional tax consultancy and compliance service provider dedicated to
              simplifying financial, legal and regulatory processes for individuals, small businesses
              and startups across India.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.8)" }}>
              With a client-first approach and in-depth domain knowledge, BMTAX acts as a trusted
              partner for your end-to-end taxation and compliance needs.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.8)" }}>
              We offer a wide range of services including GST registration and return filing,
              Income Tax returns, tax audits, Udyam registration, balance sheet and profit &amp;
              loss account preparation, and more — reliable, affordable and always on time.
            </p>

            {/* Values */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-xl p-4"
                  style={{
                    background: "rgba(30,41,59,0.6)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="text-2xl">{v.icon}</div>
                  <h3 className="mt-2 text-sm font-bold text-white">{v.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: "rgba(148,163,184,0.7)" }}>
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Registered details */}
            <div
              className="rounded-2xl p-7"
              style={{
                background: "rgba(30,41,59,0.7)",
                border: "1px solid rgba(99,102,241,0.15)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-circle text-base">🏢</div>
                <h2 className="text-base font-bold text-white">Registered Details</h2>
              </div>
              <dl className="space-y-4">
                {[
                  { label: "Legal Name", value: business.legalName },
                  { label: "CIN", value: business.cin },
                  { label: "PAN", value: business.pan },
                  { label: "Registered Office", value: business.address.full },
                  { label: "Phone", value: business.phone },
                  { label: "Email", value: business.email },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between gap-4 pb-4"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <dt className="font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(148,163,184,0.5)", flexShrink: 0 }}>
                      {item.label}
                    </dt>
                    <dd className="text-right text-xs font-medium text-white">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Timeline */}
            <div className="mt-6 space-y-4">
              <h3 className="text-sm font-bold text-white">Our Journey</h3>
              <div className="space-y-3">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className="flex h-8 w-14 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                        style={{
                          background: "rgba(99,102,241,0.12)",
                          border: "1px solid rgba(99,102,241,0.2)",
                          color: "var(--accent-light)",
                        }}
                      >
                        {m.year}
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="mt-2 h-full w-px" style={{ background: "rgba(99,102,241,0.15)" }} />
                      )}
                    </div>
                    <div className="pb-4">
                      <p className="text-xs font-semibold text-white">{m.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "rgba(148,163,184,0.6)" }}>
                        {m.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── TEAM ──────────────────────────────────────── */}
      <section
        className="py-20"
        style={{
          background: "rgba(30,41,59,0.25)",
          borderTop: "1px solid rgba(99,102,241,0.08)",
        }}
      >
        <Container>
          <div className="mb-10">
            <span className="eyebrow">Meet Our Team</span>
            <h2
              className="mt-2 text-3xl font-extrabold sm:text-4xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              The people behind{" "}
              <span className="gradient-text">every filing.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
