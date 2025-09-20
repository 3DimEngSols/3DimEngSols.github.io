// src/components/homepageComponents/DigitalTools.tsx
import React, { useState } from "react";
import {
  PenTool,
  BookOpen,
  Brain,
  Layers,
  Music,
  Youtube,
  Linkedin,
  Laptop,
  Database,
  Wrench,
  Film,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { FaSpotify, FaApple, FaGoogle, FaFigma, FaMicrosoft } from "react-icons/fa";
import { SiCoursera, SiGrammarly, SiCanva, SiOpenai, SiAdobe } from "react-icons/si";
import Navbar from "../components/navbar.tsx";

interface Tool {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const tools: Tool[] = [
  { name: "Adobe Creative Cloud", icon: <SiAdobe className="w-8 h-8 text-red-500" />, category: "Design & Creativity" },
  { name: "Grammarly Premium", icon: <SiGrammarly className="w-8 h-8 text-green-500" />, category: "Writing & Productivity" },
  { name: "Coursera Plus", icon: <SiCoursera className="w-8 h-8 text-blue-500" />, category: "Learning" },
  { name: "Perplexity AI", icon: <Brain className="w-8 h-8 text-purple-400" />, category: "AI & Productivity" },
  { name: "Rezi.ai", icon: <PenTool className="w-8 h-8 text-emerald-400" />, category: "Career Tools" },
  { name: "Figma Pro", icon: <FaFigma className="w-8 h-8 text-pink-500" />, category: "Design & Creativity" },
  { name: "Canva Pro", icon: <SiCanva className="w-8 h-8 text-sky-500" />, category: "Design & Creativity" },
  { name: "Autodesk (1 year)", icon: <Wrench className="w-8 h-8 text-teal-500" />, category: "Engineering & CAD" },
  { name: "LinkedIn Premium", icon: <Linkedin className="w-8 h-8 text-blue-600" />, category: "Professional Growth" },
  { name: "Google Workspace (50TB)", icon: <FaGoogle className="w-8 h-8 text-yellow-500" />, category: "Productivity" },
  { name: "Capcut Pro", icon: <Film className="w-8 h-8 text-gray-300" />, category: "Media Editing" },
  { name: "ChatGPT Plus", icon: <SiOpenai className="w-8 h-8 text-emerald-400" />, category: "AI & Productivity" },
  { name: "ElevenLabs", icon: <Layers className="w-8 h-8 text-orange-500" />, category: "AI Voice & Media" },
  { name: "Cursor AI", icon: <Laptop className="w-8 h-8 text-indigo-400" />, category: "AI Coding" },
  { name: "QuillBot Pro", icon: <PenTool className="w-8 h-8 text-yellow-400" />, category: "Writing & Productivity" },
  { name: "Turnitin + Stealth Writer", icon: <BookOpen className="w-8 h-8 text-rose-500" />, category: "Academic Tools" },
  { name: "Microsoft 365 Premium", icon: <FaMicrosoft className="w-8 h-8 text-blue-500" />, category: "Productivity" },
  { name: "AI Detector Accounts", icon: <Database className="w-8 h-8 text-cyan-500" />, category: "AI Tools" },
  { name: "YouTube Premium", icon: <Youtube className="w-8 h-8 text-red-500" />, category: "Music & Media" },
  { name: "Spotify Premium", icon: <FaSpotify className="w-8 h-8 text-green-500" />, category: "Music & Media" },
  { name: "Apple Music", icon: <FaApple className="w-8 h-8 text-gray-300" />, category: "Music & Media" },
  { name: "Amazon Music", icon: <Music className="w-8 h-8 text-indigo-500" />, category: "Music & Media" },
];

const DigitalTools: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-center px-6">
      <Navbar />
      <h2 className="text-4xl font-extrabold text-emerald-400 mb-12">
        🔥 Digi-Tech Premium Tools & Subscriptions
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="p-6 flex flex-col items-center justify-between bg-gray-800/50 border border-gray-700 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition transform hover:-translate-y-2"
          >
            <div>
              <div className="flex justify-center mb-4">{tool.icon}</div>
              <h3 className="text-lg font-bold text-white">{tool.name}</h3>
              <p className="text-gray-400 text-sm mt-2">{tool.category}</p>
            </div>
            <button
              onClick={() => setShowContact(true)}
              className="mt-6 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-gray-900 p-8 rounded-2xl max-w-lg w-full relative shadow-lg border border-gray-700">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✖
            </button>
            <h2 className="text-3xl font-extrabold text-emerald-400 mb-6">
              Contact Us
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Reach out to us!
              </p>
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3">
                  <Mail className="text-emerald-400" />
                  <span>info@3dimengineering.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-emerald-400" />
                  <span>+86 17792251931</span>
                </div>
                <div className="flex items-start gap-3 max-w-md text-center md:text-left">
                  <MapPin className="text-emerald-400 mt-1" />
                  <span>
                    E Building, 12th Floor, Chanba District, Free Trade Center, Xi’an,  
                    Shaanxi Province, 710072, P.R. China
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DigitalTools;
