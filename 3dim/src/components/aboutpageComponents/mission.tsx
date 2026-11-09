import { Quote } from "lucide-react";
import SectionHeader from "../SectionHeader.tsx";

const quotes = [
  {
    name: "Engr. Ahmed Waqar Rao",
    text: "My goal is to pioneer sustainable engineering solutions that drive progress and create a lasting positive impact on the world.",
  },
  {
    name: "Engr. Qasim Bin Habib",
    text: "I aspire to build a team dedicated to work for innovative and sustainable engineering solutions that transform industries and shape the future of engineering.",
  },
];

const Mission: React.FC = () => (
  <section className="section-padding bg-neutral-50">
    <div className="container-custom">
      <SectionHeader
        eyebrow="Our Mission"
        title={<>Our <span className="text-primary-600">Mission</span></>}
        lead="Our aim is to empower clients to achieve their goals by providing innovative, comprehensive, and tailored engineering solutions. We strive to build long-lasting relationships through our collaborative approach, technical expertise, and commitment to quality and excellence."
      />
      <div className="grid md:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto">
        {quotes.map((q) => (
          <figure
            key={q.name}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <Quote className="w-7 h-7 text-primary-500 mb-3" aria-hidden="true" />
            <blockquote className="text-base text-neutral-700 leading-relaxed">"{q.text}"</blockquote>
            <figcaption className="mt-4 text-sm font-bold text-ink">{q.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Mission;
