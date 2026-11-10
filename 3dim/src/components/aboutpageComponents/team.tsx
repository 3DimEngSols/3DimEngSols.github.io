// src/components/aboutpageComponents/Team.tsx
import SectionHeader from "../SectionHeader.tsx";
import { ArrowRight, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  isFounder?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ahmed Waqar Rao",
    role: "Co-Founder & CEO | Computer/Robotics and AI Engineer",
    image: "/Images/Ahmed.jpg",
    isFounder: true,
    bio: `Passionate about Deep Learning, Machine Learning, and Computer Vision, focusing on UAV optimization for edge environments.
Ahmed develops lightweight high-performance deep learning models (YOLOv8–YOLOv11) optimized for NVIDIA Jetson devices,
with applications in agriculture, disaster response, and industrial automation. Expert in developing AI-driven robotic systems using Digital Twins, computer vision, and neural networks.

He is the Co-Founder and CEO of 3Dim Engineering Solutions & WebsDady, with extensive project management experience 
at Simplicity Nigeria. Ahmed has also been part of cutting-edge academic research at Northwestern 
Polytechnical University, where he explored AI-driven solutions for UAVs and real-time image processing.`,
  },
  {
    name: "Qasim Bin Habib",
    role: "Co-Founder | Mechanical Engineer",
    image: "/Images/qasim.jpg",
    isFounder: true,
    bio: `A qualified and passionate mechanical engineer with a strong focus on development, learning, and problem-solving.
He has academic and professional experience in automotive design engineering, CAD/CAM, topology optimization, and
manufacturing. 

With roles at Blitzkrieg Defense Solutions and Honda Atlas Cars, Qasim brings expertise in defense
vehicles, pneumatic systems, and spare parts operations within Pakistan's automotive industry. 
As Co-Founder of 3Dim Engineering Solutions, he leads innovation in mechanical and industrial product development.`,
  },
  {
    name: "Muhammad Raza",
    role: "Civil Engineer",
    image: "/Images/raza.jpg",
    bio: `Civil engineer specializing in structural design and analysis with strong project execution experience.`,
  },
  {
    name: "Shamsher Ali",
    role: "Mechanical Engineer | Composites & FEA Specialist",
    image: "/Images/shamsher.jpg",
    bio: `Research-oriented professional with expertise in Mechanics, Materials, Composites, 3D CAD, and Finite Element Analysis (FEA). 
With extensive certifications in CAD, FEA, and Composite Materials, Shamsher excels in developing optimized engineering solutions. 
He leverages SolidWorks for 3D CAD modeling and ABAQUS/Simulia for advanced composite modeling and performance analysis, 
turning theoretical concepts into practical, high-performance applications. His expertise spans structural mechanics, 
material science, and design optimization.`,
  },
  {
    name: "Huzaifa Azam",
    role: "Mechanical Engineer | CAD & Multiphysics Simulation Engineer",
    image: "/Images/Huzaifa1.jpeg",
    bio: `Mechanical engineer with expertise in 3D modeling using SolidWorks, Creo, and AutoCAD, combined with research experience in 
fluid mechanics and multiphase flow systems. Huzaifa applies machine learning to complex engineering problems such as two-phase flow 
analysis in piping systems. His focus is on delivering innovative mechanical solutions by integrating advanced modeling techniques 
with data-driven approaches. He brings strong skills in project planning, manufacturing, and mechanical system optimization.`,
  },
  {
    name: "Muhammad Sheraz",
    role: "Materials Scientist | Polymer & Hydrogel Researcher",
    image: "/Images/sheraz1.jpeg",
    bio: `Specialist in natural polymers, hydrogels, and multifunctional materials with extensive research and publications in 
international journals such as Sensors and Polymers. Sheraz focuses on the synthesis, characterization, and application of 
hydrogel-based materials for sensors, drug delivery systems, biodegradable composites, and wastewater treatment. His expertise 
bridges advanced materials science with practical applications, driving innovation in sustainable and environment-friendly solutions.`,
  },
  {
    name: "Muhammad Imran",
    role: "Electrical Engineer | Power Systems & Power Electronics Specialist",
    image: "/Images/imran.jpg",
    bio: `Qualified electrical engineer with expertise in power systems, registered with the Pakistan Engineering Council.
Currently pursuing a master's degree in Electrical Engineering at Northwestern Polytechnical University, China, 
with research focused on "Controlling Techniques of Four-Switch Buck-Boost Converters" for applications in renewable 
energy and electric vehicles. 

With 3 years of professional experience in power systems, Muhammad brings practical knowledge in electrical engineering 
design and analysis. His specialized research in power electronics converter topologies positions him at the forefront 
of developing efficient energy conversion systems for sustainable technologies.`,
  },
  {
    name: "Muhammad Aliyan",
    role: "Full Stack Developer | Web Developer",
    image: "/Images/Aliyan.jpeg", 
    bio: `I transform ideas into high-performance, full-stack web applications. By combining a strong foundation in backend technologies like Node.js, Django, and C++ with expertise in modern front-end frameworks like React.js, I build seamless and intelligent user experiences. My proficiency in designing data architectures with MongoDB and PostgreSQL ensures that every application is both powerful and scalable.`,
  },
];

