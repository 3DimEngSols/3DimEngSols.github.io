// Hero.tsx
import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary-100/20 to-secondary-100/20 rounded-full blur-3xl animate-float" />

      <div className="container-custom relative z-10">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-full border border-primary-200/50 shadow-sm">
            <span className="text-sm font-semibold text-primary-700">
              🚀 Leading Engineering Solutions
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight"
        >
          WE MAKE YOUR{" "}
          <span className="relative text-primary-600">
            IMAGINATION
            {/* <span className="absolute left-0 -bottom-2 w-full h-2 bg-secondary-300 rounded-md -z-10"></span> */}
          </span>{" "}
          A REALITY
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-700 leading-relaxed mb-12"
        >
          From research consultancy to full-scale engineering solutions, we bring
          innovation, precision, and creativity into every project.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#services"
            className="px-8 py-4 rounded-lg bg-primary-600 text-white text-lg font-semibold shadow-md hover:bg-primary-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            🚀 Explore Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg bg-secondary-600 text-white text-lg font-semibold shadow-md hover:bg-secondary-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            💬 Contact Us
          </a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "100+", label: "Projects Completed" },
            { value: "50+", label: "Happy Clients" },
            { value: "24/7", label: "Support" },
            { value: "4+", label: "Years Experience" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl border border-neutral-200 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-neutral-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
