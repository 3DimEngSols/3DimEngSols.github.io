import Navbar from "../components/navbar.tsx";
import Team from "../components/aboutpageComponents/team.tsx";
import Mission from "../components/aboutpageComponents/mission.tsx";
import Footer from "../components/footer.tsx";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Team />
      <Mission />
      <Footer />
    </div>
  );
};

export default AboutPage;