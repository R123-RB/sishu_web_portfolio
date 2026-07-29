"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Globe } from 'lucide-react';
import portfolioData from '@/data/portfolioData.json';

export const AcademicServiceSection = () => {
  const { academicService } = portfolioData;

  return (
    <section className="py-20 relative overflow-hidden bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic <span className="text-gradient">Service</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Contributions to the scientific community through editorial and reviewing roles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Editorial Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-primary w-6 h-6" />
              <h3 className="text-xl font-bold">Editorial Roles</h3>
            </div>
            <ul className="space-y-4">
              {academicService.editorial.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary/50 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Reviewer Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-8 rounded-3xl md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-accent w-6 h-6" />
              <h3 className="text-xl font-bold">Reviewer For</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {academicService.reviewer.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-accent/50 shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
