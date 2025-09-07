import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, Users, Calendar, Smartphone, Globe, Palette, Server } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';

interface ProjectStats {
  stars?: number;
  views?: string;
  downloads?: string;
  rating: number;
  likes?: number;
  uptime?: string;
  servers?: string;
  users?: string;
  transactions?: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github?: string;
  website?: string;
  playstore?: string;
  behance?: string;
  dribbble?: string;
  docs?: string;
  stats: ProjectStats;
  type: string;
}

const projects = [
  {
    id: 0,
    title: "Resumind - Resume Builder",
    category: "web",
    description: "A modern web application that helps users create professional resumes with customizable templates, real-time preview, and export functionality.",
    image: "./assets/ResuMind.png",    
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Firebase"],
    features: [
      "Real-time resume preview",
      "Multiple professional templates",
      "PDF export functionality",
      "Cloud storage for saves",
      "Responsive design",
      "Dark/Light mode"
    ],
    github: "https://github.com/yourusername/resumind",
    website: "https://resumind-theta-ashy.vercel.app/",
    type: "Web Development"
  },
  {
    id: 1,
    title: "Solve Problem AI",
    category: "web",
    description: "An AI-powered problem-solving platform that helps users find solutions to their coding and technical challenges using advanced language models.",
    image: "./assets/SolveHub.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
      "Vercel AI SDK"
    ],
    features: [
      "AI-powered problem solving",
      "Real-time responses",
      "Code syntax highlighting",
      "Mobile responsive design",
      "Dark/Light mode",
      "History tracking"
    ],
    github: "https://github.com/dj2313/solve-problem",
    website: "https://solve-problem-ai.vercel.app/",
    type: "AI Development"
  },
  {
    id: 2,
    title: "Restaurant App",
    category: "web",
    description: "A modern restaurant application featuring an interactive menu, online ordering system, and responsive design for seamless dining experience.",
    image: "./assets/Restaurant.png", 
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Firebase",
      "Framer Motion"
    ],
    features: [
      "Interactive menu display",
      "Real-time order tracking",
      "Responsive design",
      "User authentication",
      "Cart management",
      "Mobile-first approach"
    ],
    github: "https://github.com/dj2313/restaurant-app",
    website: "https://restaurant-app-es7c.vercel.app/",
    type: "Web Development"
  }
];

const Projects = () => {
  return (
    <ErrorBoundary>
      <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          {/* Projects Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my latest web development and AI projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                {/* Image Section */}
                <div className="relative h-[300px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* Title and Description */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                      <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies and Features Grid */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white flex items-center">
                        <Globe className="w-5 h-5 mr-2 text-blue-400" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium hover:bg-blue-500/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white flex items-center">
                        <Star className="w-5 h-5 mr-2 text-yellow-400" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-300">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold text-white text-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Projects;