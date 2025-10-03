// Services.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  BookOpen,
  Wrench,
  Building2,
  Brain,
  Database,
  FlaskConical,
  Atom,
  Terminal,
  Sigma,
  Globe,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Research Assistance & Publications",
    description:
      "Thesis guidance, journal publications, literature reviews, and end-to-end academic support with 100+ successful projects globally.",
    icon: <BookOpen className="w-12 h-12 text-primary-600" />,
  },
  {
    title: "Mechanical Engineering",
    description:
      "Expertise in CAD/CAM, product prototyping, composites, FEA, topology optimization, and industrial product development.",
    icon: <Wrench className="w-12 h-12 text-secondary-600" />,
  },
  {
    title: "Civil Engineering",
    description:
      "Structural design, sustainable materials (glass powder concrete, fly ash composites), and advanced construction solutions.",
    icon: <Building2 className="w-12 h-12 text-primary-600" />,
  },
  {
    title: "Electrical, Robotics & Automation",
    description:
      "Smart robotics, UAVs, embedded systems, IoT devices, and intelligent automation using cutting-edge hardware integration.",
    icon: <Cpu className="w-12 h-12 text-secondary-600" />,
  },
  {
    title: "Computer Vision & Image Processing",
    description:
      "Real-time vision systems for UAVs, robotics, and industry applications, with expertise in YOLO, object detection, and image analysis.",
    icon: <Globe className="w-12 h-12 text-primary-600" />,
  },
  
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Custom ML/DL models for predictive analytics, NLP, speech recognition, and data-driven decision-making in research and industry.",
    icon: <Brain className="w-12 h-12 text-secondary-600" />,
  },
  {
  title: "Agentic AI Systems",
  description:
    "Design and deploy advanced AI agents, multi-agent workflows, and multi-tool integrations using frameworks like LangChain, LangGraph, MCP, CrueAI, and AutoGen. Expertise also includes building voice AI agents with Twilio, Retell AI, Vapi, and ElevenLabs for industries such as dental, real estate, barbershops, and customer support.",
  icon: <Brain className="w-12 h-12 text-emerald-600" />,
},

  {
    title: "Composites & Advanced Materials",
    description:
      "Smart/nano composites, solid mechanics, additive manufacturing, and computational material modeling expertise.",
    icon: <Atom className="w-12 h-12 text-primary-600" />,
  },
  {
    title: "Chemistry & Materials Science",
    description:
      "Research and publication support in chemistry, polymer chemistry, environmental chemistry, and advanced sustainable materials.",
    icon: <FlaskConical className="w-12 h-12 text-secondary-600" />,
  },
  {
    title: "Data Science & Analytics",
    description:
      "Advanced econometrics, predictive analytics, time series, SEM, and financial forecasting using Python, R, and STATA.",
    icon: <Database className="w-12 h-12 text-primary-600" />,
  },
  {
    title: "Industrial & Product Solutions",
    description:
      "Engineering solutions in thermodynamics, manufacturing processes, optimization, and product prototyping.",
    icon: <Wrench className="w-12 h-12 text-secondary-600" />,
  },
  {
    title: "MATLAB & Simulink",
    description:
      "Modeling, simulation, signal processing, control systems, and optimization using MATLAB and Simulink.",
    icon: <Sigma className="w-12 h-12 text-primary-600" />,
  },
  {
    title: "Programming & Software Development",
    description:
      "Python, C++, Java, and custom software development solutions for research, automation, and engineering applications.",
    icon: <Terminal className="w-12 h-12 text-secondary-600" />,
  },
  {
    title: "Web Development & Full-Stack Solutions",
    description:
      "Custom web development including portfolio websites, company websites, e-commerce platforms, and personal blogs. Expertise in React.js, MongoDB, Express.js, Node.js, Flask, Django.",
    icon: <Globe className="w-12 h-12 text-primary-600" />,
  },
];


const Services: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-professional relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-secondary-100 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full blur-2xl opacity-20 animate-float" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full border border-primary-200/50 mb-6">
              <span className="text-sm font-semibold text-gradient">⚡ Professional Services</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
          >
            Our <span className="text-primary-600 border-b-4 border-secondary-600 pb-2">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Comprehensive engineering solutions tailored to meet your unique
            challenges and drive innovation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="card-premium p-8 group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6 group-hover:scale-125 transition-transform duration-300">
                  <div className="p-4 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 group-hover:shadow-lg transition-all duration-300 border-2 border-secondary-200 group-hover:border-secondary-400">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
