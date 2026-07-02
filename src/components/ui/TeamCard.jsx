import { motion } from "framer-motion";

const gradients = [
  "from-indigo-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-blue-500 to-indigo-600",
  "from-violet-500 to-purple-600",
  "from-teal-500 to-emerald-600",
  "from-sky-500 to-blue-600",
];

export default function TeamCard({ member, index = 0 }) {
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      <div className="relative z-10 flex items-center gap-4">
        <div className="relative shrink-0">
          <div className={`absolute -inset-0.5 rounded-full bg-gradient-to-br ${gradient} opacity-70 blur-[1px]`} />
          <div className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${gradient}`}>
            <span className="text-lg font-bold text-white tracking-wide">{member.initials}</span>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-sm leading-tight" style={{ color: "var(--text)" }}>{member.name}</h3>
          <span className="mt-1.5 inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium" style={{ background: "var(--accent-bg)", border: "1px solid rgba(79,70,229,0.12)", color: "var(--accent)" }}>
            {member.role}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
