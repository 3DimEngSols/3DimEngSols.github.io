// src/components/homepageComponents/Projects.tsx
import React from "react";
import { BookMarked, Rocket, Network, Bot, Microscope } from "lucide-react";

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

const projects: Project[] = [
  {
    title:
      "Explainable ML for Glass Powder Concrete – Published in Materials Today Communications",
    description:
      "In collaboration with our research team, we developed an XML-based approach to predict the strength of glass powder concrete, contributing to sustainable civil engineering solutions.",
    icon: <Microscope className="w-10 h-10 text-emerald-400" />,
    link: "https://lnkd.in/gvdzBnCk",
  },
  {
    title:
      "Explainable AI for Fly Ash Foam Concrete – Published in Sustainable Concrete",
    description:
      "Through collaborative efforts, we introduced transparent AI models for predicting the strength of fly ash foam composites, advancing eco-friendly construction materials.",
    icon: <BookMarked className="w-10 h-10 text-emerald-400" />,
    link: "https://lnkd.in/dy-bKimA",
  },
  {
    title: "AI Summit New York 2024 – Auto Circuit Maker ChatBot",
    description:
      "Represented at The AI Summit in NYC, showcasing our collaborative work on an AI-powered chatbot for automated Verilog circuit generation, revolutionizing FPGA & ASIC design.",
    icon: <Bot className="w-10 h-10 text-emerald-400" />,
  },
  {
    title: "Pipe-Bursting Simulation & Defect Detection",
    description:
      "As part of a team effort, we developed cutting-edge numerical models for brittle/ductile pipe bursting and AI-driven defect detection in turbine blades using signal processing.",
    icon: <Network className="w-10 h-10 text-emerald-400" />,
  },
  {
    title: "Deep Reinforcement Learning for Game Optimization",
    description:
      "Collaboratively pioneered multi-agent DRL frameworks for multiplayer reach-avoid games, advancing strategy optimization and autonomous systems research.",
    icon: <Rocket className="w-10 h-10 text-emerald-400" />,
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-center px-6"
    >
      <h2 className="text-4xl font-extrabold text-emerald-400 mb-12">
        Research & Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="p-8 bg-gray-800/50 border border-gray-700 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition transform hover:-translate-y-2"
          >
            <div className="flex justify-center mb-4">{proj.icon}</div>
            <h3 className="text-lg font-bold text-white">{proj.title}</h3>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              {proj.description}
            </p>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-emerald-400 hover:underline text-sm"
              >
                Read More →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
