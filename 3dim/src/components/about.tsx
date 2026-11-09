import React from "react";
import { motion } from "framer-motion";

const AboutIntro: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-professional relative overflow-hidden">
      {/* Decorative blurred shapes */}

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div className="eyebrow">
              <span>About Our Company</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-title"
          >
            About <span className="text-primary-600">Us</span>
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
