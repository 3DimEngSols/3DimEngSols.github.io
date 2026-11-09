// Services.tsx
import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader.tsx";
import { refreshScroll } from "./HorizontalScroller.tsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories, services, ServiceCategory } from "../data/services.tsx";

const Services: React.FC = () => {
  const [active, setActive] = useState<ServiceCategory>("engineering");
  useEffect(() => refreshScroll(), [active]);
  const visible = services.filter((s) => s.category === active);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + categories.length) % categories.length;
    setActive(categories[next].id);
    document.getElementById(`tab-${categories[next].id}`)?.focus();
  };

  return (
    <section className="section-padding bg-gradient-professional relative overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeader
          title={<>Our <span className="text-primary-600">Services</span></>}
          lead="Comprehensive engineering solutions tailored to meet your unique challenges and drive innovation."
        />

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Service categories"
          className="flex flex-wrap justify-center gap-2 mb-5 md:mb-6"
        >
          {categories.map((c, i) => {
            const on = c.id === active;
            return (
              <button
                key={c.id}
                id={`tab-${c.id}`}
                role="tab"
                aria-selected={on}
                aria-controls="service-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(c.id)}
                onKeyDown={(e) => onKey(e, i)}
                className={`shrink-0 h-11 px-5 rounded-full text-sm font-semibold border transition-colors duration-200 cursor-pointer ${
                  on
                    ? "bg-ink text-white border-ink"
                    : "bg-white text-neutral-700 border-neutral-300 hover:border-primary-500 hover:text-primary-700"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <div
          id="service-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {visible.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="h-full"
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="card-premium group flex flex-col h-full p-5"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-50 text-primary-600 mb-3 group-hover:bg-primary-100 transition-colors duration-200">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-auto pt-3 inline-flex items-center gap-1.5 font-semibold text-primary-700 min-h-11">
                    Learn more
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
