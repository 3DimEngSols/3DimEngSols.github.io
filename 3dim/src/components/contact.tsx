// src/components/contact.tsx
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-center px-6"
    >
      <h2 className="text-4xl font-extrabold text-emerald-400 mb-12">
        Contact Us
      </h2>
      <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
        <p className="text-lg">
          Have questions or want to collaborate? Reach out to us!
        </p>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <Mail className="text-emerald-400" />
            <span>info@3dimengineering.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-emerald-400" />
            <span>+86 17792251931 </span>
          </div>
          <div className="flex items-start gap-3 max-w-md text-center md:text-left">
            <MapPin className="text-emerald-400 mt-1" />
            <span>
              E Building, 12th Floor, Chanba District, Free Trade Center, Xi’an,  
              Shaanxi Province, 710072, P.R. China
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
