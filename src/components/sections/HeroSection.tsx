"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import portfolioData from '@/data/portfolioData.json';
import { ArrowRight, BookOpen, Users, Linkedin, GraduationCap } from 'lucide-react';

export const HeroSection = () => {
  const { hero } = portfolioData;
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 w-full flex flex-col items-center text-center">
        
        {/* Profile Image (Placeholder for now) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <img 
            src="/placeholder-profile.jpg" 
            alt="Dr. Sishu Shankar Muni" 
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-zinc-800 bg-zinc-900"
            onError={(e) => {
              // Fallback if image doesn't exist yet
              (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Sishu+Muni&background=2563EB&color=fff&size=200";
            }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight"
        >
          Building Future <br className="hidden md:block" />
          <span className="text-gradient">AI Engineers & Data Professionals</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
        >
          {hero.subheading}
        </motion.p>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
        >
          <a href="https://www.linkedin.com/in/sishu-shankar-muni-2a8505110?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors">
            <Linkedin className="w-6 h-6" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a href="https://scholar.google.com/citations?user=HqDJFc0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
            <GraduationCap className="w-6 h-6" />
            <span className="font-medium">Google Scholar</span>
          </a>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <Button size="lg" variant="primary" onClick={() => router.push('/about')}>
            Meet Me <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="secondary" onClick={() => router.push('/projects')}>
            View Student Projects <BookOpen className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => router.push('/research')}>
            Success Stories <Users className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 glass rounded-3xl p-8"
        >
          <AnimatedCounter value={hero.stats.publications} label="Publications" />
          <AnimatedCounter value={hero.stats.citations} label="Citations" />
          <AnimatedCounter value={hero.stats.hIndex} label="h-index" />
          <AnimatedCounter value={hero.stats.studentsGuided} label="Students Guided" />
          <AnimatedCounter value={hero.stats.fundedProjects} label="Funded Projects" />
          <AnimatedCounter value={hero.stats.collaborators} label="Global Collaborators" />
        </motion.div>

      </div>
    </section>
  );
};