// Short tag from the first part of the role, e.g. "Co-Founder & CEO"
const tag = (role: string) => role.split("|")[0].trim();

const ProfileModal: React.FC<{ member: TeamMember; onClose: () => void }> = ({ member, onClose }) => {
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${member.name} profile`}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl bg-white p-5 md:p-6 shadow-2xl"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close profile"
          className="absolute top-3 right-3 inline-flex items-center justify-center w-10 h-10 rounded-full text-neutral-500 hover:bg-neutral-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex flex-col sm:flex-row gap-5">
          <img
            src={member.image}
            alt={member.name}
            width={176}
            height={220}
            className="w-40 sm:w-44 aspect-[4/5] shrink-0 rounded-2xl object-cover object-top border border-neutral-200 mx-auto sm:mx-0"
          />
          <div className="min-w-0 pr-8">
            <span className="inline-block rounded-full bg-primary-50 border border-primary-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-700">
              {tag(member.role)}
            </span>
            <h3 className="mt-3 text-2xl font-bold text-ink leading-tight">{member.name}</h3>
            <p className="mt-1.5 text-sm font-medium text-primary-700 leading-snug">{member.role}</p>
          </div>
        </div>
        <div className="mt-5 pt-4 border-t border-neutral-200">
          <p className="text-[15px] text-neutral-700 leading-relaxed whitespace-pre-line">
            {/* Join hard-wrapped lines into flowing paragraphs; blank lines stay as breaks */}
            {member.bio.trim().replace(/[ \t]*\n(?!\s*\n)[ \t]*/g, " ")}
          </p>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const [open, setOpen] = useState<TeamMember | null>(null);

  const founders = teamMembers.filter((m) => m.isFounder);
  const others = teamMembers.filter((m) => !m.isFounder);

  const BioButton = ({ member, dark }: { member: TeamMember; dark?: boolean }) => (
    <button
      type="button"
      onClick={() => setOpen(member)}
      aria-haspopup="dialog"
      className={`group/bio inline-flex items-center gap-1.5 min-h-11 text-sm font-semibold cursor-pointer ${
        dark ? "text-primary-300 hover:text-primary-200" : "text-primary-700 hover:text-primary-800"
      }`}
    >
      Read bio
      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/bio:translate-x-0.5" aria-hidden="true" />
    </button>
  );

  return (
    <section className="pt-20 md:pt-24 pb-10 md:pb-14 bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Meet Our Team"
          title={<>Meet Our <span className="text-primary-600">Core Team</span></>}
          lead="A multidisciplinary team driving innovation across AI, mechanical design, civil engineering, power systems, and full-stack development. Together, we've delivered 500+ successful projects worldwide."
        />

        {/* Founders: navy feature cards */}
        <div className="grid lg:grid-cols-2 gap-5 mb-10 items-start">
          {founders.map((member) => (
            <article
              key={member.name}
              className="relative overflow-hidden rounded-3xl bg-ink text-white p-5 md:p-6 shadow-lg"
            >
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-25 blur-3xl"
                style={{ background: "radial-gradient(circle, #16a34a, transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col sm:flex-row gap-5">
                <img
                  loading="lazy"
                  src={member.image}
                  alt={member.name}
                  width={176}
                  height={220}
                  className="w-full sm:w-40 md:w-44 aspect-[4/5] shrink-0 rounded-2xl object-cover object-top ring-1 ring-white/15"
                />
                <div className="min-w-0 flex flex-col">
                  <span className="self-start rounded-full bg-primary-500/15 border border-primary-400/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-300">
                    {tag(member.role)}
                  </span>
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold leading-tight">{member.name}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{member.role}</p>
                  <div className="mt-auto pt-2">
                    <BioButton member={member} dark />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Team: portrait gallery */}
        <div className="flex items-center gap-4 mb-5">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">The Team</h3>
          <span className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-5">
          {others.map((member) => (
            <article
              key={member.name}
              className="group flex flex-col w-[calc(50%-0.5rem)] md:w-[calc((100%-2.5rem)/3)] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="relative overflow-hidden aspect-square md:aspect-[5/4] bg-neutral-100">
                <img
                  loading="lazy"
                  src={member.image}
                  alt={member.name}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary-500 to-primary-300 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </div>
              <div className="flex-1 flex flex-col items-center p-3.5 md:p-4 text-center">
                <h4 className="text-base font-bold text-ink leading-tight">{member.name}</h4>
                <p className="mt-1 text-xs font-medium text-primary-700 leading-snug">{member.role}</p>
                <div className="mt-auto"><BioButton member={member} /></div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {open && <ProfileModal member={open} onClose={() => setOpen(null)} />}
    </section>
  );
};

export default Team;
