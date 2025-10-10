import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Download, Github, Linkedin, Mail, Sparkles, Code2, Rocket } from 'lucide-react';
import './Hero.css';
import '@fontsource/playfair-display';

// Import CV as a static asset
import cvPdf from '../Dhruv CV.pdf';
import Background from './shared/Background';

interface MousePosition {
  x: number;
  y: number;
}

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadCV = useCallback(() => {
    if (!cvPdf) {
      alert('CV file is not available for download at the moment.');
      return;
    }
    
    try {
      const link = document.createElement('a');
      link.href = cvPdf;
      link.download = 'Dhruv_Trivedi_CV.pdf';
      link.setAttribute('aria-label', 'Download Dhruv Trivedi CV');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('There was an error downloading the CV. Please try again later.');
    }
  }, []);

  // Memoize floating particles to prevent re-rendering
  const floatingParticles = useMemo(() => {
    return [...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        }}
      />
    ));
  }, []);

  const techStack = ['React', 'Node.js', 'TypeScript', 'Android', 'AWS', 'Python'];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
      aria-label="Hero section - Dhruv Trivedi Portfolio"
    >
      <Background />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center max-w-3xl">
            {/* Main Heading */}
            <h1 className="fade-in space-y-6">
              <span className="block text-2xl text-gray-400 font-light tracking-wide">
                Hello, I'm
              </span>
              <span className="block text-6xl md:text-7xl font-bold text-white minimal-shadow tracking-tight">
                Dhruv Trivedi
              </span>
              <span className="block text-xl text-gray-400 font-light tracking-widest uppercase mt-4">
                Mobile App Developer
              </span>
            </h1>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 mb-16 fade-in-delay-1">
              <a 
                href="#contact"
                className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Rocket className="w-4 h-4" />
                  <span>Let's Talk</span>
                </span>
              </a>
              
              <button 
                onClick={handleDownloadCV}
                className="px-8 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </span>
              </button>
            </div>

            {/* Social Links */}
            <nav className="flex items-center justify-center space-x-6 fade-in-delay-2" aria-label="Social media links">
              <a
                href="https://github.com/dj2313"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 
                         bg-white/5 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 
                         transition-all duration-300 transform hover:scale-110"
                aria-label="Visit Dhruv's GitHub profile"
              >
                <Github className="w-5 h-5" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/trivedi-dhruv127/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 
                         bg-white/5 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 
                         transition-all duration-300 transform hover:scale-110"
                aria-label="Visit Dhruv's LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
              <a
                href="#contact"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 
                         bg-white/5 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 
                         transition-all duration-300 transform hover:scale-110"
                aria-label="Navigate to contact section"
              >
                <Mail className="w-5 h-5" />
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a 
          href="#about"
          className="group flex flex-col items-center space-y-3 opacity-70 hover:opacity-100 transition-all duration-300"
          aria-label="Scroll down to explore more content"
        >
          <span className="text-sm font-light tracking-wider text-white">
            explore
          </span>
          <div className="relative w-5 h-8">
            <span className="absolute top-0 left-1/2 w-0.5 h-8 bg-white/30 -translate-x-1/2 group-hover:bg-white/50 transition-colors duration-300" />
            <span className="absolute top-1 left-1/2 w-0.5 h-2 bg-white -translate-x-1/2 animate-scrollDown" />
          </div>
        </a>
      </div>


    </section>
  );
};

export default Hero;