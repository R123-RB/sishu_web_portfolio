"use client";

import { motion } from "framer-motion";
import { BookOpen, Download, FileText, Layers, Cpu, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Algorithmic Thinking",
    description: "Designing step-by-step solutions to problems using structured logical processes.",
  },
  {
    icon: Layers,
    title: "Decomposition",
    description: "Breaking complex problems into smaller, manageable sub-problems.",
  },
  {
    icon: Lightbulb,
    title: "Pattern Recognition",
    description: "Identifying similarities and trends within data and problem structures.",
  },
  {
    icon: BookOpen,
    title: "Abstraction",
    description: "Focusing on essential information while filtering out unnecessary details.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ComputationalThinkingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
          <BookOpen className="w-4 h-4" />
          Course Material
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 tracking-tight">
          Computational{" "}
          <span className="text-gradient">Thinking</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Explore the foundations of computational thinking — a fundamental
          skill for problem solving in the age of data science and artificial
          intelligence.
        </p>
      </motion.div>

      {/* Key Concepts Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
      >
        {highlights.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            className="glass-card rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* PDF Slide Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Lecture Slides
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl">
          Download the introductory lecture slides covering the core pillars of
          computational thinking.
        </p>

        {/* PDF Card */}
        <a
          href="/Introduction-to-Computational-Thinking.pdf"
          download
          className="group block w-full max-w-2xl"
        >
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/5 to-secondary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex items-center gap-6 p-6 md:p-8">
              {/* File Icon */}
              <div className="shrink-0 w-20 h-24 md:w-24 md:h-28 rounded-xl bg-gradient-to-br from-red-600/20 to-red-800/20 border border-red-500/20 flex flex-col items-center justify-center gap-1 group-hover:from-red-600/30 group-hover:to-red-800/30 transition-colors duration-300">
                <FileText className="w-10 h-10 md:w-12 md:h-12 text-red-400 group-hover:text-red-300 transition-colors" />
                <span className="text-[10px] md:text-xs font-bold text-red-400/80 uppercase tracking-wider">
                  PDF
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-lg md:text-xl mb-1 group-hover:text-primary transition-colors truncate">
                  Introduction to Computational Thinking
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  Comprehensive slide deck covering algorithmic thinking,
                  decomposition, pattern recognition, and abstraction.
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" />
                    PDF Document
                  </span>
                  <span>~31 MB</span>
                </div>
              </div>

              {/* Download Button */}
              <div className="shrink-0 hidden sm:flex w-14 h-14 rounded-full bg-primary/10 border border-primary/20 items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300">
                <Download className="w-6 h-6 text-primary group-hover:animate-bounce" />
              </div>
            </div>

            {/* Bottom accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </a>

        {/* Mobile download button */}
        <a
          href="/Introduction-to-Computational-Thinking.pdf"
          download
          className="sm:hidden mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
        >
          <Download className="w-5 h-5" />
          Download Slides
        </a>
      </motion.div>
    </main>
  );
}
