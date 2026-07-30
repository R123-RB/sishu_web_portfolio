"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Youtube, ExternalLink, PlayCircle } from 'lucide-react';

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
                <Youtube className="w-12 h-12 text-red-500" />
              </div>
              <div className="flex-grow text-center md:text-left">
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
