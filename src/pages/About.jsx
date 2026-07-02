import { motion } from "framer-motion";
import SEO from "../components/layout/SEO";
import TeamCard from "../components/ui/TeamCard";
import { Container, Eyebrow, LedgerDivider } from "../components/ui/Primitives";
import { business } from "../data/business";
import { team } from "../data/team";

export default function About() {
  return (
    <>
      <SEO
        title="About BMTAX"
        description="BMTAX INDIA (OPC) PRIVATE LIMITED is a tax consultancy and compliance service provider based in Kharupetia, Assam, serving individuals, small businesses and startups across India."
        path="/about"
      />

      <section className="bg-ink-700 py-20 text-paper-100">
        <Container>
          <Eyebrow>About BMTAX</Eyebrow>
          <h1 className="max-w-2xl text-4xl font-semibold sm:text-5xl">
            A trusted partner for taxation and compliance.
          </h1>
        </Container>
      </section>

      <section className="bg-paper-100 py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-ink-700/80"
          >
            <p>
              <strong className="text-ink-800">{business.legalName}</strong>, popularly known as
              BMTAX, is a professional tax consultancy and compliance service provider dedicated
              to simplifying financial, legal and regulatory processes for individuals, small
              businesses and startups across India.
            </p>
            <p>
              With a client-first approach and in-depth domain knowledge, BMTAX acts as a trusted
              partner for your end-to-end taxation and compliance needs.
            </p>
            <p>
              We offer a wide range of services including GST registration and return filing,
              Income Tax returns, tax audits, Udyam registration, balance sheet and profit &amp;
              loss account preparation, and more. Our goal is to provide reliable, affordable and
              timely support, ensuring that our clients stay fully compliant with all applicable
              laws and regulations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-ink-700/10 bg-paper-200 p-8"
          >
            <h2 className="text-lg font-semibold text-ink-800">Registered details</h2>
            <dl className="mt-4 space-y-3 font-mono text-sm text-ink-700/70">
              <div className="flex justify-between gap-4 border-b border-ink-700/10 pb-3">
                <dt>CIN</dt>
                <dd className="text-right">{business.cin}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-ink-700/10 pb-3">
                <dt>PAN</dt>
                <dd className="text-right">{business.pan}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-ink-700/10 pb-3">
                <dt>Registered office</dt>
                <dd className="text-right">{business.address.full}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Email</dt>
                <dd className="text-right">{business.email}</dd>
              </div>
            </dl>
          </motion.div>
        </Container>
      </section>

      <Container>
        <LedgerDivider />
      </Container>

      <section className="bg-paper-100 py-20">
        <Container>
          <Eyebrow>Meet Our Team</Eyebrow>
          <h2 className="text-3xl font-semibold sm:text-4xl">The people behind every filing.</h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
