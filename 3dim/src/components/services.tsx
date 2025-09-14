const services = [
  {
    title: "Technical Consultation",
    desc: "Expert support in mechanics, structures, electronics, AI, and more.",
  },
  {
    title: "Technical Documentation",
    desc: "Professional reports, patents, and white papers.",
  },
  {
    title: "End-to-End Solutions",
    desc: "From problem analysis to complete industrial deployment.",
  },
  {
    title: "Product R&D & Deployment",
    desc: "Hardware & software solutions with market readiness.",
  },
  {
    title: "Graphics & Product Animation",
    desc: "3D product visuals, animations, posters, and branding.",
  },
  {
    title: "Web & Full-Stack Development",
    desc: "Modern websites, apps, and backend systems.",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-center"
    >
      <h2 className="text-4xl font-extrabold text-emerald-400 mb-12">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-gray-800/50 border border-gray-700 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold text-white">{s.title}</h3>
            <p className="mt-3 text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
