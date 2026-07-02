import SEO from "../components/layout/SEO";
import ServiceCard from "../components/ui/ServiceCard";
import { Container, Eyebrow } from "../components/ui/Primitives";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Explore BMTAX's full range of tax and compliance services — GST registration, GST return filing, income tax returns, tax audits, Udyam registration, balance sheet & P&L preparation, and TDS return filing."
        path="/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://bmtaxopc.com/services/${s.slug}`,
            name: s.name
          }))
        }}
      />

      <section className="bg-ink-700 py-20 text-paper-100">
        <Container>
          <Eyebrow>What We Do</Eyebrow>
          <h1 className="max-w-2xl text-4xl font-semibold sm:text-5xl">
            Every filing, registration and report &mdash; handled.
          </h1>
          <p className="mt-5 max-w-xl text-paper-100/70">
            Nine core services covering the full lifecycle of tax and financial compliance for
            individuals, startups and businesses.
          </p>
        </Container>
      </section>

      <section className="bg-paper-100 py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
