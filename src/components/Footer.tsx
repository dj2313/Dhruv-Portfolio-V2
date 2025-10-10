import { Code2, Heart, Mail, MapPin, Github, Linkedin, ArrowUp, Sparkles } from 'lucide-react';
import Background from './shared/Background';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Mobile Development', icon: '📱' },
    { name: 'Web Development', icon: '🌐' },
    { name: 'Full-Stack Solutions', icon: '⚡' },
    { name: 'System Architecture', icon: '🏗️' }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/dj2313", label: "GitHub", color: "hover:bg-gray-700 hover:text-white" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/trivedi-dhruv127/", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" }
  ];


  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Background />
      </div>
      {/* Background Effects removed in favor of shared Background component */}

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-2 py-8 sm:py-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg sm:text-base font-bold">Dhruv Trivedi</span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed max-w-md text-sm">
                Passionate about creating innovative digital solutions that make a difference. Transforming ideas into powerful applications with clean code and modern technologies.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 mb-2 text-xs">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-red-500 fill-current" />
                <span>and lots of coffee</span>
              </div>
              {/* Social Links */}
              <div className="flex gap-2 sm:gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 border border-white/20 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-base sm:text-sm flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group text-sm"
                    >
                      <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-base sm:text-sm">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name} className="flex items-center text-gray-300 group hover:text-white transition-colors duration-300 text-sm">
                    <span className="text-lg mr-2 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                    <span>{service.name}</span>
                  </li>
                ))}
              </ul>
              {/* Contact Info */}
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-2 text-base sm:text-sm">Contact</h4>
                <div className="space-y-2">
                  <a
                    href="mailto:dhruvt128@gmail.com"
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 group text-sm"
                  >
                    <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    <span>dhruvt128@gmail.com</span>
                  </a>
                  <div className="flex items-center text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-emerald-400" />
                    <span>Available Worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-2 py-4 sm:py-2">
            <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between">
              <div className="text-gray-400 text-xs mb-2 md:mb-0 flex items-center">
                <span>© {currentYear} Dhruv Trivedi. All rights reserved.</span>
                <span className="mx-2">•</span>
                <span className="text-cyan-400">Made with passion</span>
              </div>
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                {/* Back to Top Button */}
                <button
                  onClick={scrollToTop}
                  className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;