import { motion } from "framer-motion";

export default function TeamCard({ member, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
      style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
    >
      <div className="relative mb-5 shrink-0">
        <div className="h-28 w-28 overflow-hidden rounded-full border border-gray-100 shadow-sm">
          {member.image ? (
            <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-100">
              <span className="text-2xl font-bold text-gray-400">{member.name.charAt(0)}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="font-bold text-lg leading-tight mb-1" style={{ color: "var(--text)" }}>{member.name}</h3>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}
