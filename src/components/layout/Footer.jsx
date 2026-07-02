import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { services } from "../../data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0f172a", color: "#94a3b8" }}>
      {/* Top gradient line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent 0%, #4f46e5 30%, #06b6d4 70%, transparent 100%)" }} />

      <div className="container-page py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl font-bold text-white text-lg" style={{ background: "linear-gradient(135deg, #4f46e5, #6366f1)" }}>B</div>
              <div>
                <div className="font-display text-lg font-bold text-white">BMTAX</div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: "#64748b" }}>India (OPC) Pvt. Ltd.</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#64748b" }}>{business.tagline}. Helping individuals, startups and businesses stay fully compliant.</p>
            <div className="mt-5 flex gap-2">
              {[
                { label: "Phone", href: business.phoneHref, icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
                { label: "Email", href: `mailto:${business.email}`, icon: <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 hover:scale-110" style={{ background: "rgba(79,70,229,0.15)", border: "1px solid rgba(79,70,229,0.2)", color: "#818cf8" }}>
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="mt-5 space-y-1">
              <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "#475569" }}>CIN: {business.cin}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "#475569" }}>PAN: {business.pan}</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#818cf8" }}>Services</h3>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "#64748b" }}>
                    <span className="h-1 w-1 rounded-full" style={{ background: "rgba(79,70,229,0.4)" }} />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#818cf8" }}>Company</h3>
            <ul className="space-y-2.5">
              {[{ to: "/about", label: "About Us" }, { to: "/why-bmtax", label: "Why BMTAX" }, { to: "/services", label: "All Services" }, { to: "/contact", label: "Contact" }].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "#64748b" }}>
                    <span className="h-1 w-1 rounded-full" style={{ background: "rgba(79,70,229,0.4)" }} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#818cf8" }}>Legal</h3>
            <ul className="space-y-2.5">
              {[{ to: "/terms-and-conditions", label: "Terms & Conditions" }, { to: "/grievance-redressal", label: "Grievance Redressal" }, { to: "/refund-policy", label: "Refund Policy" }, { to: "/privacy-policy", label: "Privacy Policy" }].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "#64748b" }}>
                    <span className="h-1 w-1 rounded-full" style={{ background: "rgba(79,70,229,0.4)" }} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7 space-y-2">
              <a href={business.phoneHref} className="flex items-center gap-2 text-xs transition-colors hover:text-white" style={{ color: "#475569" }}>📞 {business.phone}</a>
              <a href={`mailto:${business.email}`} className="flex items-center gap-2 text-xs transition-colors hover:text-white" style={{ color: "#475569" }}>✉️ {business.email}</a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs" style={{ color: "#475569" }}>© {year} BMTAX INDIA (OPC) PRIVATE LIMITED. All Rights Reserved.</p>
          <p className="text-xs" style={{ color: "#475569" }}>Powered by <span style={{ color: "#64748b" }}>{business.poweredBy}</span></p>
        </div>
      </div>
    </footer>
  );
}
