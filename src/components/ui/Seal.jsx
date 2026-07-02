import { motion } from "framer-motion";

/**
 * The site's signature element: a rotating "verified filing" stamp that
 * evokes the official seals stamped on tax and compliance documents.
 */
export default function Seal({ label = "VERIFIED FILINGS", sub = "BMTAX \u2022 INDIA", className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.3, rotate: -14 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative shrink-0 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" className="h-full w-full drop-shadow-[0_8px_20px_rgba(16,35,63,0.25)]">
        <defs>
          <path id="sealCircle" d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="#10233F" />
        <circle cx="100" cy="100" r="88" fill="none" stroke="#C08829" strokeWidth="1.5" strokeDasharray="2 4" />
        <circle cx="100" cy="100" r="74" fill="none" stroke="#F7F5EF" strokeWidth="1" opacity="0.35" />
        <text fill="#F7F5EF" fontSize="11.5" fontFamily="'IBM Plex Mono', monospace" letterSpacing="3">
          <textPath href="#sealCircle" startOffset="2%">
            {label}
          </textPath>
        </text>
        <text
          x="100"
          y="94"
          fill="#F7F5EF"
          fontSize="30"
          fontWeight="700"
          fontFamily="'Fraunces', serif"
          textAnchor="middle"
        >
          BM
        </text>
        <text
          x="100"
          y="118"
          fill="#C08829"
          fontSize="9"
          fontFamily="'IBM Plex Mono', monospace"
          letterSpacing="2"
          textAnchor="middle"
        >
          {sub}
        </text>
      </svg>
    </motion.div>
  );
}
