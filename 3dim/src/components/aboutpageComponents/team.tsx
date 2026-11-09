// src/components/aboutpageComponents/Team.tsx
import SectionHeader from "../SectionHeader.tsx";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

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

const Team: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (name: string) => setExpanded(expanded === name ? null : name);

  const founders = teamMembers.filter((m) => m.isFounder);
  const others = teamMembers.filter((m) => !m.isFounder);

  const BioToggle = ({ name }: { name: string }) => (
    <button
      type="button"
      onClick={() => toggle(name)}
      aria-expanded={expanded === name}
      className="inline-flex items-center gap-1 min-h-11 text-sm font-semibold text-primary-700 hover:text-primary-800 cursor-pointer"
    >
      {expanded === name ? "Hide bio" : "Read bio"}
      <ChevronDown
        className={`w-4 h-4 transition-transform duration-200 ${expanded === name ? "rotate-180" : ""}`}
        aria-hidden="true"
      />
    </button>
  );

  const Bio = ({ member }: { member: (typeof teamMembers)[number] }) =>
    expanded === member.name ? (
      <p className="mt-1 text-sm text-neutral-600 leading-relaxed whitespace-pre-line">{member.bio}</p>
    ) : null;

  return (
    <section className="pt-20 md:pt-24 pb-10 md:pb-14 bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Meet Our Team"
          title={<>Meet Our <span className="text-primary-600">Core Team</span></>}
          lead="A multidisciplinary team driving innovation across AI, mechanical design, civil engineering, power systems, and full-stack development. Together, we've delivered 100+ successful projects worldwide."
        />

        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">Our Founders</h3>
        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-10 items-start">
          {founders.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  loading="lazy"
                  src={member.image}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-2xl object-cover border border-neutral-200"
                />
                <div className="min-w-0">
                  <h4 className="text-xl font-bold text-ink leading-tight">{member.name}</h4>
                  <p className="mt-1 text-sm font-medium text-primary-700">{member.role}</p>
                  <BioToggle name={member.name} />
                </div>
              </div>
              <Bio member={member} />
            </article>
          ))}
        </div>

        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">Our Team</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {others.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <img
                  loading="lazy"
                  src={member.image}
                  alt={member.name}
                  width={72}
                  height={72}
                  className="w-16 h-16 shrink-0 rounded-xl object-cover border border-neutral-200"
                />
                <div className="min-w-0">
                  <h4 className="text-base font-bold text-ink leading-tight">{member.name}</h4>
                  <p className="mt-0.5 text-xs font-medium text-primary-700 leading-snug">{member.role}</p>
                </div>
              </div>
              <BioToggle name={member.name} />
              <Bio member={member} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
