// src/components/homepageComponents/Services.tsx
import React from "react";
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
  Globe
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
    icon: <BookOpen className="w-10 h-10 text-emerald-400" />,
  },
  {
    title: "Mechanical & Civil Engineering",
    description:
      "Expertise in structural design, CAD/CAM, product prototyping, and sustainable materials such as glass powder concrete and fly ash composites.",
    icon: <Building2 className="w-10 h-10 text-emerald-400" />,
  },
  {
    title: "Electrical, Robotics & Automation",
    description:
      "Smart robotics, UAVs, embedded systems, IoT devices, and intelligent automation using cutting-edge hardware integration.",
    icon: <Cpu className="w-10 h-10 text-emerald-400" />,
  },
  {
    title: "AI, Computer Vision & Machine Learning",
    description:
      "Custom AI models, computer vision solutions, and deep learning (YOLO, NLP, speech recognition) for real-time industrial and academic applications.",
    icon: <Brain className="w-10 h-10 text-emerald-400" />,
  },
  {
    title: "Data Science & Analytics",
    description:
      "Advanced econometrics, predictive analytics, time series, SEM, and financial forecasting using Python, R, and STATA.",
    icon: <Database className="w-10 h-10 text-emerald-400" />,
  },
  {
    title: "Industrial & Product Solutions",
    description:
      "Engineering solutions in structural design, thermodynamics, FEA, optimization, product development, and prototyping.",
    icon: <Wrench className="w-10 h-10 text-emerald-400" />,
  },
  {
    title: "Chemistry & Materials Science",
    description:
      "Research and publication support in chemistry, polymer chemistry, environmental chemistry, and advanced sustainable materials.",
    icon: <FlaskConical className="w-10 h-10 text-emerald-400" />,
  },
  {
    title: "Composites & Advanced Materials",
    description:
      "Smart/nano composites, solid mechanics, additive manufacturing, and computational material modeling expertise.",
    icon: <Atom className="w-10 h-10 text-emerald-400" />,
  },
  {
    title: "MATLAB & Simulink",
    description:
      "Modeling, simulation, signal processing, control systems, and optimization using MATLAB and Simulink.",
    icon: <Sigma className="w-10 h-10 text-emerald-400" />,
  },
  {
    title: "Programming & Software Development",
    description:
      "Python, C++, Java, and custom software development solutions for research, automation, and engineering applications.",
    icon: <Terminal className="w-10 h-10 text-emerald-400" />,
  },
  {
    title: "Web Development & Full-Stack Solutions",
    description:
      "Custom web development including portfolio websites, company websites, e-commerce platforms, and personal blogs. Expertise in modern technologies like React.js, MongoDB, Express.js, Node.js, Python (Flask, Django).",
    icon: <Globe className="w-10 h-10 text-emerald-400" />,
  },
];


const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-center px-6">
      <h2 className="text-4xl font-extrabold text-emerald-400 mb-12">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="p-8 bg-gray-800/50 border border-gray-700 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition transform hover:-translate-y-2"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
