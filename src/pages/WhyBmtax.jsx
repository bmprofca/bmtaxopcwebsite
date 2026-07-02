import { motion } from "framer-motion";
import SEO from "../components/layout/SEO";
import { Button, Container, Eyebrow } from "../components/ui/Primitives";

const reasons = [
  {
    title: "Expert support and guidance",
    detail:
      "Every filing is handled by professionals who know the Income Tax Act and GST law inside out, so you get advice you can rely on, not guesswork."
  },
  {
    title: "Affordable pricing",
    detail: "Transparent, upfront fees for every service, with no hidden charges or last-minute surprises."
  },
  {
    title: "Timely filing and compliance",
    detail: "We track every due date on your behalf and file ahead of deadlines to help you avoid penalties and interest."
  },
  {
    title: "End-to-end service coverage",
    detail: "From registration to returns, audits and financial reporting — one partner for your entire compliance calendar."
  },
  {
    title: "Personalized assistance",
    detail: "A dedicated point of contact who understands your business, not a rotating queue of support tickets."
  },
  {
    title: "Trusted by clients across India",
    detail: "Individuals, startups and growing businesses rely on BMTAX for accurate, dependable compliance support."
  }
];

export default function WhyBmtax() {
  return (
    <>
      <SEO
        title="Why Choose BMTAX"
        description="Why choose BMTAX INDIA (OPC) PRIVATE LIMITED: expert support, affordable pricing, timely filing, end-to-end service coverage, personalized assistance, and a track record trusted by clients across India."
        path="/why-bmtax"
      />

      <section className="bg-ink-700 py-20 text-paper-100">
        <Container>
          <Eyebrow>Why BMTAX</Eyebrow>
          <h1 className="max-w-2xl text-4xl font-semibold sm:text-5xl">
            Built on trust, expertise and personalized service.
          </h1>
          <p className="mt-5 max-w-xl text-paper-100/70">
            Choosing the right partner for your tax and compliance needs is crucial &mdash; and
            that&apos;s where BMTAX INDIA (OPC) PRIVATE LIMITED stands out.
          </p>
        </Container>
      </section>

      <section className="bg-paper-100 py-20">
        <Container>
          <p className="max-w-2xl text-ink-700/75">
            Whether you&apos;re an individual, a startup, or a growing business, we provide
            reliable and cost-effective solutions that save your time, ensure accuracy, and keep
            you fully compliant with all legal requirements. With a team of experienced
            professionals and a commitment to quality, BMTAX simplifies complex processes like
            GST, Income Tax, audits and financial reporting &mdash; so you can focus on what you do
            best: growing your business.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
                className="border-l-2 border-brass-400 pl-6"
              >
                <h2 className="text-lg font-semibold text-ink-800">{reason.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/70">{reason.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <Button to="/contact" variant="brass">
              Talk to BMTAX
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
