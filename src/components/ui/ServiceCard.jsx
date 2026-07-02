import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group flex h-full flex-col justify-between border border-ink-700/10 bg-paper-100 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brass-400/60 hover:shadow-stamp"
      >
        <div>
          <span className="eyebrow">{service.code}</span>
          <h3 className="mt-2 text-xl font-semibold text-ink-800">{service.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-700/70">{service.short}</p>
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600">
          Learn more
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
