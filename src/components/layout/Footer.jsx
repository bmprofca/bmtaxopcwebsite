import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { services } from "../../data/services";
import { Container } from "../ui/Primitives";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-800 text-paper-100/80">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-xl font-semibold text-paper-100">BMTAX</span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper-100/60">{business.tagline}.</p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-brass-300">
            CIN: {business.cin}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-wider text-brass-300">PAN: {business.pan}</p>
        </div>

        <div>
          <h3 className="eyebrow text-brass-300">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-brass-300">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-brass-300">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-brass-300">About</Link>
            </li>
            <li>
              <Link to="/why-bmtax" className="hover:text-brass-300">Why BMTAX</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-brass-300">All Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brass-300">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-brass-300">Legal</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/terms-and-conditions" className="hover:text-brass-300">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to="/grievance-redressal" className="hover:text-brass-300">Grievance Redressal</Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:text-brass-300">Refund Policy</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-brass-300">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-paper-100/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-paper-100/50 sm:flex-row">
          <p>&copy; {year} BMTAX. All Rights Reserved.</p>
          <p>
            Powered by <span className="text-paper-100/70">{business.poweredBy}</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
