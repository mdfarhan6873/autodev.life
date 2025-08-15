'use client';

const Footer = () => {
  const footerLinks = [
    'Pricing',
    'Blog', 
    'Documentation',
    'Help Center',
    'Careers',
    'Terms',
    'Privacy'
  ];

  return (
    <footer className="relative bg-black border-t border-gray-800/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-4 md:mb-0">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-gray-300 text-sm transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* StackBlitz Logo */}
          <div className="flex items-center space-x-2">
            
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">⚡</span>
              <span className="text-white font-semibold">autodev.life</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;