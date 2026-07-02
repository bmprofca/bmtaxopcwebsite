import { motion } from "framer-motion";

export default function TeamCard({ member, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="flex flex-col items-center border border-ink-700/10 bg-paper-100 px-6 py-8 text-center"
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full bg-ink-700 font-display text-lg font-semibold text-paper-100"
        aria-hidden="true"
      >
        {member.initials}
      </div>
      <h3 className="mt-4 text-base font-semibold text-ink-800">{member.name}</h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-brass-500">{member.role}</p>
    </motion.div>
  );
}
