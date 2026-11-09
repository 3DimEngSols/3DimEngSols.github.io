import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Post {
  title: string;
  content: string;
  image?: string;
  journal?: string;
  link?: string;
}

const posts: Post[] = [
  {
    title: "Recent advances in chitosan-based active composites for sustainable food packaging and preservation",
    journal: "Journal of Reinforced Plastics and Composites",
    content: `This review examines how chitosan-based packaging can progress toward practical industrial use. It covers biopolymer blending, chemical cross-linking and bioactive fillers, and how these strategies affect mechanical strength, barrier properties and antimicrobial performance for preserving produce, meat and seafood.

It also addresses the barriers to commercial adoption, including moisture sensitivity, brittleness, processing constraints and regulatory concerns over nanoparticle migration.`,
    image: "/Images/paper-chitosan-packaging.jpg",
    link: "https://www.linkedin.com/posts/3dim-engineering-solutions_advancing-sustainablepackaging-chitosan-activity-7521381093661671425-C3RZ",
  },
  {
    title: "Numerical modelling of pull forces considering the pipe–soil interaction in pipe bursting for trenchless replacement",
    journal: "Canadian Geotechnical Journal",
    content: `This study develops a material-specific numerical model that predicts the pulling forces required for trenchless pipe replacement, distinguishing brittle concrete fracture from ductile high-density polyethylene deformation.

Validated on two DN300 field projects in Xinjiang, China, the model reduced prediction error by up to 31.37% for concrete pipes and 45.49% for HDPE pipes.`,
    image: "/Images/paper-pipe-bursting.jpg",
    link: "https://www.linkedin.com/posts/3dim-engineering-solutions_advancing-civilengineering-geotechnicalengineering-activity-7522535301420990464-5Ip-",
  },
  {
    title: "Asymmetric Effect of Transport Infrastructure Investment on Economic Development: A Quantile Regression and Wavelet Analysis of China and Oman",
    journal: "Industrial Engineering and Management Systems",
    content: `This study uses quantile regression, quantile causality and wavelet coherence analysis to investigate how transport infrastructure affects economic growth across development stages.

It finds asymmetric, time-varying effects: China shows a strong and steady response to infrastructure investment, while Oman's effects depend on urbanization, energy use and foreign direct investment.`,
    image: "/Images/paper-transport-infrastructure.jpg",
    link: "https://www.linkedin.com/posts/3dim-engineering-solutions_advancing-activity-7415239424172822529-CpZ9",
  },
  {
    title: "Biomechanical Evaluation of Implant Materials and Connection Designs – Published in Odontology 🦷📖",
    content: `We are delighted to announce the publication of our latest research paper titled 
“Biomechanical Evaluation of Implant Materials and Connection Designs: A Structured Narrative Review of Titanium and Zirconia” 
in *Odontology (Springer)*.  

This study explores the biomechanical performance, stress distribution, and connection design behavior 
of titanium and zirconia implants using finite element analysis (FEA).  

Conducted at 3Dim Engineering Solutions, the research highlights our commitment to advancing biomedical 
engineering, material science, and clinical innovation for long-term success.`,
    link: "https://lnkd.in/g7m8Ta7u",
  },
    {
    title: "🚀 Proud Moment for 3Dim Engineering Solutions! 🚀",
    content: `We are excited to announce our representation at 
The AI Summit held at the Javits Center, New York, USA 🇺🇸 (Dec 11-13, 2024).  

✨ Key Highlight: Launch of our innovative AI-driven NLP tool that automates technical processes!  

Features:  
🔹 Converts text to technical specifications instantly  
🔹 Boosts productivity  
🔹 Smart optimization capabilities  
🔹 Developer-friendly assistant  

👏 Special thanks to our team members for their role in this achievement.`,
    link: "https://www.linkedin.com/posts/3dim-engineering-solutions_3dimengineeringsolutions-ai-aiautomation-activity-7299635743876882433-VR0K?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIRLXUBNqn3izflLuzBbOK4tfkiIaZbzYE",
  },
  {
    title: "Achieving Excellence in Research and Collaboration 📚🌍",
    content: `We are proud to announce the publication of our recent work titled 
"An Explainable Machine Learning (XML) Approach" 
in a prestigious academic journal. 

This accomplishment is the result of the dedication and hard work of our team at 3Dim Engineering Solutions, 
committed to pushing the boundaries of technology and innovation.`,
    link: "https://www.linkedin.com/posts/3dim-engineering-solutions_an-explainable-machine-learning-xml-approach-activity-7307786878848483331-Sjd8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIRLXUBNqn3izflLuzBbOK4tfkiIaZbzYE",
    // image:'/Images/post1.jpg'
  },
  {
    title: " Excellence Driven by Our Expert Team",
    content: `We are thrilled to announce the successful completion of several high-profile initiatives. 
Our firm continues to deliver innovative solutions across various domains, ensuring outstanding results.

Highlights:
- Advanced materials modeling operations
- Current testing applications using ML & signal processing  
- Automated measurement and detection systems
- Multi-agent optimization via advanced learning methods

At 3Dim Engineering Solutions, we thrive on innovation and collaboration.`,
    link:'https://www.linkedin.com/posts/3dim-engineering-solutions_projectsuccess-engineeringsolutions-numericalmodeling-activity-7254742901249716226-p4ok?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIRLXUBNqn3izflLuzBbOK4tfkiIaZbzYE'
  },
  
  {
    title: "# Achieving Excellence in Research and Collaboration 📚🌍",
    content: `We are excited to share that our recent work has been officially published in 
a prestigious academic journal.  

Our approach applies *explainable machine learning* to enhance technical practices. 
This milestone reflects our dedication to combining engineering with AI-driven innovation.`,
link:'https://www.linkedin.com/posts/3dim-engineering-solutions_achieving-civilengineering-machinelearning-activity-7314894150116560898-ZL7_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIRLXUBNqn3izflLuzBbOK4tfkiIaZbzYE'
  },
  {
    title: "# Research Excellence and Sustainable Innovation 📚🌍",
    content: `We are proud to announce the publication of our recent work 
in a leading technical journal.  

This publication highlights our mission at 3Dim Engineering Solutions: integrating 
machine learning and innovative materials to advance sustainable solutions.`,
    link: "https://www.linkedin.com/posts/3dim-engineering-solutions_toward-transparent-ai-predicting-strength-activity-7361597199081701376-xhUK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIRLXUBNqn3izflLuzBbOK4tfkiIaZbzYE",
  },
  {
    title: "Collaboration Opportunity 🤝",
    content: `We are exploring innovative applications of computer vision models 
on edge computing platforms.  

We are inviting collaborators for an exciting technical initiative involving 
UAV-based applications and resource-constrained devices.  

If interested in partnership opportunities, let's connect.`,
link:'https://www.linkedin.com/posts/3dim-engineering-solutions_title-optimizing-real-time-precision-spraying-activity-7339871924308627456-mtZH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIRLXUBNqn3izflLuzBbOK4tfkiIaZbzYE'
  },
];

