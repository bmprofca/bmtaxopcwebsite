import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../components/layout/SEO";
import { Container, Eyebrow } from "../components/ui/Primitives";
import { business } from "../data/business";

const fields = [
  { name: "name", label: "Full name", type: "text", required: true },
  { name: "email", label: "Email address", type: "email", required: true },
  { name: "phone", label: "Phone number", type: "tel", required: false }
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <SEO
        title="Contact BMTAX"
        description="Get in touch with BMTAX INDIA (OPC) PRIVATE LIMITED for GST, Income Tax and compliance support. Call, email, or visit our office in Kharupetia, Darrang, Assam."
        path="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact BMTAX"
        }}
      />

      <section className="bg-ink-700 py-20 text-paper-100">
        <Container>
          <Eyebrow>Get In Touch</Eyebrow>
          <h1 className="max-w-2xl text-4xl font-semibold sm:text-5xl">Let&apos;s sort your compliance.</h1>
          <p className="mt-5 max-w-xl text-paper-100/70">
            Reach out for GST, Income Tax, audits, registrations or any compliance question &mdash;
            we usually respond within one business day.
          </p>
        </Container>
      </section>

      <section className="bg-paper-100 py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="eyebrow">Mobile</h2>
              <a href={business.phoneHref} className="mt-1 block text-lg font-medium text-ink-800 hover:text-teal-600">
                {business.phone}
              </a>
            </div>
            <div>
              <h2 className="eyebrow">Email</h2>
              <a href={`mailto:${business.email}`} className="mt-1 block text-lg font-medium text-ink-800 hover:text-teal-600">
                {business.email}
              </a>
            </div>
            <div>
              <h2 className="eyebrow">Address</h2>
              <p className="mt-1 text-lg font-medium text-ink-800">{business.address.full}</p>
            </div>

            <div className="overflow-hidden border border-ink-700/10">
              <iframe
                title="BMTAX office location map"
                src={business.mapEmbed}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5 border border-ink-700/10 bg-paper-200 p-8"
          >
            <h2 className="text-lg font-semibold text-ink-800">Send us a message</h2>

            {fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium text-ink-700/80">
                  {field.label} {field.required && <span aria-hidden="true">*</span>}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  value={form[field.name]}
                  onChange={handleChange}
                  className="w-full border border-ink-700/20 bg-paper-100 px-4 py-3 text-sm text-ink-800 outline-none transition-colors focus:border-brass-400"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700/80">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none border border-ink-700/20 bg-paper-100 px-4 py-3 text-sm text-ink-800 outline-none transition-colors focus:border-brass-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-ink-700 px-6 py-3 text-sm font-semibold tracking-wide text-paper-100 transition-colors hover:bg-ink-800"
            >
              Send message
            </button>
            <p className="text-xs text-ink-700/50">
              Submitting opens your email app with this message addressed to {business.email}.
            </p>
          </motion.form>
        </Container>
      </section>
    </>
  );
}
