const projects = [
  { title: "Mechanical Design", desc: "Innovative mechanical systems with high efficiency.", img: "/projects/mechanical.jpg" },
  { title: "AI Robotics", desc: "Smart robotics powered by AI.", img: "/projects/ai-robotics.jpg" },
  { title: "Civil Design", desc: "Modern architectural & civil solutions.", img: "/projects/civil.jpg" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-12 text-green-400">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-300">{p.title}</h3>
              <p className="mt-4 text-gray-300">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
