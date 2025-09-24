const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gradient-to-br from-blue-50 via-white to-green-50 text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-secondary-300/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="border-t border-gradient-to-r from-primary-400/30 via-secondary-400/30 to-primary-400/30 pt-8">
          <div className="flex flex-col items-center gap-4">
            {/* Logo + name */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center border border-secondary-400 shadow-sm">
                <span className="text-white font-bold text-sm">3D</span>
              </div>
              <span className="text-xl font-bold text-primary-700">
                3Dim Engineering Solutions
              </span>
            </div>

            {/* Copyright */}
            <p className="text-neutral-600">
              © {new Date().getFullYear()} 3Dim Engineering Solutions. All rights reserved.
            </p>

            {/* Tagline */}
            <div className="flex flex-wrap justify-center gap-2 text-neutral-500 text-sm">
              <span>Leading Engineering Excellence</span>
              <span>•</span>
              <span>Innovation & Precision</span>
              <span>•</span>
              <span>Global Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
