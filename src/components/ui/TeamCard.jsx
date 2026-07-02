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
      className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(30, 41, 59, 0.6)",
        border: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle at 30% 20%, rgba(99,102,241,0.08), transparent 70%)" }}
      />

      <div className="relative z-10 flex items-center gap-4">
        {/* Avatar */}
        <div className="relative shrink-0">
          {/* Gradient ring */}
          <div className={`absolute -inset-0.5 rounded-full bg-gradient-to-br ${gradient} opacity-70 blur-[1px]`} />
          <div className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${gradient}`}>
            <span className="text-lg font-bold text-white tracking-wide">
              {member.initials}
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-paper-100 text-sm leading-tight">{member.name}</h3>
          <span
            className="mt-1.5 inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium"
            style={{
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.2)",
              color: "var(--accent-light)",
            }}
          >
            {member.role}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
