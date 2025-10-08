import React from "react";
import { motion } from "framer-motion";

interface Post {
  title: string;
  content: string;
  image?: string;
  link?: string;
}

const posts: Post[] = [
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
  return (
    <section className="section-padding bg-gradient-blue-green relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-secondary-100 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary-100 rounded-full blur-3xl opacity-20 animate-pulse" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full border border-primary-200/50 mb-6">
            <span className="text-sm font-semibold text-gradient">📰 Latest News</span>
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
          >
            Recent Updates & <span className="text-primary-600 border-b-4 border-secondary-600 pb-2">Posts</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Stay updated with our latest achievements, research breakthroughs,
            and industry insights.
          </motion.p>
        </div>

        {/* Horizontal Scroll */}
        <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-primary-300 scrollbar-track-neutral-200">
          <div className="flex flex-nowrap space-x-6 pb-4">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="flex-shrink-0 w-96 card-premium p-6 text-left relative overflow-hidden group"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-primary-600 mb-3 group-hover:text-neutral-900 transition-all duration-300">
                    {post.title}
                  </h3>
                  <p className="text-neutral-700 whitespace-pre-line leading-relaxed group-hover:text-neutral-800 transition-colors duration-300">
                    {post.content}
                  </p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full mt-4 rounded-lg shadow-md"
                    />
                  )}
                  {post.link && (
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 text-primary-600 hover:text-secondary-600 font-medium transition-all duration-300"
                    >
                      🔗 Read More
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;