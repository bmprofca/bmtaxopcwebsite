import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { services } from "../../data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  const serviceLinks = services.slice(0, 6).map((service) => ({
    to: `/services/${service.slug}`,
    label: service.name,
  }));

  const companyLinks = [
    { to: "/about", label: "About Us" },
    { to: "/why-bmtax", label: "Why BMTAX" },
    { to: "/services", label: "All Services" },
    { to: "/contact", label: "Contact" },
  ];

  const legalLinks = [
    { to: "/terms-and-conditions", label: "Terms & Conditions" },
    { to: "/grievance-redressal", label: "Grievance Redressal" },
    { to: "/refund-policy", label: "Refund Policy" },
    { to: "/privacy-policy", label: "Privacy Policy" },
  ];

  return (
    <footer style={{ background: "var(--surface)", color: "var(--text-muted)", borderTop: "1px solid var(--border)" }}>
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent 0%, #4f46e5 30%, #06b6d4 70%, transparent 100%)" }} />

      <div className="container-page py-10 sm:py-12 lg:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo512.jpg"
                alt="BMTAX Logo"
                className="h-14 w-16 object-contain rounded-xl transition-all duration-300 group-hover:scale-105"
              />
              <div>
                <div className="font-display text-lg font-bold" style={{ color: "var(--text)" }}>BMTAX</div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--text-dim)" }}>India (OPC) Pvt. Ltd.</div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {business.tagline}. Helping individuals, startups and businesses stay fully compliant.
            </p>

            <div className="mt-5 flex gap-2">
              <a href={business.phoneHref} aria-label="Phone" className="flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 hover:scale-105" style={{ background: "var(--accent-bg)", border: "1px solid rgba(79,70,229,0.14)", color: "var(--accent)" }}>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" /></svg>
              </a>
              <a href={`mailto:${business.email}`} aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 hover:scale-105" style={{ background: "#ecfdf5", border: "1px solid rgba(5,150,105,0.14)", color: "var(--emerald)" }}>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>

            <div className="mt-5 space-y-1">
              <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--text-dim)" }}>CIN: {business.cin}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "var(--text-dim)" }}>PAN: {business.pan}</p>
            </div>
          </div>

          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Company" links={companyLinks} />

          <div>
            <FooterColumn title="Legal" links={legalLinks} />
            <div className="mt-6 space-y-2">
              <a href={business.phoneHref} className="block text-xs transition-colors hover:text-accent" style={{ color: "var(--text-dim)" }}>Phone: {business.phone}</a>
              <a href={`mailto:${business.email}`} className="block break-all text-xs transition-colors hover:text-accent" style={{ color: "var(--text-dim)" }}>Email: {business.email}</a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs" style={{ color: "var(--text-dim)" }}>Copyright {year} BMTAX INDIA (OPC) PRIVATE LIMITED. All Rights Reserved.</p>
          <p className="text-xs" style={{ color: "var(--text-dim)" }}>Powered by <span style={{ color: "var(--text-muted)" }}>{business.poweredBy}</span></p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "var(--accent)" }}>{title}</h3>
      <ul className="space-y-2">
        {links.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="flex items-center gap-2 text-sm transition-colors hover:text-accent" style={{ color: "var(--text-muted)" }}>
              <span className="h-1 w-1 rounded-full" style={{ background: "rgba(79,70,229,0.4)" }} />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
