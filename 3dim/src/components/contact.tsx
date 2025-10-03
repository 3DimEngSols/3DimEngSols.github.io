import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <Mail className="w-8 h-8 text-primary-600" />,
    title: "Email",
    value: "3dimengineeringsolutions@gmail.com",
    color: "primary",
    link: "mailto:3dimengineeringsolutions@gmail.com",
  },
  {
    icon: <Phone className="w-8 h-8 text-secondary-600" />,
    title: "Phone/WeChat",
    value: "+86 17792251931",
    color: "secondary",
    link: "tel:+8617792251931",
  },
  {
    icon: <MapPin className="w-8 h-8 text-primary-600" />,
    title: "Location",
    value:
      "E Building, 12th Floor, Chanba District, Free Trade Center, Xi'an, Shaanxi Province, 710072, P.R. China",
    color: "primary",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-green-600" />,
    title: "WeChat",
    value: "Scan QR to Connect",
    color: "primary",
    qr: "/Images/WeChat.jpeg", // ✅ QR code image path
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-green-600" />,
    title: "WhatsApp",
    value: "+86 17792251931",
    color: "secondary",
    link: "https://wa.me/8617792251931",
  },
];

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="section-padding bg-gradient-professional relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-secondary-100 rounded-full blur-3xl opacity-30 animate-pulse" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full border border-primary-200/50 mb-6">
            <span className="text-sm font-semibold text-gradient">
              📞 Get In Touch
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
          >
            Contact{" "}
            <span className="text-primary-600 border-b-4 border-secondary-600 pb-2">
              Us
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Have questions or want to collaborate? We'd love to hear from you
            and discuss how we can help bring your ideas to life.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, i) => {
            const Wrapper = info.link ? motion.a : motion.div;

            return (
              <Wrapper
                key={i}
                href={info.link || undefined}
                target={info.link ? "_blank" : undefined}
                rel={info.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="card-premium p-8 flex flex-col items-center text-center relative overflow-hidden group"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    info.color === "primary"
                      ? "bg-gradient-to-br from-primary-50/50 to-primary-100/50"
                      : "bg-gradient-to-br from-secondary-50/50 to-secondary-100/50"
                  }`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
                      info.color === "primary"
                        ? "bg-gradient-to-r from-primary-100 to-primary-200"
                        : "bg-gradient-to-r from-secondary-100 to-secondary-200"
                    }`}
                  >
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-all duration-300">
                    {info.title}
                  </h3>
                  <p className="text-neutral-600 text-sm group-hover:text-neutral-700 transition-colors duration-300">
                    {info.value}
                  </p>
                  {info.qr ? (
                    <img
                      src={info.qr}
                      alt="WeChat QR"
                      className="w-32 h-32 mx-auto mt-4 rounded-lg shadow-md border"
                    />
                  ) : (
                    info.link && (
                      <span className="text-sm text-primary-600 underline mt-4 inline-block">
                        Open Link
                      </span>
                    )
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
