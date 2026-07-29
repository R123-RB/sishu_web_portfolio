"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark } from 'lucide-react';
import portfolioData from '@/data/portfolioData.json';

export const FundingSection = () => {
  const { fundingAndGrants } = portfolioData;

  return (
    <section className="py-20 relative overflow-hidden bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Funding & <span className="text-gradient">Grants</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Major research funding and grants acquired.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fundingAndGrants.map((grant, index) => (
            <motion.div
              key={grant.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                  <Landmark className="w-8 h-8" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                    {grant.period}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4 leading-tight">
                {grant.title}
              </h3>
              <p className="text-gray-400 font-medium">
                Funded by: <span className="text-gray-300">{grant.funder}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
