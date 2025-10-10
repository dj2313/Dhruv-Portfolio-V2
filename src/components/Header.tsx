import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import cvPdf from '../Dhruv CV.pdf';
import { cn } from '../lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home', isScroll: true },
    { name: 'About', to: 'about', isScroll: true },
    { name: 'Projects', to: '/projects', isScroll: false },
    { name: 'Contact', to: 'contact', isScroll: true }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Dhruv_Trivedi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderNavLink = (item: { name: string; to: string; isScroll: boolean }) => {
    if (item.isScroll) {
      return (
        <ScrollLink
          to={item.to}
          smooth={true}
          spy={true}
          offset={-70}
          className={cn(
            "text-gray-300 hover:text-white transition-colors cursor-pointer",
            isScrolled ? "text-sm" : "text-base",
            "hover:text-cyan-400"
          )}
          activeClass="text-cyan-400"
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </ScrollLink>
      );
    }

    return (
      <RouterLink
        to={item.to}
        className={cn(
          "text-gray-300 hover:text-white transition-colors cursor-pointer",
          isScrolled ? "text-sm" : "text-base",
          "hover:text-cyan-400"
        )}
        onClick={() => setIsOpen(false)}
      >
        {item.name}
      </RouterLink>
    );
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 bg-black/80 backdrop-blur-md border-b border-white/10" 
          : "py-4 bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6">
        <div className={cn(
          "flex items-center justify-between transition-all duration-300",
          isScrolled ? "rounded-full border border-white/10 bg-black/50 backdrop-blur-lg px-6 py-3" : ""
        )}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <ScrollLink
              to="home"
              smooth={true}
              className={cn(
                "text-white font-bold cursor-pointer transition-all duration-300",
                isScrolled ? "text-xl" : "text-2xl"
              )}
            >
              Portfolio<span className="text-cyan-400">.</span>
            </ScrollLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {renderNavLink(item)}
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className={cn(
                "px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl",
                "text-white flex items-center space-x-2 hover:opacity-90 transition-all",
                isScrolled ? "text-sm px-4 py-1.5" : "text-base"
              )}
            >
              <span>Resume</span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-4 right-4 mt-2"
            >
              <div className="bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-lg">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {renderNavLink(item)}
                    </div>
                  ))}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      handleDownloadCV();
                      setIsOpen(false);
                    }}
                    className="w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white flex items-center justify-center space-x-2"
                  >
                    <span>Resume</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;