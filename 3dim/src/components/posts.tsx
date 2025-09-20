// src/components/Posts.tsx
import React from "react";

interface Post {
  title: string;
  content: string;
  image?: string;
  link?: string;
}

const posts: Post[] = [
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
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-center px-6">
      <h2 className="text-4xl font-extrabold text-emerald-400 mb-8">
        Recent Updates & Posts
      </h2>

      {/* Horizontal Scroll Container */}
      <div className="max-w-6xl mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-emerald-500/60 scrollbar-track-gray-800/40">
        <div className="flex flex-nowrap space-x-6 pb-4">
          {posts.map((post, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-96 bg-gray-800/70 border border-gray-700 rounded-xl p-6 text-left shadow-lg hover:shadow-emerald-500/30 transition"
            >
              <h3 className="text-xl font-bold text-emerald-400 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                {post.content}
              </p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post image"
                  className="w-full mt-4 rounded-lg shadow-md"
                />
              )}
              {post.link && (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-emerald-400 hover:underline"
                >
                  🔗 Read More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
