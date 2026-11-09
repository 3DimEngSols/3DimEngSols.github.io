import { lazy, Suspense, useEffect } from "react";
import Navbar from "../components/navbar.tsx";
import Hero from "../components/hero.tsx";
import AboutIntro from "../components/about.tsx";
import Footer from "../components/footer.tsx";
import Proof from "../components/proof.tsx";

// Below-the-fold sections load in separate chunks, prefetched right after first paint
const loaders = {
  services: () => import("../components/services.tsx"),
  tools: () => import("../components/tools.tsx"),
  projects: () => import("../components/projects.tsx"),
  posts: () => import("../components/posts.tsx"),
  contact: () => import("../components/contact.tsx"),
};
const Services = lazy(loaders.services);
const Tools = lazy(loaders.tools);
const Projects = lazy(loaders.projects);
const Posts = lazy(loaders.posts);
const Contact = lazy(loaders.contact);

// Keeps layout height stable while a section's chunk loads
const Placeholder = () => <div className="min-h-[70vh]" aria-hidden="true" />;

const HomePage: React.FC = () => {
  useEffect(() => {
    const t = setTimeout(() => Object.values(loaders).forEach((load) => load()), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-neutral-50 text-neutral-900">
      <Navbar />
      <Hero />
      <Proof />
      {/* Sections with IDs */}
      <div id="about">
        <AboutIntro />
      </div>
      <div id="services">
        <Suspense fallback={<Placeholder />}><Services /></Suspense>
      </div>
      <div id="tools">
        <Suspense fallback={<Placeholder />}><Tools /></Suspense>
      </div>

      <div id="projects">
        <Suspense fallback={<Placeholder />}><Projects /></Suspense>
      </div>
      
      <div id="posts">
        <Suspense fallback={<Placeholder />}><Posts /></Suspense> {/* ✅ new section */}
      </div>
      <div id="contact">
        <Suspense fallback={<Placeholder />}><Contact /></Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
