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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const founders = teamMembers.filter((m) => m.isFounder);
  const others = teamMembers.filter((m) => !m.isFounder);

  return (
    <section className="section-padding bg-gradient-professional relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-secondary-100 rounded-full blur-3xl opacity-20 animate-pulse" />
      
      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 mt-10">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full border border-primary-200/50 mb-6">
            <span className="text-sm font-semibold text-gradient">👥 Meet Our Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Meet Our <span className="text-primary-600 border-b-4 border-secondary-600 pb-2">Core Team</span>
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-neutral-600 leading-relaxed">
            A multidisciplinary team driving innovation across AI, mechanical design,
            civil engineering, power systems, and full-stack development.
            Together, we've delivered 100+ successful projects worldwide.
          </p>
        </div>

        {/* Founders Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center text-primary-600 mb-10 border-b-2 border-secondary-600 pb-2 inline-block">
            Our Founders
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {founders.map((member, i) => (
              <div
                key={i}
                className="relative card-premium p-8 hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-36 h-36 rounded-full object-cover border-4 border-secondary-500 shadow-md mb-6 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <button
                    onClick={() => toggleExpand(i)}
                    className="text-sm text-primary-600 hover:text-secondary-600 font-semibold transition-colors mb-4"
                  >
                    {expandedIndex === i ? "▲ Hide Bio" : "▼ Read Bio"}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedIndex === i ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="text-neutral-700 text-sm leading-relaxed whitespace-pre-line">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rest of Team */}
        <div>
          <h3 className="text-2xl font-semibold text-center text-primary-600 mb-10 border-b-2 border-secondary-600 pb-2 inline-block">
            Our Team
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((member, i) => (
              <div
                key={i}
                className="card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-2 border-secondary-300 shadow mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <button
                    onClick={() => toggleExpand(i + founders.length)}
                    className="text-xs text-primary-600 hover:text-secondary-600 font-semibold transition-colors mb-3"
                  >
                    {expandedIndex === i + founders.length
                      ? "▲ Hide Bio"
                      : "▼ Read Bio"}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedIndex === i + founders.length
                        ? "max-h-64"
                        : "max-h-0"
                    }`}
                  >
                    <p className="text-neutral-600 text-xs leading-relaxed whitespace-pre-line">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;