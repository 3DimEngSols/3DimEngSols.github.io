import React, { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

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
    <div className="container-custom py-12 md:py-16">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-0 md:divide-x md:divide-neutral-200 list-none p-0">
        {stats.map((s) => (
          <li key={s.label} className="text-center px-4">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 tabular-nums">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm md:text-base text-neutral-600">{s.label}</div>
          </li>
        ))}
      </ul>

      <div className="mt-12 pt-8 border-t border-neutral-200 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-5">
          Our research is published in
        </p>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 list-none p-0">
          {journals.map((j) => (
            <li key={j} className="text-sm md:text-base font-semibold text-neutral-700">
              {j}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Proof;
