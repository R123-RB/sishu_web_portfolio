"use client";

import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '@/data/portfolioData.json';
import { BookOpen, TrendingUp, Users, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const PublicationsSection = () => {
  const { publicationsAndMetrics, journalPublications, conferencePublications } = portfolioData;
  const [showAllJournals, setShowAllJournals] = useState(false);

  const metrics = [
    { label: "Publications", value: publicationsAndMetrics.journals, icon: BookOpen },
    { label: "Citations", value: publicationsAndMetrics.citations, icon: TrendingUp },
    { label: "h-index", value: publicationsAndMetrics.hIndex, icon: Star },
    { label: "i10-index", value: publicationsAndMetrics.i10Index, icon: Users },
  ];

  const displayedJournals = showAllJournals ? journalPublications : journalPublications.slice(0, 10);

  return (
    <Section id="research" title="Research & Publications" subtitle="Pioneering research in Computational Mathematics and Nonlinear Dynamics.">
      
      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex flex-col items-center justify-center p-6 text-center hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{metric.value}</h3>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{metric.label}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Journal Publications */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-white border-b border-zinc-800 pb-4">Selected Journal Publications</h3>
        <div className="space-y-4">
          <AnimatePresence>
            {displayedJournals.map((pub, idx) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                className="glass p-6 rounded-2xl group hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200 group-hover:text-primary transition-colors leading-tight mb-2">
                      {pub.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-1">{pub.authors}</p>
                    <p className="text-primary/80 font-medium text-sm italic">{pub.journal}</p>
                  </div>
                  <span className="shrink-0 inline-block px-3 py-1 bg-zinc-800 text-gray-300 text-xs font-bold rounded-full h-fit">
                    {pub.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {journalPublications.length > 10 && (
          <div className="mt-8 flex justify-center">
            <Button 
              variant="outline" 
              onClick={() => setShowAllJournals(!showAllJournals)}
            >
              {showAllJournals ? (
                <>Show Less <ChevronUp className="w-4 h-4 ml-2" /></>
              ) : (
                <>View All {journalPublications.length} Publications <ChevronDown className="w-4 h-4 ml-2" /></>
              )}
            </Button>
          </div>
        )}
      </div>

      {/* Conference Publications */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-white border-b border-zinc-800 pb-4">Conference Publications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conferencePublications.map((pub, idx) => (
            <Card key={pub.id} className="p-6 hover:border-primary/50 transition-all">
              <span className="inline-block px-2 py-1 bg-zinc-800 text-gray-300 text-xs font-bold rounded mb-3">
                {pub.year}
              </span>
              <h4 className="text-lg font-semibold text-gray-200 mb-2 leading-tight">
                {pub.title}
              </h4>
              <p className="text-gray-400 text-sm mb-2">{pub.authors}</p>
              <p className="text-primary/80 font-medium text-sm italic">{pub.conference}</p>
            </Card>
          ))}
        </div>
      </div>

    </Section>
  );
};
