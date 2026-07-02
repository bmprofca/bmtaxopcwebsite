import { Link } from "react-router-dom";

export function Container({ className = "", children }) {
  return <div className={`container-page ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}

export function SectionBadge({ children, variant = "accent" }) {
  return (
    <span className={`badge badge-${variant} mb-4`}>{children}</span>
  );
}

export function LedgerDivider({ className = "" }) {
  return <div className={`section-divider my-2 ${className}`} />;
}

export function GlassCard({ className = "", children }) {
  return <div className={`glass-card p-6 ${className}`}>{children}</div>;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-sans text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-offset-4 disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  primary: "btn-primary",
  brass: "btn-primary",
  ghost: "btn-outline",
  paperGhost: "btn-outline",
  emerald: "btn-emerald",
  outline: "btn-outline",
  subtle: "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 bg-surface-2/40 text-paper-100/80 hover:bg-surface-2/70 hover:text-paper-100 border border-white/5 hover:border-white/10",
};

export function Button({ to, href, variant = "primary", className = "", children, ...props }) {
  const classes = `${variant.startsWith("btn-") ? "" : base} ${variants[variant] ?? variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
