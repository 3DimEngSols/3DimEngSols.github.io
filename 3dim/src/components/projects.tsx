// src/components/homepageComponents/Projects.tsx
import React from "react";
import { BookMarked, Rocket, Network, Bot, Microscope,Globe, Users, MessageCircle } from "lucide-react";

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
    icon: <Microscope className="w-12 h-12 text-primary-600" />,
    link: "https://lnkd.in/gvdzBnCk",
  },
  {
    title:
      "Explainable AI for Fly Ash Foam Concrete – Published in Sustainable Concrete",
    description:
      "Through collaborative efforts, we introduced transparent AI models for predicting the strength of fly ash foam composites, advancing eco-friendly construction materials.",
    icon: <BookMarked className="w-12 h-12 text-secondary-600" />,
    link: "https://lnkd.in/dy-bKimA",
  },
  {
    title:
      "Biomechanical Evaluation of Implant Materials and Connection Designs – Published in Odontology (Springer)",
    description:
      "Published in *Odontology (Springer)*, this study presents a structured narrative review of titanium and zirconia implant materials, exploring biomechanical characteristics, stress distribution, and connection designs via FEA. Conducted at 3Dim Engineering Solutions, the research advances biomedical engineering and material innovation for long-term clinical success.",
    icon: <Microscope className="w-12 h-12 text-primary-600" />,
    link: "https://lnkd.in/g7m8Ta7u",
  },
  {
    title: "AI Summit New York 2024 – Auto Circuit Maker ChatBot",
    description:
      "Represented at The AI Summit in NYC, showcasing our collaborative work on an AI-powered chatbot for automated Verilog circuit generation, revolutionizing FPGA & ASIC design.",
    icon: <Bot className="w-12 h-12 text-primary-600" />,
  },
  {
    title: "Pipe-Bursting Simulation & Defect Detection",
    description:
      "As part of a team effort, we developed cutting-edge numerical models for brittle/ductile pipe bursting and AI-driven defect detection in turbine blades using signal processing.",
    icon: <Network className="w-12 h-12 text-secondary-600" />,
  },
  {
    title: "Deep Reinforcement Learning for Game Optimization",
    description:
      "Collaboratively pioneered multi-agent DRL frameworks for multiplayer reach-avoid games, advancing strategy optimization and autonomous systems research.",
    icon: <Rocket className="w-12 h-12 text-primary-600" />,
  },

  // 🔥 New Generalized Projects
  {
    title: "Online Freelance Services Platform",
    description:
      "A cloud-deployed web marketplace that connects service providers with clients, featuring secure user authentication, real-time dashboards, and scalable media management.",
    icon: <Globe className="w-12 h-12 text-primary-600" />,
  },
  {
    title: "Community Networking Application",
    description:
      "A social platform enabling users to share updates, interact through posts and media, and stay connected in real time with an intuitive, mobile-friendly interface.",
    icon: <Users className="w-12 h-12 text-secondary-600" />,
  },
  {
    title: "Live Messaging & Collaboration Tool",
    description:
      "A real-time chat system supporting instant messaging, media sharing, online status tracking, and persistent chat history with seamless synchronization.",
    icon: <MessageCircle className="w-12 h-12 text-primary-600" />,
  },
  {
    title: "AI-Integrated Productivity Assistant",
    description:
      "An intelligent document assistant that leverages large language models for summarization, Q&A, and interactive chatbot support within a modern web application.",
    icon: <Bot className="w-12 h-12 text-secondary-600" />,
  },
];


const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-blue-green relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-secondary-100 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary-100 rounded-full blur-3xl opacity-20 animate-pulse" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full border border-primary-200/50 mb-6">
            <span className="text-sm font-semibold text-gradient">🔬 Research Excellence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Research & <span className="text-primary-600 border-b-4 border-secondary-600 pb-2">Projects</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Cutting-edge research and innovative projects that push the boundaries of engineering excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="group card-premium p-8 relative transition-all duration-500 hover:-translate-y-2 hover:rotate-1 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon with glow */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 border-2 border-secondary-200 group-hover:border-secondary-400">
                    {proj.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-all duration-300">
                  {proj.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4 group-hover:text-neutral-700 transition-colors duration-300">
                  {proj.description}
                </p>

                {/* Read More Link */}
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-primary-600 hover:text-secondary-600 transition-all relative group/link"
                  >
                    Read More →
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-secondary-600 group-hover/link:w-full transition-all duration-300"></span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
