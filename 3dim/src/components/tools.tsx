import React from "react";
import { Box, Building2, Brain, Mic, Workflow, Code2, Globe, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "./SectionHeader.tsx";

const groups: { title: string; items: string[] }[] = [
  { title: "CAD & CAE", items: ["SOLIDWORKS", "AutoCAD", "PTC Creo", "ABAQUS", "Ansys Fluent", "3D Modeling", "3D Printing"] },
  { title: "Civil/Structural", items: ["Revit", "ETABS", "CSI SAFE", "Autodesk Civil 3D", "Building Information Modeling (BIM)"] },
  { title: "Agentic AI Tools", items: ["LangChain", "LangGraph", "MCP", "CrueAI", "AutoGen"] },
  { title: "Voice AI & Automation", items: ["Twilio", "Retell AI", "Vapi", "ElevenLabs"] },
  { title: "No-Code Automation", items: ["n8n", "Zapier", "Make.com"] },
  { title: "Programming & AI", items: ["Python", "C++", "MATLAB", "Simulink", "OpenCV", "PyTorch", "TensorFlow", "Keras", "scikit-learn", "Hugging Face Transformers", "Ultralytics", "Console"] },
  { title: "Web/DevOps", items: ["MERN Stack", "React.js", "Express.js", "MongoDB", "Node.js", "DevOps", "CI/CD", "GitHub"] },
  { title: "Productivity", items: ["Microsoft Excel", "Microsoft Office", "Google Colab", "Jupyter Notebook", "Spyder", "VS Code", "Inkscape", "Saber"] },
];


// Display order and icon per category (3 x 3 grid; Programming & AI spans two columns)
const layout: { title: string; icon: LucideIcon; wide?: boolean }[] = [
  { title: "CAD & CAE", icon: Box },
  { title: "Civil/Structural", icon: Building2 },
  { title: "Agentic AI Tools", icon: Brain },
  { title: "Voice AI & Automation", icon: Mic },
  { title: "No-Code Automation", icon: Workflow },
  { title: "Web/DevOps", icon: Globe },
  { title: "Programming & AI", icon: Code2, wide: true },
  { title: "Productivity", icon: Briefcase },
];

const Tools: React.FC = () => {
  const reduce = useReducedMotion();
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Technology Stack"
          title={<>Our <span className="text-primary-600">Tools & Technologies</span></>}
          lead="A wide range of engineering, AI, and software tools we use to deliver innovative solutions."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {layout.map(({ title, icon: Icon, wide }, i) => {
            const items = groups.find((g) => g.title === title)?.items ?? [];
            return (
              <motion.div
                key={title}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: (i % 3) * 0.07, duration: 0.45 }}
                className={`rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md ${
                  wide ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-bold text-ink">{title}</h3>
                  <span className="ml-auto text-xs font-semibold text-neutral-400 tabular-nums">
                    {items.length}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 text-sm font-medium text-neutral-800 transition-colors duration-200 hover:border-primary-400 hover:bg-primary-50 hover:text-primary-800"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;
