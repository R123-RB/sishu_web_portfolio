"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users } from 'lucide-react';
import portfolioData from '@/data/portfolioData.json';

export const TeachingSupervisionSection = () => {
  const { teachingExperience, supervisoryExperience } = portfolioData;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Teaching Experience */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Teaching <span className="text-gradient">Experience</span></h2>
          </div>
          
          <div className="glass p-8 rounded-3xl space-y-4">
            <ul className="space-y-4">
              {teachingExperience.map((course, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-gray-300 text-lg">{course}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Supervisory Experience */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Supervisory <span className="text-gradient">Experience</span></h2>
          </div>
          
          <div className="space-y-8">
            {/* PhD */}
            <div className="glass p-8 rounded-3xl border-l-4 border-l-purple-500">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Ph.D. Students</h3>
              <div className="space-y-4">
                {supervisoryExperience.phd.map((student, idx) => (
                  <div key={idx} className="border-b border-zinc-800 last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-200">{student.name}</span>
                      <span className="text-sm text-purple-400">{student.year}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{student.topic}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* MSc */}
            <div className="glass p-8 rounded-3xl border-l-4 border-l-primary">
              <h3 className="text-xl font-bold mb-4 text-primary">M.Sc. Students</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                {supervisoryExperience.msc.map((student, idx) => (
                  <div key={idx} className="border-b border-zinc-800 last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-200">{student.name}</span>
                      <span className="text-sm text-primary">{student.year}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{student.topic}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
