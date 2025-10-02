// src/components/Tools.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Wrench,
  Layers,
  Database,
  Code,
  Globe,
  Settings,
  BookOpen,
  Atom,
  Sigma,
  GitBranch,
  ClipboardList,
  Box,
  Package,
  Braces,
  Brain,
  Terminal
} from "lucide-react";

interface Tool {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const tools: Tool[] = [
  // CAD & CAE
  { name: "SOLIDWORKS", category: "CAD & CAE", icon: <Wrench className="w-8 h-8 text-primary-600" /> },
  { name: "AutoCAD", category: "CAD & CAE", icon: <Layers className="w-8 h-8 text-secondary-600" /> },
  { name: "PTC Creo", category: "CAD & CAE", icon: <Box className="w-8 h-8 text-primary-600" /> },
  { name: "ABAQUS", category: "CAD & CAE", icon: <Atom className="w-8 h-8 text-secondary-600" /> },  // ✅ Added correct spelling
  { name: "Ansys Fluent", category: "CAD & CAE", icon: <Cpu className="w-8 h-8 text-primary-600" /> },
  { name: "3D Modeling", category: "CAD & CAE", icon: <Package className="w-8 h-8 text-secondary-600" /> },
  { name: "3D Printing", category: "CAD & CAE", icon: <Package className="w-8 h-8 text-primary-600" /> },

  // Civil/Structural
  { name: "Revit", category: "Civil/Structural", icon: <Layers className="w-8 h-8 text-primary-600" /> },
  { name: "ETABS", category: "Civil/Structural", icon: <Layers className="w-8 h-8 text-secondary-600" /> },
  { name: "CSI SAFE", category: "Civil/Structural", icon: <Layers className="w-8 h-8 text-primary-600" /> },
  { name: "Autodesk Civil 3D", category: "Civil/Structural", icon: <Layers className="w-8 h-8 text-secondary-600" /> },
  { name: "Building Information Modeling (BIM)", category: "Civil/Structural", icon: <Layers className="w-8 h-8 text-primary-600" /> },

  // Programming & AI
  { name: "Python", category: "Programming & AI", icon: <Code className="w-8 h-8 text-primary-600" /> },
  { name: "C++", category: "Programming & AI", icon: <Code className="w-8 h-8 text-secondary-600" /> },
  { name: "MATLAB", category: "Programming & AI", icon: <Sigma className="w-8 h-8 text-primary-600" /> },
  { name: "Simulink", category: "Programming & AI", icon: <Sigma className="w-8 h-8 text-secondary-600" /> },
  { name: "OpenCV", category: "Programming & AI", icon: <Cpu className="w-8 h-8 text-primary-600" /> },
  { name: "PyTorch", category: "Programming & AI", icon: <Brain className="w-8 h-8 text-secondary-600" /> },
  { name: "TensorFlow", category: "Programming & AI", icon: <Brain className="w-8 h-8 text-primary-600" /> },
  { name: "Keras", category: "Programming & AI", icon: <Brain className="w-8 h-8 text-secondary-600" /> },
  { name: "scikit-learn", category: "Programming & AI", icon: <Braces className="w-8 h-8 text-primary-600" /> },
  { name: "Hugging Face Transformers", category: "Programming & AI", icon: <Braces className="w-8 h-8 text-secondary-600" /> },
  { name: "Ultralytics", category: "Programming & AI", icon: <Braces className="w-8 h-8 text-primary-600" /> },
  { name: "Console", category: "Programming & AI", icon: <Terminal className="w-8 h-8 text-secondary-600" /> }, // ✅ Added Console

  // Web/DevOps
  { name: "MERN Stack", category: "Web/DevOps", icon: <Globe className="w-8 h-8 text-secondary-600" /> },
  { name: "React.js", category: "Web/DevOps", icon: <Globe className="w-8 h-8 text-primary-600" /> },
  { name: "Express.js", category: "Web/DevOps", icon: <Globe className="w-8 h-8 text-secondary-600" /> },
  { name: "MongoDB", category: "Web/DevOps", icon: <Database className="w-8 h-8 text-primary-600" /> },
  { name: "Node.js", category: "Web/DevOps", icon: <Globe className="w-8 h-8 text-secondary-600" /> },
  { name: "DevOps", category: "Web/DevOps", icon: <Settings className="w-8 h-8 text-primary-600" /> },
  { name: "CI/CD", category: "Web/DevOps", icon: <GitBranch className="w-8 h-8 text-secondary-600" /> },
  { name: "GitHub", category: "Web/DevOps", icon: <GitBranch className="w-8 h-8 text-primary-600" /> },

  // Productivity & Utilities
  { name: "Microsoft Excel", category: "Productivity", icon: <ClipboardList className="w-8 h-8 text-primary-600" /> },
  { name: "Microsoft Office", category: "Productivity", icon: <ClipboardList className="w-8 h-8 text-secondary-600" /> },
  { name: "Google Colab", category: "Productivity", icon: <BookOpen className="w-8 h-8 text-primary-600" /> },
  { name: "Jupyter Notebook", category: "Productivity", icon: <BookOpen className="w-8 h-8 text-secondary-600" /> },
  { name: "Spyder", category: "Productivity", icon: <BookOpen className="w-8 h-8 text-primary-600" /> },
  { name: "VS Code", category: "Productivity", icon: <BookOpen className="w-8 h-8 text-secondary-600" /> },
  { name: "Inkscape", category: "Productivity", icon: <BookOpen className="w-8 h-8 text-primary-600" /> },
  { name: "Saber", category: "Productivity", icon: <BookOpen className="w-8 h-8 text-secondary-600" /> }
];


const Tools: React.FC = () => {
  return (
    <section className="section-padding bg-neutral-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
          >
            Our <span className="text-primary-600 border-b-4 border-secondary-600 pb-2">Tools & Technologies</span>
          </motion.h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            A wide range of engineering, AI, and software tools we use to deliver innovative solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="card-premium p-6 flex flex-col items-center text-center group"
            >
              <div className="mb-4">{tool.icon}</div>
              <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">
                {tool.name}
              </h3>
              <p className="text-sm text-neutral-500 mt-1">{tool.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
