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
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
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
    stats: { 
      stars: 950, 
      views: "25K+", 
      rating: 4.9 
    },
    type: "Web Development"
  }
];

const Projects = () => {
  return (
    <ErrorBoundary>
      <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          {/* Project Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">ResuMind</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my latest web development project - a modern resume builder application
              built with React and Next.js.
            </p>
          </div>

          {/* Project Card */}
          <div className="max-w-5xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* Image Section */}
            <div className="relative h-[400px]">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content Section */}
            <div className="p-8">
              {/* Title and Description */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-4xl font-bold text-white">{projects[0].title}</h1>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    {projects[0].type}
                  </span>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {projects[0].description}
                </p>
              </div>

              {/* Technologies and Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-white flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-blue-400" />
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].technologies.map((tech) => (
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
                  <h2 className="text-xl font-semibold text-white flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-400" />
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    {projects[0].features.map((feature) => (
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
                  href={projects[0].website}
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
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Projects;