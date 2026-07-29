"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import portfolioData from '@/data/portfolioData.json';

export const AwardsSection = () => {
  const { awardsAndScholarships } = portfolioData;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="text-gradient">Scholarships</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Recognitions and honors received over the academic journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsAndScholarships.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-6 rounded-2xl group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-800/50 rounded-xl text-primary">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-sm text-primary font-semibold tracking-wider">
                    {award.year}
                  </span>
                  <h3 className="text-xl font-bold mt-2 text-gray-100 group-hover:text-primary transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    {award.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
