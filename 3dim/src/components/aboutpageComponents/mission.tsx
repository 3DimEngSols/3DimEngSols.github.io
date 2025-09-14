const Mission: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-center px-6">
      <h2 className="text-4xl font-extrabold text-emerald-400 mb-12">
        Our Mission
      </h2>
      <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed mb-16">
        Our aim is to empower clients to achieve their goals by providing
        innovative, comprehensive, and tailored engineering solutions. We strive
        to build long-lasting relationships through our collaborative approach,
        technical expertise, and commitment to quality and excellence.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition transform hover:-translate-y-1">
          <h3 className="text-xl font-bold text-white mb-2">Engr. Ahmed Waqar Rao</h3>
          <p className="text-gray-400">
            “My goal is to pioneer sustainable engineering solutions that drive
            progress and create a lasting positive impact on the world.”
          </p>
        </div>
        <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition transform hover:-translate-y-1">
          <h3 className="text-xl font-bold text-white mb-2">Engr. Qasim Bin Habib</h3>
          <p className="text-gray-400">
            “I aspire to build a team dedicated to work for innovative and
            sustainable engineering solutions that transform industries and
            shape the future of engineering.”
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Mission;
