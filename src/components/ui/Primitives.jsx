import { Link } from "react-router-dom";

export function Container({ className = "", children }) {
  return <div className={`container-page ${className}`}>{children}</div>;
}

export function Eyebrow({ children }) {
  return <p className="eyebrow mb-3">{children}</p>;
}

export function LedgerDivider({ className = "" }) {
  return <hr className={`ledger-divider ${className}`} />;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-sans text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-offset-4";

const variants = {
  primary: "bg-ink-700 text-paper-100 hover:bg-ink-800",
  brass: "bg-brass-400 text-ink-800 hover:bg-brass-500",
  ghost: "border border-ink-700/20 text-ink-700 hover:border-ink-700/50",
  paperGhost: "border border-paper-100/30 text-paper-100 hover:border-paper-100/70"
};

export function Button({ to, href, variant = "primary", className = "", children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`;
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
