import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/layout/SEO";
import Seal from "../components/ui/Seal";
import ServiceCard from "../components/ui/ServiceCard";
import { Button, Container, Eyebrow, LedgerDivider } from "../components/ui/Primitives";
import { business } from "../data/business";
import { services } from "../data/services";

const highlights = [
  { label: "Expert support and guidance", detail: "Chartered accountants and tax professionals on every filing." },
  { label: "Affordable pricing", detail: "Transparent, upfront fees with no hidden charges." },
  { label: "Timely filing and compliance", detail: "Reminders and tracking so no due date is ever missed." },
  { label: "End-to-end service coverage", detail: "From registration to returns, audits and reporting." },
  { label: "Personalized assistance", detail: "A dedicated point of contact for every client." },
  { label: "Trusted across India", detail: "Serving individuals, startups and growing businesses." }
];

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
            addressCountry: "IN"
          }
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-700 text-paper-100">
        <div className="pointer-events-none absolute inset-0 bg-ledger-lines opacity-[0.05]" />
        <Container className="relative flex flex-col-reverse items-center gap-12 py-20 lg:flex-row lg:gap-16 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <Eyebrow>Tax Consultancy &amp; Compliance &mdash; Kharupetia, Assam</Eyebrow>
            <h1 className="text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              Simplifying tax,
              <br />
              empowering growth.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper-100/70">
              BMTAX INDIA (OPC) PRIVATE LIMITED is a professional tax consultancy helping
              individuals, small businesses and startups across India stay fully compliant &mdash;
              GST, Income Tax, audits and financial reporting, handled end to end.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/contact" variant="brass">
                Get started
              </Button>
              <Button to="/services" variant="paperGhost">
                Explore services
              </Button>
            </div>
            <p className="mt-8 font-mono text-xs text-paper-100/50">
              Call {business.phone} &middot; {business.email}
            </p>
          </motion.div>

          <Seal className="h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56" />
        </Container>
      </section>

      {/* About strip */}
      <section className="bg-paper-100 py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>What is BMTAX?</Eyebrow>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              A trusted partner for your end-to-end taxation needs.
            </h2>
          </div>
          <div className="space-y-4 text-ink-700/75">
            <p>
              BMTAX is a professional tax consultancy and compliance service provider dedicated to
              simplifying financial, legal and regulatory processes for individuals, small
              businesses and startups across India.
            </p>
            <p>
              With a client-first approach and in-depth domain knowledge, we act as a trusted
              partner for GST registration and return filing, Income Tax returns, tax audits,
              Udyam registration, balance sheet and profit &amp; loss preparation, and more &mdash;
              reliable, affordable, and always on time.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-teal-600">
              More about BMTAX <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Container>
      </section>

      <Container>
        <LedgerDivider />
      </Container>

      {/* Services */}
      <section className="bg-paper-100 py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>Popular Services</Eyebrow>
              <h2 className="text-3xl font-semibold sm:text-4xl">Filed right. On time. Every time.</h2>
            </div>
            <Button to="/services" variant="ghost">
              View all services
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="bg-ink-800 py-20 text-paper-100">
        <Container>
          <div className="max-w-xl">
            <Eyebrow>Why Choose BMTAX?</Eyebrow>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Trust, expertise and personalized service.
            </h2>
            <p className="mt-4 text-paper-100/70">
              Whether you&apos;re an individual, a startup, or a growing business, we provide
              reliable, cost-effective solutions that save your time, ensure accuracy and keep
              you fully compliant.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-paper-100/10 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="bg-ink-800 p-7"
              >
                <span className="font-mono text-xs text-brass-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-base font-semibold text-paper-100">{item.label}</h3>
                <p className="mt-2 text-sm text-paper-100/60">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Button to="/why-bmtax" variant="paperGhost">
              Why BMTAX, in detail
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brass-400 py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-3xl font-semibold text-ink-800 sm:text-4xl">
            Ready to get compliant, stress-free?
          </h2>
          <p className="max-w-md text-ink-800/80">
            Talk to our team about GST, ITR, audits or registration &mdash; we&apos;ll take it from there.
          </p>
          <Button to="/contact" variant="primary" className="!bg-ink-800 hover:!bg-ink-900">
            Contact BMTAX
          </Button>
        </Container>
      </section>
    </>
  );
}
