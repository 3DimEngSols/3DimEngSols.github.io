import React, { useEffect, useRef, useState } from "react";
import { Mail, MapPin, MessageCircle, Copy, Check, QrCode, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const EMAIL = "3dimengineeringsolutions@gmail.com";
const CHINA_NUMBER = "+86 13193302925";
const CHINA_DIGITS = "8613193302925";
const WECHAT_QR = "/Images/WeChat.jpeg";
const ADDRESS =
  "E Building, 12th Floor, Chamba District, Free Trade Center, Xi'an, Shaanxi Province, 710072, P.R. China";
const WHATSAPP_URL = `https://wa.me/${CHINA_DIGITS}?text=${encodeURIComponent(
  "Hello 3Dim Engineering Solutions, I'd like to discuss a project."
)}`;
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Free Trade Center, Chamba District, Xi'an, Shaanxi, China"
)}`;

/** Copy-to-clipboard button with visible + announced feedback. */
const CopyButton: React.FC<{ text: string; label: string }> = ({ text, label }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    const fallback = () => {
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(fallback);
    } else {
      fallback();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-full border border-white/20 text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
    >
      {copied ? <Check className="w-4 h-4 text-primary-300" /> : <Copy className="w-4 h-4" />}
      <span aria-live="polite">{copied ? "Copied" : label}</span>
    </button>
  );
};

const QrModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="WeChat QR code"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close QR code"
          className="absolute top-3 right-3 inline-flex items-center justify-center w-11 h-11 rounded-full text-neutral-600 hover:bg-neutral-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-lg font-bold text-neutral-900 pr-10 mb-3">Add us on WeChat</h3>
        <img
          src={WECHAT_QR}
          alt="WeChat QR code for 3Dim Engineering Solutions"
          className="w-full h-auto max-h-[60vh] object-contain rounded-xl border border-neutral-200"
        />
        <p className="mt-3 text-sm text-neutral-600">
          Can't scan it? Open WeChat, choose Add Contacts, and search for{" "}
          <span className="font-semibold text-neutral-900">{CHINA_NUMBER}</span>.
        </p>
      </div>
    </div>
  );
};

const cardBase =
  "flex flex-col rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur p-6 md:p-7 min-w-0";
const iconWrap =
  "inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-500/15 text-primary-300 mb-5";
const primaryBtn =
  "inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-primary-500 text-neutral-950 text-sm font-semibold hover:bg-primary-400 transition-colors duration-200 cursor-pointer";

const Contact: React.FC = () => {
  const [qrOpen, setQrOpen] = useState(false);

  const fade = (i: number) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: i * 0.08, duration: 0.5 },
  });

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-ink text-white section-padding"
    >
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute -z-10 -top-32 right-0 w-[480px] h-[480px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="eyebrow !bg-white/5 !border-white/15 !text-primary-300">Get In Touch</span>
          <motion.h2 {...fade(0)} className="section-title !text-white">
            Contact <span className="text-primary-400">Us</span>
          </motion.h2>
          <motion.p {...fade(1)} className="text-lg md:text-xl text-slate-300">
            Have questions or want to collaborate? We'd love to hear from you and discuss how we can
            help bring your ideas to life.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5 md:gap-6">
          {/* Email */}
          <motion.div {...fade(0)} className={cardBase}>
            <span className={iconWrap}>
              <Mail className="w-6 h-6" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <p className="text-slate-300 break-words mb-6">{EMAIL}</p>
            <div className="mt-auto flex flex-wrap gap-3">
              <a href={`mailto:${EMAIL}`} className={primaryBtn}>
                Send email <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <CopyButton text={EMAIL} label="Copy address" />
            </div>
          </motion.div>

          {/* WhatsApp */}
          <motion.div {...fade(1)} className={cardBase}>
            <span className={iconWrap}>
              <MessageCircle className="w-6 h-6" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
            <p className="text-slate-300 mb-6">{CHINA_NUMBER}</p>
            <div className="mt-auto flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
                Chat on WhatsApp <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <CopyButton text={CHINA_NUMBER} label="Copy number" />
            </div>
          </motion.div>

          {/* WeChat */}
          <motion.div {...fade(2)} className={cardBase}>
            <span className={iconWrap}>
              <MessageCircle className="w-6 h-6" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold mb-1">WeChat</h3>
            <p className="text-slate-300 mb-1">{CHINA_NUMBER}</p>
            <p className="text-sm text-slate-400 mb-6">
              Open WeChat, choose Add Contacts, and search this number.
            </p>
            <div className="mt-auto flex flex-wrap gap-3">
              <CopyButton text={CHINA_NUMBER} label="Copy number" />
              <button
                type="button"
                onClick={() => setQrOpen(true)}
                className={primaryBtn}
              >
                <QrCode className="w-4 h-4" aria-hidden="true" /> Show QR code
              </button>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div {...fade(3)} className={cardBase}>
            <span className={iconWrap}>
              <MapPin className="w-6 h-6" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold mb-1">Location</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">{ADDRESS}</p>
            <div className="mt-auto">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
                Open in Maps <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {qrOpen && <QrModal onClose={() => setQrOpen(false)} />}
    </section>
  );
};

export default Contact;
