import Navbar from "../components/navbar.tsx";
import Hero from "../components/hero.tsx";
import Services from "../components/services.tsx";
import Projects from "../components/projects.tsx";
import AboutIntro from "../components/about.tsx";
import Contact from "../components/contact.tsx";
import Footer from "../components/footer.tsx";

const HomePage: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      {/* Sections with IDs */}
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <AboutIntro />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
