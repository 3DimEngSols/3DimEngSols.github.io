import React from "react";
import { ArrowUpRight } from "lucide-react";
import HorizontalScroller from "./HorizontalScroller.tsx";
import SectionHeader from "./SectionHeader.tsx";

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

const Posts: React.FC = () => (
  <HorizontalScroller
    label="Recent posts"
    perView={1.5}
    minHeight="md:min-h-[clamp(360px,calc(100svh-218px),560px)]"
    header={
      <SectionHeader
        compact
        hideLeadOnShort
        eyebrow="Latest News"
        title={<>Recent Updates & <span className="text-primary-600">Posts</span></>}
        lead="Stay updated with our latest achievements, research breakthroughs, and industry insights."
      />
    }
  >
    {posts.map((post, i) => (
      <article
        key={i}
        data-card
        className={`card-premium snap-start shrink-0 w-[var(--card-w)] ${post.image ? "" : "md:w-[calc(var(--card-w)*0.6)]"} p-5 md:p-4 lg:p-5 flex flex-col text-left`}
      >
        {/* Cards with a paper cover: text beside the image on tablet/desktop, so the card stays short */}
        <div className={post.image ? "md:grid md:grid-cols-[1fr_1.05fr] md:gap-5 flex-1" : "flex-1"}>
          <div>
            <h3 className="text-base md:text-[15px] font-bold text-neutral-900 mb-1.5 leading-snug">
              {post.title.replace(/^#\s*/, "").trim()}
            </h3>
            {post.journal && (
              <p className="text-xs font-semibold text-primary-700 mb-1.5">Publication: {post.journal}</p>
            )}
            <p className="text-sm md:text-[13.5px] md:leading-[1.55] text-neutral-600 leading-relaxed whitespace-pre-line">
              {post.content}
            </p>
          </div>
          {post.image && (
            <a
              href={post.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open full-size cover: ${post.title}`}
              className="mt-3 md:mt-0 h-56 md:h-auto md:min-h-[260px] block rounded-lg border border-neutral-200 bg-white overflow-hidden transition-shadow duration-200 hover:shadow-md"
            >
              <img
                src={post.image}
                alt={`Cover of: ${post.title}`}
                loading="lazy"
                width={600}
                height={256}
                className="w-full h-full object-contain"
              />
            </a>
          )}
        </div>
        {post.link && (
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 min-h-11 md:min-h-8 text-sm font-semibold text-primary-700 hover:text-primary-800"
          >
            Read More <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        )}
      </article>
    ))}
  </HorizontalScroller>
);

export default Posts;
