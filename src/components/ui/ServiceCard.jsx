import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Icon map per service code prefix
const icons = {
  "GST": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 2.5 2 2.5-2 3.5 2z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "ITR": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "AUD": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "FIN": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "MSME": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "TDS": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const colorMap = {
  "GST": { icon: "icon-circle", badge: "badge-accent", glow: "rgba(99,102,241,0.15)" },
  "ITR": { icon: "icon-circle-emerald", badge: "badge-emerald", glow: "rgba(16,185,129,0.12)" },
  "AUD": { icon: "icon-circle", badge: "badge-accent", glow: "rgba(99,102,241,0.15)" },
  "FIN": { icon: "icon-circle-gold", badge: "badge-gold", glow: "rgba(245,158,11,0.12)" },
  "MSME": { icon: "icon-circle-emerald", badge: "badge-emerald", glow: "rgba(16,185,129,0.12)" },
  "TDS": { icon: "icon-circle-gold", badge: "badge-gold", glow: "rgba(245,158,11,0.12)" },
};

function getCodePrefix(code) {
  return code?.split("-")[0] || "GST";
}

export default function ServiceCard({ service, index = 0 }) {
  const prefix = getCodePrefix(service.code);
  const color = colorMap[prefix] || colorMap["GST"];
  const icon = icons[prefix] || icons["GST"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300"
        style={{
          background: "rgba(30, 41, 59, 0.6)",
          border: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Glow on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${color.glow}, transparent 70%)`,
          }}
        />

        {/* Gradient border on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            padding: "1px",
            background: "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(16,185,129,0.15), transparent)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        <div className="relative z-10">
          {/* Icon + Code */}
          <div className="flex items-center justify-between">
            <div className={color.icon}>{icon}</div>
            <span className={`badge ${color.badge}`}>{service.code}</span>
          </div>

          {/* Title */}
          <h3 className="mt-4 text-base font-bold leading-snug text-paper-100 transition-colors duration-200 group-hover:text-white">
            {service.name}
          </h3>

          {/* Description */}
          <p className="mt-2.5 text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.85)" }}>
            {service.short}
          </p>
        </div>

        {/* Footer link */}
        <div className="relative z-10 mt-6 flex items-center gap-2 text-xs font-semibold" style={{ color: "var(--accent-light)" }}>
          <span>Learn more</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          >
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
