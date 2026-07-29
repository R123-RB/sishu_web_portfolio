"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
}

export const Section = ({ children, className, id, title, subtitle }: SectionProps) => {
  return (
    <section id={id} className={cn("py-24 relative overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24 text-center md:text-left"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-400 max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
