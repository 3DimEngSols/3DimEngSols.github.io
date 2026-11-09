// Hero.tsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
  { value: "4+", label: "Years Experience" },
];

/** Animated isometric wireframe: a nod to the "3D" in 3Dim. */
const Wireframe: React.FC = () => {
  const reduce = useReducedMotion();
  const draw = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 1.6, delay, ease: "easeOut" as const },
        };

  const outer = "M200 70 L312.6 135 L312.6 265 L200 330 L87.4 265 L87.4 135 Z";
  const outerInner = "M200 200 L87.4 135 M200 200 L312.6 135 M200 200 L200 330";
  const inner = "M200 140 L252 170 L252 230 L200 260 L148 230 L148 170 Z";
  const innerLines = "M200 200 L148 170 M200 200 L252 170 M200 200 L200 260";
  const nodes = [
    [200, 70], [312.6, 135], [312.6, 265], [200, 330], [87.4, 265], [87.4, 135], [200, 200],
  ];

  return (
    <motion.svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      role="img"
      aria-label="Isometric 3D wireframe illustration"
      animate={reduce ? undefined : { y: [0, -12, 0] }}
      transition={reduce ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id="wf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        <radialGradient id="wfGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="190" fill="url(#wfGlow)" />
      <ellipse cx="200" cy="200" rx="185" ry="62" fill="none" stroke="#60a5fa" strokeOpacity="0.35" strokeDasharray="4 8" />
      <motion.path d={outer} fill="rgba(34,197,94,0.06)" stroke="url(#wf)" strokeWidth="2" strokeLinejoin="round" {...draw(0.1)} />
      <motion.path d={outerInner} fill="none" stroke="url(#wf)" strokeWidth="2" strokeLinecap="round" {...draw(0.5)} />
      <motion.path d={inner} fill="rgba(96,165,250,0.10)" stroke="#93c5fd" strokeWidth="1.5" strokeLinejoin="round" {...draw(0.9)} />
      <motion.path d={innerLines} fill="none" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" {...draw(1.2)} />
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.5" fill="#0a1020" stroke="#4ade80" strokeWidth="2" />
      ))}
    </motion.svg>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a1020] text-white pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background */}
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute -z-10 -top-40 -left-40 w-[560px] h-[560px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #16a34a, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -z-10 -bottom-48 -right-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-custom">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-6 items-center">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
            >
              WE MAKE YOUR{" "}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                IMAGINATION
              </span>{" "}
              A REALITY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-300 leading-relaxed mb-10"
            >
              From research consultancy to full-scale engineering solutions, we
              bring innovation, precision, and creativity into every project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-primary-500 text-neutral-950 text-base font-semibold shadow-lg shadow-primary-500/25 hover:bg-primary-400 transition-colors duration-200 cursor-pointer"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-white/25 bg-white/5 text-white text-base font-semibold backdrop-blur hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Contact Us
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hidden lg:block aspect-square max-w-[460px] w-full mx-auto"
          >
            <Wireframe />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.ul
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 list-none p-0"
        >
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur px-5 py-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-1.5 text-sm text-slate-300">{stat.label}</div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Hero;
