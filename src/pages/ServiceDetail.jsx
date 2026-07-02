import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/layout/SEO";
import { Button, Container, Eyebrow } from "../components/ui/Primitives";
import { services, getServiceBySlug } from "../data/services";
import { business } from "../data/business";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <SEO
        title={service.name}
        description={service.description}
        path={`/services/${service.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.name,
          provider: {
            "@type": "AccountingService",
            name: business.legalName
          },
          areaServed: "IN",
          description: service.description
        }}
      />

      <section className="bg-ink-700 py-20 text-paper-100">
        <Container>
          <Link to="/services" className="mb-6 inline-flex items-center gap-2 text-sm text-paper-100/60 hover:text-paper-100">
            <span aria-hidden="true">&larr;</span> All services
          </Link>
          <Eyebrow>{service.code}</Eyebrow>
          <h1 className="max-w-2xl text-4xl font-semibold sm:text-5xl">{service.name}</h1>
          <p className="mt-5 max-w-xl text-paper-100/70">{service.short}</p>
        </Container>
      </section>

      <section className="bg-paper-100 py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-ink-800">Overview</h2>
            <p className="mt-4 leading-relaxed text-ink-700/75">{service.description}</p>

            <div className="mt-10">
              <Button to="/contact" variant="brass">
                Request this service
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-ink-700/10 bg-paper-200 p-8"
          >
            <h2 className="font-mono text-xs uppercase tracking-wider text-brass-500">What&apos;s included</h2>
            <ul className="mt-4 space-y-3">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-700/80">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </Container>
      </section>

      <section className="bg-ink-800 py-16 text-paper-100">
        <Container>
          <h2 className="text-2xl font-semibold">Related services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="border border-paper-100/10 p-6 transition-colors hover:border-brass-400/60"
              >
                <span className="font-mono text-xs text-brass-400">{s.code}</span>
                <h3 className="mt-2 font-semibold">{s.name}</h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
