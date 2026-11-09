// src/components/homepageComponents/DigitalTools.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  PenTool,
  BookOpen,
  Brain,
  Layers,
  Music,
  // Youtube,
  Linkedin,
  Laptop,
  Database,
  // Wrench,
  Film,
  Mail,
  Phone,
  MapPin,
  X,
  MessageCircle,
  ArrowUpRight,
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
import Footer from "../components/footer.tsx";
import SectionHeader from "../components/SectionHeader.tsx";

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
  { name: "Apple Music", icon: <FaApple className="w-8 h-8 text-neutral-700" />, category: "Music & Media" },
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
  { name: "Notion AI", icon: <Database className="w-8 h-8 text-neutral-700" />, category: "Writing & Productivity" },

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
  { name: "Capcut Pro", icon: <Film className="w-8 h-8 text-neutral-700" />, category: "Media Editing" },

  

  // --- OS & Software ---
  
];

const CHINA_NUMBER = "+86 13193302925";
const EMAIL = "3dimengineeringsolutions@gmail.com";
const ADDRESS =
  "E Building, 12th Floor, Chamba District, Free Trade Center, Xi'an, Shaanxi Province, 710072, P.R. China";
const categories = ["All", ...Array.from(new Set(tools.map((t) => t.category)))];

const BuyModal: React.FC<{ tool: Tool; onClose: () => void }> = ({ tool, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const message = `Hello 3Dim Engineering Solutions, I'd like to buy: ${tool.name}`;
  const row = "flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-3";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Buy ${tool.name}`}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 inline-flex items-center justify-center w-10 h-10 rounded-full text-neutral-500 hover:bg-neutral-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3 pr-10 mb-1">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 [&>svg]:w-6 [&>svg]:h-6">
            {tool.icon}
          </span>
          <div>
            <h2 className="text-lg font-bold text-ink leading-tight">{tool.name}</h2>
            <p className="text-xs text-neutral-500">{tool.category}</p>
          </div>
        </div>
        <p className="text-sm text-neutral-600 mt-3 mb-4">
          Contact us to order this subscription. We usually reply on WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <a
            href={`https://wa.me/8613193302925?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lift flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-full bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" /> Order on WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Order: ${tool.name}`)}`}
            className="btn-lift flex-1 inline-flex items-center justify-center gap-2 h-11 rounded-full border border-neutral-300 text-sm font-semibold text-neutral-800 hover:border-primary-500 hover:text-primary-700"
          >
            <Mail className="w-4 h-4" aria-hidden="true" /> Email us
          </a>
        </div>

        <div className="space-y-2.5 text-sm">
          <div className={row}>
            <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary-600" aria-hidden="true" />
            <div className="flex-1">
              <p className="font-semibold text-neutral-800">WhatsApp / WeChat</p>
              <p className="text-neutral-600">{CHINA_NUMBER}</p>
            </div>
            <a href="/Images/WeChat.jpeg" target="_blank" rel="noopener noreferrer" aria-label="Open WeChat QR code">
              <img src="/Images/WeChat.jpeg" alt="WeChat QR code" className="w-20 h-auto rounded-md border border-neutral-200" />
            </a>
          </div>
          <div className={row}>
            <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary-600" aria-hidden="true" />
            <a href={`mailto:${EMAIL}`} className="break-all text-neutral-700 hover:text-primary-700">{EMAIL}</a>
          </div>
          <div className={row}>
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary-600" aria-hidden="true" />
            <span className="text-neutral-700">{ADDRESS}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DigitalTools: React.FC = () => {
  const [selected, setSelected] = useState<Tool | null>(null);
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? tools : tools.filter((t) => t.category === filter);

  useEffect(() => {
    document.title = "Buy Tools | 3Dim Engineering Solutions";
    return () => {
      document.title = "3Dim Engineering Solutions";
    };
  }, []);

  return (
    <div className="bg-neutral-50 text-neutral-900 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 md:pt-24 pb-12">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Premium Tools"
            title={<>Digi-Tech Premium <span className="text-primary-600">Tools & Subscriptions</span></>}
            lead="Access premium digital tools and subscriptions at competitive prices to boost your productivity and creativity."
          />

          <div className="flex flex-wrap justify-center gap-2 mb-6" role="group" aria-label="Filter by category">
            {categories.map((c) => {
              const on = c === filter;
              const count = c === "All" ? tools.length : tools.filter((t) => t.category === c).length;
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setFilter(c)}
                  className={`h-9 px-3.5 rounded-full text-xs font-semibold border transition-colors duration-200 cursor-pointer ${
                    on
                      ? "bg-ink text-white border-ink"
                      : "bg-white text-neutral-700 border-neutral-300 hover:border-primary-500 hover:text-primary-700"
                  }`}
                >
                  {c} <span className={on ? "text-white/60" : "text-neutral-400"}>{count}</span>
                </button>
              );
            })}
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 list-none p-0 m-0">
            {visible.map((tool) => (
              <li
                key={tool.name}
                className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition-all duration-200 hover:border-primary-300 hover:shadow-md"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 shrink-0 rounded-xl bg-neutral-100 [&>svg]:w-6 [&>svg]:h-6">
                  {tool.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-ink leading-snug">{tool.name}</h3>
                  <p className="text-xs text-neutral-500">{tool.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(tool)}
                  aria-label={`Buy ${tool.name}`}
                  className="btn-lift shrink-0 inline-flex items-center gap-1 h-9 px-3.5 rounded-full bg-primary-600 text-white text-xs font-semibold hover:bg-primary-700 cursor-pointer"
                >
                  Buy <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
      {selected && <BuyModal tool={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default DigitalTools;
