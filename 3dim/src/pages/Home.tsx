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
      <Services />
      <Projects />
      <AboutIntro />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
