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

import {
  FaSpotify,
  FaApple,
  FaGoogle,
  FaFigma,
  FaMicrosoft,
  FaYoutube,
  FaBookOpen 
} from "react-icons/fa";
import {
  SiCoursera,
  SiGrammarly,
  SiCanva,
  SiOpenai,
  SiAdobe,
  SiAutodesk,
  SiShutterstock,
  SiWordpress,
} from "react-icons/si";

import Navbar from "../components/navbar.tsx";

interface Tool {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const tools: Tool[] = [
  { name: "ChatGPT Plus", icon: <SiOpenai className="w-8 h-8 text-emerald-400" />, category: "AI & Productivity" },
  { name: "Perplexity AI", icon: <Brain className="w-8 h-8 text-purple-400" />, category: "AI & Productivity" },
  { name: "Grok (Super Heavy Plan)", icon: <Brain className="w-8 h-8 text-yellow-500" />, category: "AI & Productivity" },
  { name: "Windows 10/11 Pro", icon: <Laptop className="w-8 h-8 text-blue-400" />, category: "Operating System" },
  { name: "Turnitin + Stealth Writer", icon: <BookOpen className="w-8 h-8 text-rose-500" />, category: "Academic Tools" },
  { name: "QuillBot Pro", icon: <PenTool className="w-8 h-8 text-yellow-400" />, category: "Writing & Productivity" },
  { name: "Coursera Plus", icon: <SiCoursera className="w-8 h-8 text-blue-500" />, category: "Learning" },
  { name: "Chegg", icon: <FaBookOpen  className="w-8 h-8 text-orange-500" />, category: "Learning" },
  { name: "Canva Pro", icon: <SiCanva className="w-8 h-8 text-sky-500" />, category: "Design & Creativity" },
  { name: "Adobe Creative Cloud", icon: <SiAdobe className="w-8 h-8 text-red-500" />, category: "Design & Creativity" },
  { name: "Figma Pro", icon: <FaFigma className="w-8 h-8 text-pink-500" />, category: "Design & Creativity" },
  { name: "Microsoft 365 Premium", icon: <FaMicrosoft className="w-8 h-8 text-blue-500" />, category: "Productivity" },
  { name: "Grammarly Premium", icon: <SiGrammarly className="w-8 h-8 text-green-500" />, category: "Writing & Productivity" },
  { name: "Microsoft Office (2016/2019/2021)", icon: <FaMicrosoft className="w-8 h-8 text-orange-400" />, category: "Productivity" },
  { name: "YouTube Premium", icon: <FaYoutube className="w-8 h-8 text-red-500" />, category: "Music & Media" },

  { name: "Cursor AI", icon: <Laptop className="w-8 h-8 text-indigo-400" />, category: "AI Coding" },
  { name: "LinkedIn Premium", icon: <Linkedin className="w-8 h-8 text-blue-600" />, category: "Professional Growth" },
  
  { name: "Datacamp", icon: <Database className="w-8 h-8 text-green-400" />, category: "Learning" },
  { name: "Google Workspace (50TB)", icon: <FaGoogle className="w-8 h-8 text-yellow-500" />, category: "Productivity" },
  { name: "Rezi.ai", icon: <PenTool className="w-8 h-8 text-emerald-400" />, category: "Career Tools" },
  { name: "Spotify Premium", icon: <FaSpotify className="w-8 h-8 text-green-500" />, category: "Music & Media" },
  { name: "Apple Music", icon: <FaApple className="w-8 h-8 text-gray-300" />, category: "Music & Media" },
  { name: "Amazon Music", icon: <Music className="w-8 h-8 text-indigo-500" />, category: "Music & Media" },
  // --- Engineering & CAD ---
  { name: "Autodesk AutoCAD", icon: <SiAutodesk className="w-8 h-8 text-teal-500" />, category: "Engineering & CAD" },
  // --- Design & Creativity ---
  { name: "Adobe Firefly Video Gen", icon: <SiAdobe className="w-8 h-8 text-orange-500" />, category: "Design & Creativity" },
  { name: "Envato Elements", icon: <SiWordpress className="w-8 h-8 text-green-500" />, category: "Design & Creativity" },
  { name: "Shutterstock", icon: <SiShutterstock className="w-8 h-8 text-red-400" />, category: "Design & Creativity" },
  { name: "Freepik", icon: <Layers className="w-8 h-8 text-blue-400" />, category: "Design & Creativity" },
  { name: "Storyblocks", icon: <Film className="w-8 h-8 text-indigo-400" />, category: "Design & Creativity" },
  { name: "Picsart", icon: <Film className="w-8 h-8 text-pink-400" />, category: "Design & Creativity" },

  // --- Writing & Productivity ---
  
  { name: "Wordtune", icon: <BookOpen className="w-8 h-8 text-violet-400" />, category: "Writing & Productivity" },
  { name: "Copy.ai", icon: <Brain className="w-8 h-8 text-cyan-400" />, category: "Writing & Productivity" },
  { name: "Notion AI", icon: <Database className="w-8 h-8 text-white" />, category: "Writing & Productivity" },

  // --- Academic Tools ---
  { name: "Course Hero", icon: <BookOpen className="w-8 h-8 text-indigo-500" />, category: "Academic Tools" },

  // --- Learning ---
  
  { name: "Skillshare", icon: <Layers className="w-8 h-8 text-emerald-500" />, category: "Learning" },
  

  // --- AI & Productivity ---
  
  { name: "ElevenLabs", icon: <Layers className="w-8 h-8 text-orange-500" />, category: "AI Voice & Media" },

  // --- Productivity & Business ---
  
  
  
 
  { name: "Helium 10", icon: <Database className="w-8 h-8 text-purple-500" />, category: "Business Tools" },

  // --- Media & Music ---
  
  { name: "Vyond", icon: <Film className="w-8 h-8 text-orange-400" />, category: "Media Editing" },
  { name: "InVideo", icon: <Film className="w-8 h-8 text-red-400" />, category: "Media Editing" },
  { name: "Capcut Pro", icon: <Film className="w-8 h-8 text-gray-300" />, category: "Media Editing" },

  

  // --- OS & Software ---
  
];

const DigitalTools: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="bg-gradient-professional text-neutral-900 min-h-screen">
      <Navbar />
      <section className="section-padding pt-20 relative overflow-hidden mt-10">
        {/* Background decoration */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-secondary-100 rounded-full blur-3xl opacity-20 animate-pulse" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full border border-primary-200/50 mb-6">
              <span className="text-sm font-semibold text-gradient">🔥 Premium Tools</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Digi-Tech Premium <span className="text-primary-600 border-b-4 border-secondary-600 pb-2">Tools & Subscriptions</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Access premium digital tools and subscriptions at competitive prices to boost your productivity and creativity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="card-premium p-6 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-3 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 group-hover:shadow-lg transition-all duration-300">
                      {tool.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-all duration-300">{tool.name}</h3>
                  <p className="text-neutral-500 text-sm mb-6 group-hover:text-neutral-600 transition-colors duration-300">{tool.category}</p>
                  <button
                    onClick={() => setShowContact(true)}
                    className="w-full btn-primary"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
          <div className="card-premium p-8 max-w-lg w-full relative">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-secondary-600 transition-colors p-2 rounded-full hover:bg-secondary-50"
            >
              ✖
            </button>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Contact <span className="text-primary-600 border-b-2 border-secondary-600 pb-1">Us</span>
            </h2>
            <div className="space-y-6 text-neutral-600">
              <p className="text-lg">Reach out to us!</p>
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary-50 to-secondary-50 w-full">
                  <Mail className="text-primary-600" />
                  <span>3dimengineeringsolutions@gmail.com</span>
                </div>
                {/* Phone / WeChat Section */}
<div className="flex flex-col sm:flex-row sm:items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-primary-50 to-secondary-50 w-full">
  <div className="flex items-center gap-3">
    <Phone className="text-secondary-600" />
    <div className="flex flex-col">
      <span className="font-medium text-gray-800">Phone / WeChat</span>
      <span className="text-gray-700">+86 17792251931</span>
    </div>
  </div>

  {/* QR Code */}
  <a
    href="/Images/WeChat.jpeg" // ✅ Update with your actual path
    target="_blank"
    rel="noopener noreferrer"
    className="self-start sm:self-auto"
  >
    <img
      src="/Images/WeChat.jpeg"
      alt="WeChat QR Code"
      className="w-24 h-24 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
    />
  </a>
</div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-primary-50 to-secondary-50 w-full">
                  <MapPin className="text-primary-600 mt-1" />
                  <span>
                    E Building, 12th Floor, Chanba District, Free Trade Center, Xi'an,  
                    Shaanxi Province, 710072, P.R. China
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalTools;
