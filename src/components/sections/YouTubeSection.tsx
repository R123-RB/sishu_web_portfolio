"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { ExternalLink, PlayCircle } from 'lucide-react';

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const YouTubeSection = () => {
  return (
    <Section id="youtube-channel" title="Educational Content" subtitle="Learn Data Science and AI on YouTube">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <a href="https://youtube.com/@chaos_sishu?si=wOWe_pP9HBj1tj02" target="_blank" rel="noopener noreferrer" className="block group">
          <Card className="overflow-hidden bg-zinc-900 border-zinc-800 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 transform group-hover:-translate-y-1">
            <div className="flex flex-col md:flex-row items-center p-8 gap-8">
              <div className="flex-shrink-0 w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                <YoutubeIcon className="w-12 h-12 text-red-500" />
              </div>              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">Chaos by Sishu</h3>
                <p className="text-gray-400 mb-4 text-lg">
                  Join my YouTube channel for deep dives into Data Science, Artificial Intelligence, and modern software engineering practices.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-red-400 font-medium">
                  <PlayCircle className="w-5 h-5" />
                  <span>Watch the Playlist</span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </Card>
        </a>
      </motion.div>
    </Section>
  );
};
