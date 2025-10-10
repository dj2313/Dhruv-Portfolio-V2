import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Smartphone, 
  Code, 
  Rocket, 
  Shield, 
  Globe,
  Box,
  Zap,
  Server,
  Database,
  Cloud
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Background from './shared/Background';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skills = [
    { name: "React Native", icon: Smartphone },
    { name: "TypeScript", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "Next.js", icon: Globe },
    { name: "TailwindCSS", icon: Box },
    { name: "GraphQL", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Box }
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Specialized in creating responsive and intuitive mobile applications"
    },
    {
      icon: Rocket,
      title: "Fast Development",
      description: "Rapid prototyping and agile development methodology"
    },
    {
      icon: Shield,
      title: "Secure Code",
      description: "Implementation of best security practices and data protection"
    },
    {
      icon: Zap,
      title: "Optimized Performance",
      description: "Focus on speed and efficiency in all applications"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center py-20 bg-[#0a0a0a]"
    >
      <Background />

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUpVariants}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 hover:bg-white/20 transition-all">
            <Star className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-white text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building the
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"> Future</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mobile App Developer specializing in creating innovative and user-friendly applications
            that push the boundaries of what's possible on mobile devices.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          variants={fadeInUpVariants}
          className="max-w-6xl mx-auto bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Passionate about crafting exceptional mobile experiences through clean code 
                  and innovative solutions. Specializing in React Native, iOS, and Android 
                  development with a focus on performance and user experience.
                </p>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-4 bg-white/5 rounded-lg text-center hover:bg-white/10 transition-all group"
                  >
                    <skill.icon className="w-6 h-6 text-cyan-400 mb-2 mx-auto" />
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/projects')}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white hover:opacity-90 transition-all"
                >
                  View Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-xl text-white border border-white/20 hover:bg-white/20 transition-all"
                >
                  Contact Me
                </motion.button>
              </div>
            </div>

            {/* Right Column - Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all group"
                >
                  <feature.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;