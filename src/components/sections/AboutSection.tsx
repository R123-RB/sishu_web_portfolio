"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolioData.json';
import { Mail } from 'lucide-react';

export const AboutSection = () => {
  const { about } = portfolioData;

  return (
    <Section id="about" title="About Me" subtitle={about.introduction}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        {/* Left Column: Education & Employment */}
        <div className="space-y-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">Employment</h3>
            <div className="space-y-6">
              {about.employment.map((job) => (
                <div key={job.id} className="border-l-2 border-zinc-800 pl-4">
                  <span className="text-sm text-primary font-bold">{job.year}</span>
                  <h4 className="text-lg font-bold text-white mt-1">{job.role}</h4>
                  <p className="text-gray-300 font-medium">{job.institution}</p>
                  <p className="text-gray-400 text-sm mt-2">{job.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
            <div className="space-y-6">
              {about.education.map((edu) => (
                <div key={edu.id} className="border-l-2 border-zinc-800 pl-4">
                  <p className="text-gray-400 font-medium">{edu.institution}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Skills & References */}
        <div className="space-y-8">
          <Card className="p-8 h-fit">
            <h3 className="text-2xl font-bold mb-6 text-accent">Computer Skillssss</h3>
            <div className="flex flex-wrap gap-3">
              {about.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">References</h3>
            <ul className="space-y-4">
              {about.references.map((ref, index) => (
                <li key={index} className="flex gap-3 text-gray-300 text-sm">
                  <Mail className="w-5 h-5 text-purple-400 shrink-0" />
                  <span>{ref}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  );
};
