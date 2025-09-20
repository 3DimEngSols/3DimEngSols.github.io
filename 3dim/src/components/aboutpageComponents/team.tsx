// src/components/aboutpageComponents/Team.tsx
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
at Simplicity Nigeria and DataVision. Ahmed has also been part of cutting-edge academic research at Northwestern 
Polytechnical University, where he explored AI-driven solutions for UAVs and real-time image processing.`,
  },
  {
    name: "Qasim Bin Habib",
    role: "Co-Founder | Mechanical Engineer",
    image: "/Images/Qasim.jpg",
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
    name: "Shamsher",
    role: "Mechanical Engineer | Composites & FEA Specialist",
    image: "/Images/shamsher.jpg",
    bio: `Research-oriented professional with expertise in Mechanics, Materials, Composites, 3D CAD, and Finite Element Analysis (FEA). 
With extensive certifications in CAD, FEA, and Composite Materials, Shamsher excels in developing optimized engineering solutions. 
He leverages SolidWorks for 3D CAD modeling and ABAQUS/Simulia for advanced composite modeling and performance analysis, 
turning theoretical concepts into practical, high-performance applications. His expertise spans structural mechanics, 
material science, and design optimization.`,
  },
  {
    name: "Huzaifa",
    role: "Mechanical Engineer | CAD & Multiphysics Simulation Engineer",
    image: "/Images/huzaifa1.jpeg",
    bio: `Mechanical engineer with expertise in 3D modeling using SolidWorks, Creo, and AutoCAD, combined with research experience in 
fluid mechanics and multiphase flow systems. Huzaifa applies machine learning to complex engineering problems such as two-phase flow 
analysis in piping systems. His focus is on delivering innovative mechanical solutions by integrating advanced modeling techniques 
with data-driven approaches. He brings strong skills in project planning, manufacturing, and mechanical system optimization.`,
  },
  {
    name: "Sheraz",
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
];

const Team: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-center px-6">
      <h2 className="text-4xl font-extrabold text-emerald-400 mb-12">
        Our Core Team
      </h2>
      <p className="max-w-3xl mx-auto text-gray-300 mb-16 text-lg leading-relaxed">
        Our team is a diverse collection of experts in multiple domains ranging
        from mechanical design and analysis, architectural and civil design and
        analysis to AI integration and applications. With a portfolio of 100+
        successful projects, we take pride in delivering solutions that exceed
        client expectations.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl shadow-lg transition transform hover:-translate-y-2 hover:shadow-emerald-500/40 
            ${
              member.isFounder
                ? "bg-gray-900 border-2 border-emerald-500 scale-105"
                : "bg-gray-800/50 border border-gray-700"
            }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className={`w-32 h-32 rounded-full mx-auto object-cover border-4 shadow-md ${
                member.isFounder ? "border-emerald-400" : "border-gray-600"
              }`}
            />
            <h3 className="mt-6 text-2xl font-bold text-white">
              {member.name}
            </h3>
            <p className="text-emerald-400 font-medium">{member.role}</p>

            <button
              onClick={() => toggleExpand(i)}
              className="mt-4 text-sm text-emerald-300 hover:text-emerald-200 transition"
            >
              {expandedIndex === i ? "▲ Hide Bio" : "▼ Read Bio"}
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedIndex === i ? "max-h-96 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
