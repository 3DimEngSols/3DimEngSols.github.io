import { BookOpen, Wrench, Building2, Brain, Database, FlaskConical, Atom, Terminal, Sigma, Globe, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceCategory = "engineering" | "ai" | "research" | "software";

export interface Service {
  slug: string;
  title: string;
  description: string;
  category: ServiceCategory;
  icon: LucideIcon;
}

export const categories: { id: ServiceCategory; label: string }[] = [
  { id: "engineering", label: "Engineering" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "research", label: "Research & Data" },
  { id: "software", label: "Software & Web" },
];

export const services: Service[] = [
  {
    slug: "research-assistance-and-publications",
    title: "Research Assistance & Publications",
    description:
      "Thesis guidance, journal publications, literature reviews, and end-to-end academic support with 100+ successful projects globally.",
    category: "research",
    icon: BookOpen,
  },
  {
    slug: "mechanical-engineering",
    title: "Mechanical Engineering",
    description:
      "Expertise in CAD/CAM, product prototyping, composites, FEA, topology optimization, and industrial product development.",
    category: "engineering",
    icon: Wrench,
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    description:
      "Structural design, sustainable materials (glass powder concrete, fly ash composites), and advanced construction solutions.",
    category: "engineering",
    icon: Building2,
  },
  {
    slug: "agentic-ai-systems",
    title: "Agentic AI Systems",
    description:
      "Design and deploy advanced AI agents, multi-agent workflows, and multi-tool integrations using frameworks like LangChain, LangGraph, MCP, CrueAI, and AutoGen. Expertise also includes building voice AI agents with Twilio, Retell AI, Vapi, and ElevenLabs for industries such as dental, real estate, barbershops, and customer support.",
    category: "ai",
    icon: Brain,
  },
  {
    slug: "artificial-intelligence-and-machine-learning",
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Custom ML/DL models for predictive analytics, NLP, speech recognition, and data-driven decision-making in research and industry.",
    category: "ai",
    icon: Brain,
  },
  {
    slug: "computer-vision-and-image-processing",
    title: "Computer Vision & Image Processing",
    description:
      "Real-time vision systems for UAVs, robotics, and industry applications, with expertise in YOLO, object detection, and image analysis.",
    category: "ai",
    icon: Globe,
  },
  {
    slug: "electrical-robotics-and-automation",
    title: "Electrical, Robotics & Automation",
    description:
      "Smart robotics, UAVs, embedded systems, IoT devices, and intelligent automation using cutting-edge hardware integration.",
    category: "engineering",
    icon: Cpu,
  },
  {
    slug: "data-science-and-analytics",
    title: "Data Science & Analytics",
    description:
      "Advanced econometrics, predictive analytics, time series, SEM, and financial forecasting using Python, R, and STATA.",
    category: "research",
    icon: Database,
  },
  {
    slug: "industrial-and-product-solutions",
    title: "Industrial & Product Solutions",
    description:
      "Engineering solutions in thermodynamics, manufacturing processes, optimization, and product prototyping.",
    category: "engineering",
    icon: Wrench,
  },
  {
    slug: "matlab-and-simulink",
    title: "MATLAB & Simulink",
    description:
      "Modeling, simulation, signal processing, control systems, and optimization using MATLAB and Simulink.",
    category: "engineering",
    icon: Sigma,
  },
  {
    slug: "composites-and-advanced-materials",
    title: "Composites & Advanced Materials",
    description:
      "Smart/nano composites, solid mechanics, additive manufacturing, and computational material modeling expertise.",
    category: "engineering",
    icon: Atom,
  },
  {
    slug: "chemistry-and-materials-science",
    title: "Chemistry & Materials Science",
    description:
      "Research and publication support in chemistry, polymer chemistry, environmental chemistry, and advanced sustainable materials.",
    category: "research",
    icon: FlaskConical,
  },
  {
    slug: "programming-and-software-development",
    title: "Programming & Software Development",
    description:
      "Python, C++, Java, and custom software development solutions for research, automation, and engineering applications.",
    category: "software",
    icon: Terminal,
  },
  {
    slug: "web-development-and-full-stack-solutions",
    title: "Web Development & Full-Stack Solutions",
    description:
      "Custom web development including portfolio websites, company websites, e-commerce platforms, and personal blogs. Expertise in React.js, MongoDB, Express.js, Node.js, Flask, Django.",
    category: "software",
    icon: Globe,
  },
];

export const getService = (slug?: string) => services.find((s) => s.slug === slug);