const Posts: React.FC = () => {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("article");
    const step = card ? card.getBoundingClientRect().width + 24 : 360;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const arrow =
    "inline-flex items-center justify-center w-12 h-12 rounded-full border border-neutral-300 bg-white text-neutral-800 shadow-soft hover:border-primary-500 hover:text-primary-700 transition-colors duration-200 cursor-pointer";

  return (
    <section className="section-padding bg-gradient-blue-green relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-3xl">
            <span className="eyebrow">Latest News</span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Recent Updates & <span className="text-primary-600">Posts</span>
            </motion.h2>
            <p className="text-lg md:text-xl text-neutral-600">
              Stay updated with our latest achievements, research breakthroughs, and industry insights.
            </p>
          </div>
          <div className="hidden md:flex gap-3 shrink-0">
            <button type="button" onClick={() => scrollByCard(-1)} aria-label="Previous posts" className={arrow}>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button type="button" onClick={() => scrollByCard(1)} aria-label="Next posts" className={arrow}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div
          ref={scroller}
          tabIndex={0}
          aria-label="Recent posts, scroll horizontally"
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-thin"
        >
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i, 4) * 0.06, duration: 0.5 }}
              className="snap-start shrink-0 w-[85vw] sm:w-96 card-premium p-6 flex flex-col text-left"
            >
              <h3 className="text-lg font-bold text-neutral-900 mb-3 leading-snug">
                {post.title.replace(/^#\s*/, "").trim()}
              </h3>
              {post.journal && (
                <p className="text-sm font-semibold text-primary-700 mb-3">
                  Publication: {post.journal}
                </p>
              )}
              <p className="text-neutral-600 whitespace-pre-line leading-relaxed">{post.content}</p>
              {post.image && (
                <div className="mt-4 h-56 rounded-xl border border-neutral-200 bg-white overflow-hidden">
                  <img
                    src={post.image}
                    alt={`Cover of: ${post.title}`}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              {post.link && (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-5 inline-flex items-center gap-1.5 font-semibold text-primary-700 hover:text-secondary-700 transition-colors duration-200 min-h-11"
                >
                  Read More <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
