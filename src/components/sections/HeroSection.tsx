"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import portfolioData from '@/data/portfolioData.json';
import { ArrowRight, BookOpen, Users, GraduationCap } from 'lucide-react';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const HeroSection = () => {
  const { hero } = portfolioData;
  const router = useRouter();
  const [profileImgError, setProfileImgError] = React.useState(false);

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
          {profileImgError ? (
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-zinc-800 bg-zinc-900 flex items-center justify-center text-3xl font-bold text-white">
              SM
            </div>
          ) : (
            <img 
              src="/placeholder-profile.jpg" 
              alt="Dr. Sishu Shankar Muni" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-zinc-800 bg-zinc-900"
              onError={() => setProfileImgError(true)}
            />
          )}
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
            <LinkedinIcon className="w-6 h-6" />
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
