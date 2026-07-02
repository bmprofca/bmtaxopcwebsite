import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../components/layout/SEO";
import { Container } from "../components/ui/Primitives";
import { business } from "../data/business";

const fields = [
  { name: "name", label: "Full Name", placeholder: "Your full name", type: "text", required: true },
  { name: "email", label: "Email Address", placeholder: "you@example.com", type: "email", required: true },
  { name: "phone", label: "Phone Number", placeholder: "+91 XXXXX XXXXX", type: "tel", required: false },
];

const contactItems = [
  {
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    label: "Mobile", value: business.phone, href: business.phoneHref, color: "accent",
  },
  {
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    label: "Email", value: business.email, href: `mailto:${business.email}`, color: "emerald",
  },
  {
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    label: "Address", value: business.address.full, href: null, color: "gold",
  },
];

const colorConfig = {
  accent: { iconClass: "icon-circle" }, emerald: { iconClass: "icon-circle-emerald" }, gold: { iconClass: "icon-circle-gold" },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`);
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <SEO title="Contact BMTAX" description="Get in touch with BMTAX INDIA (OPC) PRIVATE LIMITED for GST, Income Tax and compliance support. Call, email, or visit our office in Kharupetia, Darrang, Assam." path="/contact" jsonLd={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Contact BMTAX" }} />

      <section className="page-hero">
        <div className="blob animate-blob" style={{ width: 450, height: 450, background: "radial-gradient(circle, #818cf8, transparent 70%)", top: "-100px", right: "5%" }} />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">Get In Touch</span>
            <h1 className="mt-2 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text)" }}>
              Let's sort your <span className="gradient-text">compliance.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Reach out for GST, Income Tax, audits, registrations or any compliance question — we usually respond within one business day.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--bg)" }}>
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
            <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>Contact Information</h2>
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-2xl p-5" style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
                  <div className={colorConfig[item.color].iconClass}>{item.icon}</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-dim)" }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium transition-colors hover:text-accent" style={{ color: "var(--text)" }}>{item.value}</a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid var(--border)" }}>
              <iframe title="BMTAX office location map" src={business.mapEmbed} className="h-56 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="rounded-2xl p-5" style={{ background: "var(--accent-bg)", border: "1px solid rgba(79,70,229,0.15)" }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--accent)" }}>Business Hours</p>
              <div className="space-y-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
                <div className="flex justify-between"><span>Monday – Saturday</span><span className="font-semibold" style={{ color: "var(--text)" }}>9:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span style={{ color: "var(--text-dim)" }}>Closed</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-8" style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
            <h2 className="mb-6 text-xl font-bold" style={{ color: "var(--text)" }}>Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {fields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="form-label">{field.label}{field.required && <span className="ml-1 text-red-400">*</span>}</label>
                  <input id={field.name} name={field.name} type={field.type} required={field.required} placeholder={field.placeholder} value={form[field.name]} onChange={handleChange} className="form-input" />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="form-label">How can we help?</label>
                <textarea id="message" name="message" rows={4} placeholder="Describe your requirement..." value={form.message} onChange={handleChange} className="form-input resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full text-base py-3.5">Send Message →</button>
              <p className="text-center text-xs" style={{ color: "var(--text-dim)" }}>Submitting opens your email app addressed to {business.email}.</p>
            </form>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
