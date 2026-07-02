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
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } }),
};

// Free-to-use images (Unsplash License — free for commercial & personal use, no permission needed, no attribution required)
const IMAGES = {
  whoWeAre: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80", // Dylan Gillis — team collaborating around a table
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80", // modern office interior
  documents: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1000&q=80", // businessmen meeting
  meeting: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1000&q=80", // team discussion
};

export default function About() {
  return (
    <>
      <SEO title="About BMTAX" description="BMTAX INDIA (OPC) PRIVATE LIMITED is a tax consultancy and compliance service provider based in Kharupetia, Assam, serving individuals, small businesses and startups across India." path="/about" />

      <section className="page-hero">
        <div className="blob animate-blob" style={{ width: 400, height: 400, background: "radial-gradient(circle, #818cf8, transparent 70%)", top: "-100px", right: "10%" }} />
        <div className="blob animate-blob animation-delay-2000" style={{ width: 300, height: 300, background: "radial-gradient(circle, #06b6d4, transparent 70%)", bottom: "-50px", left: "5%" }} />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">About BMTAX</span>
            <h1 className="mt-2 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text)" }}>
              A trusted partner for <span className="gradient-text">taxation and compliance.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>Based in Kharupetia, Assam — serving clients across India with expertise, transparency and a commitment to getting it right.</p>
          </motion.div>
        </Container>
      </section>

      {/* Photo gallery strip */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
        <Container className="-mt-2 mb-0">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { src: IMAGES.whoWeAre, alt: "Team collaborating" },
              { src: IMAGES.office, alt: "Modern office workspace" },
              { src: IMAGES.documents, alt: "Financial documents and laptop" },
              { src: IMAGES.meeting, alt: "Team meeting and brainstorming" },
            ].map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="overflow-hidden rounded-xl" style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}>
                <img src={img.src} alt={img.alt} className="h-32 w-full object-cover sm:h-40" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </Container>
      </motion.div>

      <section className="py-14 sm:py-16" style={{ backgroundColor: "var(--bg)" }}>
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5">
            <div className="overflow-hidden rounded-2xl" style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}>
              <img
                src={IMAGES.whoWeAre}
                alt="BMTAX team collaborating around a table"
                className="h-56 w-full object-cover sm:h-64"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text)" }}>Who We Are</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}><strong style={{ color: "var(--text)" }}>{business.legalName}</strong>, popularly known as BMTAX, is a professional tax consultancy and compliance service provider dedicated to simplifying financial, legal and regulatory processes for individuals, small businesses and startups across India.</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>With a client-first approach and in-depth domain knowledge, BMTAX acts as a trusted partner for your end-to-end taxation and compliance needs.</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>We offer a wide range of services including GST registration and return filing, Income Tax returns, tax audits, Udyam registration, balance sheet and profit &amp; loss account preparation, and more — reliable, affordable and always on time.</p>

            {/* Additional workspace image */}
            <div className="overflow-hidden rounded-2xl" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
              <img
                src={IMAGES.documents}
                alt="Financial documents and analysis on desk"
                className="h-44 w-full object-cover sm:h-52"
                loading="lazy"
              />
            </div>

            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
              {values.map((v, i) => (
                <motion.div key={v.title} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="rounded-xl p-4 sm:p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <div className="text-2xl">{v.icon}</div>
                  <h3 className="mt-2 text-sm font-bold" style={{ color: "var(--text)" }}>{v.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="rounded-2xl p-5 sm:p-7" style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "0 2px 15px rgba(0,0,0,0.04)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-circle text-base">🏢</div>
                <h2 className="text-base font-bold" style={{ color: "var(--text)" }}>Registered Details</h2>
              </div>
              <dl className="space-y-4">
                {[{ label: "Legal Name", value: business.legalName }, { label: "CIN", value: business.cin }, { label: "PAN", value: business.pan }, { label: "Registered Office", value: business.address.full }, { label: "Phone", value: business.phone }, { label: "Email", value: business.email }].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 pb-4 sm:flex-row sm:justify-between sm:gap-4" style={{ borderBottom: "1px solid var(--border)" }}>
                    <dt className="font-mono text-xs font-semibold uppercase tracking-wider shrink-0" style={{ color: "var(--text-dim)" }}>{item.label}</dt>
                    <dd className="break-words text-xs font-medium sm:text-right" style={{ color: "var(--text)" }}>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Office image card */}
            <div className="mt-6 overflow-hidden rounded-2xl" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
              <img
                src={IMAGES.office}
                alt="Professional office environment"
                className="h-44 w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="text-sm font-bold" style={{ color: "var(--text)" }}>Our Journey</h3>
              <div className="space-y-3">
                {milestones.map((m, i) => (
                  <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-14 shrink-0 items-center justify-center rounded-lg text-xs font-bold" style={{ background: "var(--accent-bg)", border: "1px solid rgba(79,70,229,0.12)", color: "var(--accent)" }}>{m.year}</div>
                      {i < milestones.length - 1 && <div className="mt-2 h-full w-px" style={{ background: "rgba(79,70,229,0.12)" }} />}
                    </div>
                    <div className="pb-4">
                      <p className="text-xs font-semibold" style={{ color: "var(--text)" }}>{m.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Team section with group image */}
      <section className="py-14 sm:py-16" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
        <Container>
          <div className="mb-8 grid items-end gap-6 sm:mb-10 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="eyebrow">Meet Our Team</span>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text)" }}>The people behind <span className="gradient-text">every filing.</span></h2>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="hidden overflow-hidden rounded-xl lg:block" style={{ boxShadow: "0 8px 20px rgba(0,0,0,0.06)" }}>
              <img
                src={IMAGES.meeting}
                alt="Team meeting and collaboration"
                className="h-28 w-52 object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (<TeamCard key={member.name} member={member} index={i} />))}
          </div>
        </Container>
      </section>
    </>
  );
}
