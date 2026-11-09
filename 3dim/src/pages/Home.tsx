import Navbar from "../components/navbar.tsx";
import Hero from "../components/hero.tsx";
import Proof from "../components/proof.tsx";
import AboutIntro from "../components/about.tsx";
import Services from "../components/services.tsx";
import Tools from "../components/tools.tsx";
import Projects from "../components/projects.tsx";
import Posts from "../components/posts.tsx";
import Contact from "../components/contact.tsx";
import Footer from "../components/footer.tsx";

const HomePage: React.FC = () => (
  <div className="bg-neutral-50 text-neutral-900">
    <Navbar />
    <Hero />
    <Proof />
    <div id="about"><AboutIntro /></div>
    <div id="services"><Services /></div>
    <div id="tools"><Tools /></div>
    <div id="projects"><Projects /></div>
    <div id="posts"><Posts /></div>
    <div id="contact"><Contact /></div>
    <Footer />
  </div>
);

export default HomePage;
