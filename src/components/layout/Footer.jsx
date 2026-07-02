import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { services } from "../../data/services";

const socialLinks = [
  {
    label: "Phone",
    href: business.phoneHref,
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${business.email}`,
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, rgba(15,23,42,0) 0%, #0f172a 5%)",
        backgroundColor: "#0a1020",
        borderTop: "1px solid rgba(99,102,241,0.1)",
      }}
    >
      {/* Top gradient line */}
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.5) 30%, rgba(16,185,129,0.4) 70%, transparent 100%)",
        }}
      />

      <div className="container-page py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl font-bold text-white text-lg"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                  boxShadow: "0 4px 15px rgba(99,102,241,0.25)",
                }}
              >
                B
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white">BMTAX</div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: "rgba(148,163,184,0.5)" }}>
                  India (OPC) Pvt. Ltd.
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.6)" }}>
              {business.tagline}. Helping individuals, startups and businesses stay fully compliant.
            </p>

            {/* Social / contact icons */}
            <div className="mt-5 flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    color: "var(--accent-light)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(99,102,241,0.2)";
                    e.currentTarget.style.boxShadow = "0 0 15px rgba(99,102,241,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(99,102,241,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* CIN / PAN */}
            <div className="mt-5 space-y-1">
              <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "rgba(148,163,184,0.4)" }}>
                CIN: {business.cin}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "rgba(148,163,184,0.4)" }}>
                PAN: {business.pan}
              </p>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3
              className="mb-5 text-xs font-bold uppercase tracking-[0.15em]"
              style={{ color: "var(--accent-light)" }}
            >
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group flex items-center gap-2 text-sm transition-all duration-200"
                    style={{ color: "rgba(148,163,184,0.65)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#f8fafc"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(148,163,184,0.65)"; }}
                  >
                    <span
                      className="h-1 w-1 rounded-full transition-colors"
                      style={{ background: "rgba(99,102,241,0.4)" }}
                    />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3
              className="mb-5 text-xs font-bold uppercase tracking-[0.15em]"
              style={{ color: "var(--accent-light)" }}
            >
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { to: "/about", label: "About Us" },
                { to: "/why-bmtax", label: "Why BMTAX" },
                { to: "/services", label: "All Services" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-2 text-sm transition-all duration-200"
                    style={{ color: "rgba(148,163,184,0.65)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#f8fafc"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(148,163,184,0.65)"; }}
                  >
                    <span className="h-1 w-1 rounded-full" style={{ background: "rgba(99,102,241,0.4)" }} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact column */}
          <div>
            <h3
              className="mb-5 text-xs font-bold uppercase tracking-[0.15em]"
              style={{ color: "var(--accent-light)" }}
            >
              Legal
            </h3>
            <ul className="space-y-2.5">
              {[
                { to: "/terms-and-conditions", label: "Terms & Conditions" },
                { to: "/grievance-redressal", label: "Grievance Redressal" },
                { to: "/refund-policy", label: "Refund Policy" },
                { to: "/privacy-policy", label: "Privacy Policy" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-2 text-sm transition-all duration-200"
                    style={{ color: "rgba(148,163,184,0.65)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#f8fafc"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(148,163,184,0.65)"; }}
                  >
                    <span className="h-1 w-1 rounded-full" style={{ background: "rgba(99,102,241,0.4)" }} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="mt-7 space-y-2">
              <a
                href={business.phoneHref}
                className="flex items-center gap-2 text-xs transition-colors"
                style={{ color: "rgba(148,163,184,0.5)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-light)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(148,163,184,0.5)"; }}
              >
                📞 {business.phone}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-2 text-xs transition-colors"
                style={{ color: "rgba(148,163,184,0.5)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-light)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(148,163,184,0.5)"; }}
              >
                ✉️ {business.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs" style={{ color: "rgba(148,163,184,0.35)" }}>
            © {year} BMTAX INDIA (OPC) PRIVATE LIMITED. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(148,163,184,0.35)" }}>
            Powered by{" "}
            <span style={{ color: "rgba(148,163,184,0.55)" }}>{business.poweredBy}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
