const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-center px-6"
    >
      <h2 className="text-4xl font-extrabold text-emerald-400 mb-8">
        Contact Us
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-6">
        Let’s talk about how we can turn your ideas into reality. Contact us for
        a free appointment.
      </p>
      <div className="text-gray-400 space-y-2">
        <p>📧 3dimengineeringsolutions@gmail.com</p>
        <p>📱 +86 117 9225 1931 (China)</p>
        <p>💬 WeChat Available</p>
      </div>
    </section>
  );
};

export default Contact;
