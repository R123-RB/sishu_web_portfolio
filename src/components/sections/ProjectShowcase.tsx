"use client";

import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '@/data/portfolioData.json';
import { ExternalLink, Lock } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const ProjectShowcase = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Section id="projects" title="Project Showcase" subtitle="Explore the cutting-edge projects built by our students in the CNLD Lab.">
      
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
                ? 'bg-primary text-white shadow-lg shadow-blue-500/30' 
                : 'bg-zinc-800/50 text-gray-400 hover:bg-zinc-700 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gamified Lab Map / Portfolio Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col group cursor-pointer hover:border-primary/50 transition-colors">
                
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-zinc-800 rounded-lg mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
                  <img 
                    src={`/placeholder-project-${project.id}.jpg`} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/600x400/2563EB/FFF?text=${project.title.split(' ').join('+')}`;
                    }}
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <span className="px-3 py-1 text-xs font-bold bg-zinc-900/80 backdrop-blur text-white rounded-full border border-white/10">
                      {project.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm flex-grow mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-zinc-800 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="text-sm text-gray-500 mb-4">
                    <span className="font-semibold text-gray-300">By:</span> {project.studentsInvolved.join(', ')}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <Button variant="outline" size="sm" className="flex-1" onClick={() => window.open(project.github, '_blank')}>
                        <GithubIcon className="w-4 h-4 mr-2" /> Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="primary" size="sm" className="flex-1" onClick={() => window.open(project.demo, '_blank')}>
                        <ExternalLink className="w-4 h-4 mr-2" /> Demo
                      </Button>
                    )}
                  </div>
                </div>

              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </Section>
  );
};
