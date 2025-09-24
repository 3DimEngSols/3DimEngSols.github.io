import React from "react";
import { motion } from "framer-motion";

const AboutIntro: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-professional relative overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-secondary-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full blur-2xl opacity-15 animate-float" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full border border-primary-200/50 mb-6">
              <span className="text-sm font-semibold text-gradient">🏢 About Our Company</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-8"
          >
            About <span className="text-primary-600 border-b-4 border-secondary-600 pb-2">Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl text-neutral-700 leading-relaxed"
          >
            We are a team of experienced engineers, united by a shared passion
            for delivering exceptional engineering solutions. Our unique blend of
            skills and expertise enables us to tackle complex projects from
            multiple angles, ensuring comprehensive and innovative results.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
