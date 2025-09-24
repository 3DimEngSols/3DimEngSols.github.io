const Mission: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-blue-green relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-secondary-100 rounded-full blur-3xl opacity-20 animate-pulse" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full border border-primary-200/50 mb-6">
            <span className="text-sm font-semibold text-gradient">🎯 Our Mission</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Our <span className="text-primary-600 border-b-4 border-secondary-600 pb-2">Mission</span>
          </h2>
          <p className="max-w-4xl mx-auto text-xl text-neutral-600 leading-relaxed">
            Our aim is to empower clients to achieve their goals by providing
            innovative, comprehensive, and tailored engineering solutions. We strive
            to build long-lasting relationships through our collaborative approach,
            technical expertise, and commitment to quality and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card-premium p-8 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-all duration-300">Engr. Ahmed Waqar Rao</h3>
              <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                "My goal is to pioneer sustainable engineering solutions that drive
                progress and create a lasting positive impact on the world."
              </p>
            </div>
          </div>
          <div className="card-premium p-8 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-all duration-300">Engr. Qasim Bin Habib</h3>
              <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                "I aspire to build a team dedicated to work for innovative and
                sustainable engineering solutions that transform industries and
                shape the future of engineering."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
