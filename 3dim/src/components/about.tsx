import React from "react";
import SectionHeader from "./SectionHeader.tsx";

const AboutIntro: React.FC = () => (
  <section className="pt-6 pb-5 md:pt-8 md:pb-6 bg-white">
    <div className="container-custom max-w-3xl">
      <SectionHeader
        compact
        keepEyebrow
        eyebrow="About Our Company"
        title={<>About <span className="text-primary-600">Us</span></>}
        lead="We are a team of experienced engineers, united by a shared passion for delivering exceptional engineering solutions. Our unique blend of skills and expertise enables us to tackle complex projects from multiple angles, ensuring comprehensive and innovative results."
      />
    </div>
  </section>
);

export default AboutIntro;
