"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}

export const Card = ({ children, className, glass = true, ...props }: CardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-2xl p-6 overflow-hidden relative",
        glass ? "glass-card" : "bg-zinc-900 border border-zinc-800",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
