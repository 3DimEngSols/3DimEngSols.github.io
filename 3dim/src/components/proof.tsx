import React, { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { BookOpen } from "lucide-react";

const stats = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 24, suffix: "/7", label: "Support" },
  { value: 4, suffix: "+", label: "Years Experience" },
];

// Journals named in our published work on this site
const journals = [
  "Journal of Reinforced Plastics and Composites",
  "Canadian Geotechnical Journal",
  "Industrial Engineering and Management Systems",
  "Odontology (Springer)",
  "Materials Today Communications",
  "Sustainable Concrete",
];

const Counter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

const Proof: React.FC = () => (
  <section className="bg-white border-b border-neutral-200" aria-label="Our track record">
    <div className="container-custom pt-3 pb-5 md:pt-4 md:pb-6">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-4 md:gap-0 md:divide-x md:divide-neutral-200 list-none p-0">
        {stats.map((s) => (
          <li key={s.label} className="text-center px-4">
            <div className="text-2xl md:text-3xl font-bold text-primary-600 tabular-nums">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-0.5 text-xs md:text-sm text-neutral-600">{s.label}</div>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <div className="flex items-center gap-4 mb-4" role="presentation">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-neutral-300" />
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Our research is published in
          </h2>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-neutral-300" />
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5 list-none p-0 m-0">
          {journals.map((j) => (
            <li
              key={j}
              className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50/70 px-4 py-2.5 transition-colors duration-200 hover:border-primary-300 hover:bg-white"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-white border border-neutral-200 text-primary-600 group-hover:border-primary-300">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
              </span>
              <span className="font-serif text-[15px] font-semibold italic leading-snug text-ink">{j}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Proof;
