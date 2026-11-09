import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  dark?: boolean;
  compact?: boolean;
}

/** Staggered reveal: eyebrow, then title, then lead. */
const SectionHeader: React.FC<Props> = ({ eyebrow, title, lead, dark, compact }) => {
  const reduce = useReducedMotion();
  const item = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" as const },
        };
  return (
    <div className={compact ? "text-center max-w-3xl mx-auto mb-4" : "section-header"}>
      {eyebrow && !compact && (
        <motion.span
          {...item(0)}
          className={`eyebrow ${dark ? "!bg-white/5 !border-white/15 !text-primary-300" : ""}`}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2 {...item(1)} className={`section-title ${compact ? "!text-2xl md:!text-3xl !mb-1" : ""} ${dark ? "!text-white" : ""}`}>
        {title}
      </motion.h2>
      {lead && (
        <motion.p {...item(2)} className={`section-lead ${compact ? "!text-sm md:!text-base" : ""} ${dark ? "!text-slate-300" : ""}`}>
          {lead}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
