import React, { useState, useEffect } from 'react';
import { Menu, X, User, Mail, Download, Home, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import cvPdf from '../Dhruv CV.pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Dhruv_Trivedi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '/projects', icon: Briefcase, external: true },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  // Update the navigation links to handle both hash and path navigation
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center">
            <span className="text-xl font-light text-white tracking-wider hover:text-cyan-400 transition-colors duration-300">
              Dhruv Trivedi
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              
              return item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={`relative px-4 py-2 font-light transition-all duration-300 flex items-center space-x-2 group ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="tracking-wider">{item.name}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-cyan-500 to-transparent" />
                  )}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-4 py-2 font-light transition-all duration-300 flex items-center space-x-2 group text-gray-400 hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                  <span className="tracking-wider">{item.name}</span>
                </a>
              );
            })}
            
            {/* Download CV Button */}
            <button
              onClick={handleDownloadCV}
              className="px-6 py-2 text-sm text-white border border-white/10 rounded-full font-light 
                       hover:bg-white/5 transition-all duration-300 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span className="tracking-wider">CV</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 bg-[#0a0a0a]/95 backdrop-blur-xl rounded-lg border border-white/5">
            <div className="space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 p-3 rounded-lg font-light transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-white/5'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="tracking-wider">{item.name}</span>
                  </a>
                );
              })}
              
              <button
                onClick={() => {
                  handleDownloadCV();
                  setIsMenuOpen(false);
                }}
                className="w-full mt-4 p-3 text-white/80 border border-white/10 rounded-lg font-light 
                         hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span className="tracking-wider">Download CV</span>
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-transparent transform origin-left scale-x-0 transition-transform duration-300" 
           style={{ 
             transform: `scaleX(${Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1)})` 
           }} 
      />
    </header>
  );
};

export default Header;