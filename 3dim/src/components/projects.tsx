import React from "react";
import { ArrowUpRight } from "lucide-react";
import HorizontalScroller from "./HorizontalScroller.tsx";
import SectionHeader from "./SectionHeader.tsx";
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
    icon: <Microscope className="w-6 h-6 text-primary-600" />,
    link: "https://lnkd.in/gvdzBnCk",
  },
  {
    title:
      "Explainable AI for Fly Ash Foam Concrete – Published in Sustainable Concrete",
    description:
      "Through collaborative efforts, we introduced transparent AI models for predicting the strength of fly ash foam composites, advancing eco-friendly construction materials.",
    icon: <BookMarked className="w-6 h-6 text-primary-600" />,
    link: "https://lnkd.in/dy-bKimA",
  },
  {
    title:
      "Biomechanical Evaluation of Implant Materials and Connection Designs – Published in Odontology",
    description:
      "Presents a structured narrative review of titanium and zirconia implant materials, exploring biomechanical characteristics, stress distribution, and connection designs via FEA. Conducted at 3Dim Engineering Solutions, the research advances biomedical engineering and material innovation for long-term clinical success.",
    icon: <Microscope className="w-6 h-6 text-primary-600" />,
    link: "https://lnkd.in/g7m8Ta7u",
  },
  {
    title: "AI Summit New York 2024 – Auto Circuit Maker ChatBot",
    description:
      "Represented at The AI Summit in NYC, showcasing our collaborative work on an AI-powered chatbot for automated Verilog circuit generation, revolutionizing FPGA & ASIC design.",
    icon: <Bot className="w-6 h-6 text-primary-600" />,
  },
  {
    title: "Pipe-Bursting Simulation & Defect Detection",
    description:
      "As part of a team effort, we developed cutting-edge numerical models for brittle/ductile pipe bursting and AI-driven defect detection in turbine blades using signal processing.",
    icon: <Network className="w-6 h-6 text-primary-600" />,
  },
  {
    title: "Deep Reinforcement Learning for Game Optimization",
    description:
      "Collaboratively pioneered multi-agent DRL frameworks for multiplayer reach-avoid games, advancing strategy optimization and autonomous systems research.",
    icon: <Rocket className="w-6 h-6 text-primary-600" />,
  },

  // 🔥 New Generalized Projects
  {
    title: "Online Freelance Services Platform",
    description:
      "A cloud-deployed web marketplace that connects service providers with clients, featuring secure user authentication, real-time dashboards, and scalable media management.",
    icon: <Globe className="w-6 h-6 text-primary-600" />,
  },
  {
    title: "Community Networking Application",
    description:
      "A social platform enabling users to share updates, interact through posts and media, and stay connected in real time with an intuitive, mobile-friendly interface.",
    icon: <Users className="w-6 h-6 text-primary-600" />,
  },
  {
    title: "Live Messaging & Collaboration Tool",
    description:
      "A real-time chat system supporting instant messaging, media sharing, online status tracking, and persistent chat history with seamless synchronization.",
    icon: <MessageCircle className="w-6 h-6 text-primary-600" />,
  },
  {
    title: "AI-Integrated Productivity Assistant",
    description:
      "An intelligent document assistant that leverages large language models for summarization, Q&A, and interactive chatbot support within a modern web application.",
    icon: <Bot className="w-6 h-6 text-primary-600" />,
  },
];


const Projects: React.FC = () => (
  <HorizontalScroller
    label="Research and projects"
    minHeight="md:min-h-[clamp(300px,calc(100svh-460px),400px)]"
    header={
      <SectionHeader
        compact
        hideLeadOnShort
        eyebrow="Research Excellence"
        title={<>Research & <span className="text-primary-600">Projects</span></>}
        lead="Cutting-edge research and innovative projects that push the boundaries of engineering excellence."
      />
    }
  >
    {projects.map((proj, i) => (
      <article
        key={i}
        data-card
        className="card-premium snap-start shrink-0 w-[var(--card-w)] p-5 flex flex-col"
      >
        <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-50 mb-3">
          {proj.icon}
        </span>
        <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">{proj.title}</h3>
        <p className="text-[15px] text-neutral-600 leading-relaxed">{proj.description}</p>
        {proj.link && (
          <a
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-3 inline-flex items-center gap-1 min-h-11 text-sm font-semibold text-primary-700 hover:text-primary-800"
          >
            Read more <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        )}
      </article>
    ))}
  </HorizontalScroller>
);

export default Projects;
