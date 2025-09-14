const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-black via-gray-900 to-emerald-950 text-white px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-emerald-400 drop-shadow-lg">
        WE MAKE YOUR IMAGINATION A REALITY
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed">
        From research consultancy to full-scale engineering solutions, we bring
        innovation, precision, and creativity into every project.
      </p>
      <div className="mt-10 flex space-x-6">
        <a
          href="#services"
          className="px-6 py-3 bg-emerald-500 text-black font-semibold rounded-xl shadow-lg hover:bg-emerald-400 transition"
        >
          Explore Services
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-emerald-400 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-400 hover:text-black transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Hero;
