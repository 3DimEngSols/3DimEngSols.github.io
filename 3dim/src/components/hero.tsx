import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero: React.FC = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 pt-[4.5rem] pb-4 md:pt-20 md:pb-5 text-center">
    <div className="container-custom relative z-10">
      <motion.img
        src="/Images/logo2.png"
        alt="3Dim Engineering Solutions"
        width={500}
        height={172}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto h-14 md:h-[4.5rem] w-auto mb-3"
      />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.55 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-tight mb-3"
      >
        WE MAKE YOUR <span className="text-primary-600">IMAGINATION</span> A REALITY
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16, duration: 0.55 }}
        className="max-w-2xl mx-auto text-base md:text-lg text-neutral-700 leading-relaxed mb-5"
      >
        From research consultancy to full-scale engineering solutions, we bring innovation,
        precision, and creativity into every project.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.24, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-3 justify-center items-center"
      >
        <a
          href="#services"
          className="btn-lift inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary-600 text-white font-semibold shadow-md hover:bg-primary-700 hover:shadow-lg cursor-pointer"
        >
          Explore Services <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </a>
        <a
          href="#contact"
          className="btn-lift inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-ink text-white font-semibold shadow-md hover:shadow-lg cursor-pointer"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" /> Contact Us
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
