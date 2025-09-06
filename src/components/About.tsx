import React, { useState, useEffect } from 'react';
import { MapPin, Coffee, Code, Smartphone, Globe, Server, Github, Linkedin, Award, Users, Clock, Star, Zap, Target } from 'lucide-react';
import Background from './shared/Background';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, experience: 0 });

  useEffect(() => {
    // Set visible immediately on mobile or small screens
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setIsVisible(true);
      // Animate counters immediately on mobile
      const animateCounter = (key: keyof typeof counters, target: number) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 30);
      };
      
      animateCounter('projects', 50);
      animateCounter('clients', 25);
      animateCounter('experience', 3);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const animateCounter = (key: keyof typeof counters, target: number) => {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, 30);
          };
          
          animateCounter('projects', 50);
          animateCounter('clients', 25);
          animateCounter('experience', 3);
        }
      },
      { threshold: 0.1 } // Reduced threshold for better mobile compatibility
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: "Innovation First",
      icon: Zap,
      description: "I believe in pushing boundaries and exploring cutting-edge technologies to create solutions that make a real impact.",
      highlights: ["Latest Tech Stack", "Creative Solutions", "Future-Ready", "Problem Solving"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quality Craftsmanship",
      icon: Award,
      description: "Every line of code matters. I focus on writing clean, maintainable, and scalable code that stands the test of time.",
      highlights: ["Clean Code", "Best Practices", "Code Reviews", "Documentation"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "User-Centric Design",
      icon: Users,
      description: "Technology should serve people. I prioritize user experience and accessibility in every project I build.",
      highlights: ["UX/UI Focus", "Accessibility", "Performance", "Mobile-First"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Continuous Learning",
      icon: Target,
      description: "The tech world evolves rapidly. I stay updated with industry trends and continuously expand my skill set.",
      highlights: ["Industry Trends", "New Technologies", "Skill Growth", "Adaptability"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: counters.projects, suffix: "+", icon: Target },
    { label: "Happy Clients", value: counters.clients, suffix: "+", icon: Users },
    { label: "Years Experience", value: counters.experience, suffix: "+", icon: Clock },
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
      aria-label="About section"
    >
      <Background />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Star className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-white text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Journey &
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"> Philosophy</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Behind every great application is a developer who cares deeply about the craft. 
            I believe in building not just functional software, but meaningful experiences that solve real problems.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
          {values.map((value, index) => (
            <div key={value.title} className="group relative">
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${value.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-r ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {value.description}
                </p>
                
                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-2">
                  {value.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Info */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Card */}
            <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Dhruv Trivedi</h3>
                      <p className="text-cyan-400 font-medium">Full Stack Developer & Tech Innovator</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed">
                    My journey in tech started with curiosity and has evolved into a passion for creating 
                    digital solutions that matter. I believe the best code is not just functional, but 
                    elegant, maintainable, and serves a greater purpose in improving people's lives.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                      <span>Remote Worldwide</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Coffee className="w-5 h-5 mr-3 text-amber-400" />
                      <span>Coffee Powered</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Zap className="w-5 h-5 mr-3 text-purple-400" />
                      <span>Always Learning</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Award className="w-5 h-5 mr-3 text-emerald-400" />
                      <span>Detail Oriented</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/dj2313"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-5 h-5 group-hover:animate-pulse" />
                      <span className="font-medium">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/trivedi-dhruv/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-3 px-6 py-3 bg-blue-600/20 backdrop-blur-sm rounded-xl border border-blue-500/30 text-white hover:bg-blue-600/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105"
                    >
                      <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Right Content - Code Block */}
                <div className="relative">
                  <div className="bg-slate-900/80 rounded-2xl p-6 border border-white/10 font-mono text-sm">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="text-gray-400 ml-4">about-me.js</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-purple-400">const <span className="text-blue-400">myPhilosophy</span> = {'{'}</div>
                      <div className="ml-4 text-gray-300">approach: <span className="text-emerald-400">'User-First Development'</span>,</div>
                      <div className="ml-4 text-gray-300">mindset: <span className="text-emerald-400">'Continuous Growth'</span>,</div>
                      <div className="ml-4 text-gray-300">values: [</div>
                      <div className="ml-8 text-yellow-400">'Clean Code', 'Innovation',</div>
                      <div className="ml-8 text-yellow-400">'Collaboration', 'Impact'</div>
                      <div className="ml-4 text-gray-300">],</div>
                      <div className="ml-4 text-gray-300">goal: <span className="text-emerald-400">'Meaningful Solutions'</span>,</div>
                      <div className="ml-4 text-gray-300">status: <span className="text-emerald-400">'Ready to Innovate'</span></div>
                      <div className="text-purple-400">{'}'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;