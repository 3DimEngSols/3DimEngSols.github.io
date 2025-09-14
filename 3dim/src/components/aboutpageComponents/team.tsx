interface TeamMember {
  name: string;
  role: string;
}

const team: TeamMember[] = [
  { name: "Qasim Bin Habib", role: "Mechanical Engineer" },
  { name: "Ahmed Waqar Rao", role: "Computer Engineer" },
  { name: "Muhammad Yousuf Elsa / Eisa", role: "Robotics and AI Engineer" },
  { name: "Muhammad Raza", role: "Civil Engineer" },
];

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-black text-center px-6 text-white">
      <h2 className="text-4xl font-bold text-green-400 mb-12">Our Core Team</h2>
      <p className="max-w-3xl mx-auto text-gray-300 mb-12">
        Our team is a diverse collection of experts in multiple domains ranging from mechanical design and analysis,
        architectural and civil design, to AI integration and applications. With more than 100+ successful engineering projects
        and 100% satisfied clients, we bring imagination to reality.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {team.map((member, i) => (
          <div
            key={i}
            className="p-6 bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-green-300">{member.name}</h3>
            <p className="mt-2 text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Co-Founders */}
      <div className="mt-16 max-w-4xl mx-auto text-left space-y-8">
        <h3 className="text-3xl font-bold text-green-400 text-center">Co-Founders</h3>

        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          <p className="italic text-gray-300">“I aspire to build a team dedicated to work for innovative and sustainable engineering solutions that transform industries and shape the future of engineering.”</p>
          <p className="mt-4 font-semibold text-green-300">Engr. Qasim Bin Habib</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          <p className="italic text-gray-300">“My goal is to pioneer sustainable engineering solutions that drive progress and create a lasting positive impact on the world.”</p>
          <p className="mt-4 font-semibold text-green-300">Engr. Ahmed Waqar Rao</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
