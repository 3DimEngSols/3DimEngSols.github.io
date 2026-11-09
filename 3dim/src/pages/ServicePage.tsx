import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageCircle, Mail } from "lucide-react";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import { categories, getService, services } from "../data/services.tsx";

const SITE_TITLE = "3Dim Engineering Solutions";

const ServicePage: React.FC = () => {
  const { slug } = useParams();
  const service = getService(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.title = service ? `${service.title} | ${SITE_TITLE}` : SITE_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    const prev = meta?.getAttribute("content") ?? "";
    if (service && meta) meta.setAttribute("content", service.description.slice(0, 160));
    return () => {
      document.title = SITE_TITLE;
      if (meta) meta.setAttribute("content", prev);
    };
  }, [service]);

  if (!service) {
    return (
      <div className="bg-neutral-50 min-h-screen">
        <Navbar />
        <section className="section-padding pt-32 text-center container-custom">
          <h1 className="section-title">Service not found</h1>
          <Link to="/" className="inline-flex items-center gap-2 font-semibold text-primary-700 min-h-11">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to home
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;
  const category = categories.find((c) => c.id === service.category);
  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug);

  return (
    <div className="bg-neutral-50 text-neutral-900">
      <Navbar />

      <header className="relative isolate overflow-hidden bg-ink text-white pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div className="container-custom max-w-4xl">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 min-h-11 text-sm font-semibold text-slate-300 hover:text-primary-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> All services
          </Link>
          <span className="mt-4 flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-500/15 text-primary-300">
            <Icon className="w-7 h-7" aria-hidden="true" />
          </span>
          <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-primary-300">
            {category?.label}
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            {service.title}
          </h1>
        </div>
      </header>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <p className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-3xl">
            {service.description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/8613193302925?text=${encodeURIComponent(
                `Hello 3Dim Engineering Solutions, I'd like to discuss: ${service.title}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" /> Discuss on WhatsApp
            </a>
            <a
              href={`mailto:3dimengineeringsolutions@gmail.com?subject=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-neutral-300 bg-white font-semibold text-neutral-800 hover:border-primary-500 hover:text-primary-700 transition-colors cursor-pointer"
            >
              <Mail className="w-5 h-5" aria-hidden="true" /> Send an email
            </a>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-5">Related services</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={`/services/${r.slug}`}
                      className="card-premium flex items-center justify-between gap-4 p-5 min-h-11 font-semibold"
                    >
                      {r.title}
                      <ArrowRight className="w-4 h-4 shrink-0 text-primary-600" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
