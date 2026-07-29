"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  label: string;
  duration?: number;
}

export const AnimatedCounter = ({ value, label, duration = 2 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;
      const totalMilSecDur = duration * 1000;
      const incrementTime = (totalMilSecDur / end) * 2;
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (totalMilSecDur / 50));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-4">
      <motion.span 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-2"
      >
        {count}+
      </motion.span>
      <span className="text-sm md:text-base text-gray-400 text-center font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
};
