import { Link } from "react-router-dom";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { useSectionNav } from "./useSectionNav.ts";

const Footer: React.FC = () => {
  const goToSection = useSectionNav();
  const linkCls =
    "inline-flex items-center min-h-11 text-slate-300 hover:text-primary-300 transition-colors duration-200 cursor-pointer";

  return (
    <footer className="relative isolate overflow-hidden bg-[#070c18] text-slate-300">
      <div className="hero-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="container-custom pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1.4fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">3D</span>
              </div>
              <span className="text-xl font-bold text-white">3Dim Engineering Solutions</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Leading engineering excellence through innovation and precision, with global solutions
              from Xi'an, China.
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-3">Explore</h3>
            <ul>
              <li>
                <button onClick={() => goToSection("services")} className={linkCls}>Services</button>
              </li>
              <li>
                <button onClick={() => goToSection("projects")} className={linkCls}>Projects</button>
              </li>
              <li>
                <Link to="/tools" className={linkCls}>Buy tools</Link>
              </li>
              <li>
                <Link to="/about" className={linkCls}>Our Team</Link>
              </li>
              <li>
                <button onClick={() => goToSection("contact")} className={linkCls}>Contact</button>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-3">Contact</h3>
            <ul className="space-y-1">
              <li>
                <a href="mailto:3dimengineeringsolutions@gmail.com" className={`${linkCls} gap-3 break-all`}>
                  <Mail className="w-4 h-4 shrink-0 text-primary-400" aria-hidden="true" />
                  3dimengineeringsolutions@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8613193302925"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkCls} gap-3`}
                >
                  <MessageCircle className="w-4 h-4 shrink-0 text-primary-400" aria-hidden="true" />
                  WhatsApp / WeChat: +86 13193302925
                </a>
              </li>
              <li className="flex items-start gap-3 py-2 text-slate-400">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-primary-400" aria-hidden="true" />
                <span>
                  E Building, 12th Floor, Chamba District, Free Trade Center, Xi'an, Shaanxi Province,
                  710072, P.R. China
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} 3Dim Engineering Solutions. All rights reserved.</p>
          <p>Leading Engineering Excellence · Innovation & Precision · Global Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
