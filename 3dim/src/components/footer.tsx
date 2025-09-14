const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-black/80 border-t border-emerald-500/20 text-center text-gray-400">
      <p>
        © {new Date().getFullYear()} 3Dim Engineering Solutions. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
