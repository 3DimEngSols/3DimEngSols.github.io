import React from "react";
import { motion } from "framer-motion";

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

const Tools: React.FC = () => {
  return (
    <section className="section-padding bg-neutral-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Our <span className="text-primary-600">Tools & Technologies</span>
          </motion.h2>
          <p className="section-lead">
            A wide range of engineering, AI, and software tools we use to deliver innovative
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-3">
                {g.title}
              </h3>
              <ul className="flex flex-wrap gap-2 list-none p-0">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-800 shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
