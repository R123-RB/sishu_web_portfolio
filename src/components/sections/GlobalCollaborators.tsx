"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolioData.json';
import { Globe, Briefcase, Mic } from 'lucide-react';

export const GlobalCollaborators = () => {
  const { collaborators, responsibilities, outreachAndConferences } = portfolioData;

  return (
    <Section id="collaborations" title="Global Reach & Responsibilities" subtitle="International collaborations, academic responsibilities, and outreach.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        
        {/* Responsibilities */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 h-full">
            <div className="flex items-center gap-4 mb-6 border-b border-zinc-800 pb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">Responsibilities</h3>
            </div>
            <ul className="space-y-3">
              {responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span className="text-gray-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        {/* Global Collaborators */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-8 h-full">
            <div className="flex items-center gap-4 mb-6 border-b border-zinc-800 pb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">Global Collaborators</h3>
            </div>
            <ul className="space-y-3">
              {collaborators.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span className="text-gray-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        {/* Outreach & Conferences */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2"
        >
          <Card className="p-8 h-full">
            <div className="flex items-center gap-4 mb-6 border-b border-zinc-800 pb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Mic className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">Conferences & Outreach</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-h-96 overflow-y-auto custom-scrollbar pr-4">
              {outreachAndConferences.map((item, idx) => (
                <div key={idx} className="flex flex-col border-b border-zinc-800 pb-3 last:border-0 last:pb-0">
                  <span className="text-primary text-sm font-bold tracking-wider mb-1">{item.year}</span>
                  <span className="text-gray-300 text-sm leading-relaxed">{item.event}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

      </div>
    </Section>
  );
};
