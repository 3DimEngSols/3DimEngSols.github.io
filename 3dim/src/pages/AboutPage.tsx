import Navbar from "../components/navbar.tsx";
import Team from "../components/aboutpageComponents/team.tsx";
import Mission from "../components/aboutpageComponents/mission.tsx";
import Footer from "../components/footer.tsx";
import { useEffect } from "react";

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "Our Team | 3Dim Engineering Solutions";
    return () => {
      document.title = "3Dim Engineering Solutions";
    };
  }, []);

  return (
    <div className="bg-neutral-50 text-neutral-900">
      <Navbar />
      <Team />
      <Mission />
      <Footer />
    </div>
  );
};

export default AboutPage;