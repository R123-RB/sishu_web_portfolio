"use client";

import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '@/data/portfolioData.json';
import { Users, BookOpen, User, ChevronRight, ChevronLeft, X } from 'lucide-react';
import Image from 'next/image';

const Lightbox = ({ image, onClose }: { image: string | null, onClose: () => void }) => {
  if (!image) return null;
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12" 
      onClick={onClose}
    >
      <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
        <Image src={image} alt="Fullscreen view" fill className="object-contain" />
      </div>
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-zinc-800 text-white hover:bg-primary transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

const ImageCarousel = ({ images, onImageClick }: { images: string[], onImageClick: (img: string) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div 
        className="relative w-full h-48 rounded-t-lg group z-10 hover:z-40 cursor-pointer"
        onClick={() => onImageClick(images[0])}
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-t-lg group-hover:overflow-visible">
          <Image src={images[0]} alt="Project or Student" fill className="object-cover object-top transition-all duration-500 group-hover:scale-[1.6] group-hover:object-contain group-hover:rounded-lg group-hover:shadow-2xl group-hover:bg-zinc-900" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-48 rounded-t-lg group z-10 hover:z-40 cursor-pointer">
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden rounded-t-lg group-hover:overflow-visible pointer-events-none"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-[1.6] group-hover:object-contain group-hover:rounded-lg group-hover:shadow-2xl group-hover:bg-zinc-900 pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => onImageClick(images[currentIndex])}
          />
        </AnimatePresence>
      </div>
      
      <button 
        onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity z-50 hover:bg-primary"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button 
        onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity z-50 hover:bg-primary"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-50">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`w-1.5 h-1.5 rounded-full ${idx === currentIndex ? 'bg-primary' : 'bg-white/50'}`} 
          />
        ))}
      </div>
    </div>
  );
};

export const StudentProjectsSection = () => {
  const { alumniAndScholars, ongoingProjects } = portfolioData.studentProjectsAndCollaborators;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section id="student-projects" title="Student Projects & Collaborations" subtitle="Mentoring the next generation of researchers and collaborating globally.">
      
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />

      {/* Scholars & Alumni */}
      <div className="mt-12">
        <div className="flex items-center gap-3 mb-8">
          <Users className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-white">Research Scholars & Alumni</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alumniAndScholars.map((student, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className="h-full flex flex-col group overflow-hidden">
                {student.images && student.images.length > 0 ? (
                  <ImageCarousel images={student.images} onImageClick={setSelectedImage} />
                ) : (
                  <div className="w-full h-48 bg-zinc-900 flex items-center justify-center rounded-t-lg border-b border-zinc-800">
                    <User className="w-12 h-12 text-zinc-700" />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{student.name}</h4>
                  <p className="text-sm text-gray-400">{student.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ongoing Projects */}
      <div className="mt-20">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-6 h-6 text-accent" />
          <h3 className="text-2xl font-bold text-white">Ongoing Research Projects</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ongoingProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                {project.images && project.images.length > 0 && (
                  <div className="w-full h-64 border-b border-zinc-800">
                     <ImageCarousel images={project.images} onImageClick={setSelectedImage} />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-white mb-4 leading-tight">{project.title}</h4>
                  
                  <div className="mt-auto">
                    <p className="text-sm font-semibold text-accent mb-2">Students Involved:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.students.map((student, sIdx) => (
                        <span key={sIdx} className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-xs font-medium">
                          {student}
                        </span>
                      ))}
                    </div>

                    {project.collaboration && (
                      <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                        <p className="text-xs text-primary font-medium">{project.collaboration}</p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

    </Section>
  );
};
