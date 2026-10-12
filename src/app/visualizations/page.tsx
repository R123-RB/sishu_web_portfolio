"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ExternalLink, ChevronDown, ChevronUp, Search, Tag } from 'lucide-react';

interface Visualization {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  filename: string;
}

const visualizations: Visualization[] = [
  {
    id: 'bifurcation-atlas',
    title: 'Bifurcation Atlas — Logistic Map',
    description: 'Interactive bifurcation diagram of the logistic map with Feigenbaum constants computation, zoomable visualization, and visual guide for δ and α constants.',
    category: 'Dynamical Systems',
    tags: ['Bifurcation', 'Chaos', 'Feigenbaum', 'Logistic Map'],
    filename: 'Bifurcation_Atlas_Logistic_Map_with_Visual_Guide.html',
  },
  {
    id: 'singular-perturbations',
    title: 'Singular Perturbations — Julia Sets',
    description: 'Explore how adding a pole term ε/zⁿ to polynomial Julia sets (basilica, Douady rabbit, cubic rat) creates infinitely lacy new structures.',
    category: 'Complex Dynamics',
    tags: ['Julia Sets', 'Singular Perturbations', 'Complex Dynamics'],
    filename: 'singular_perturbations.html',
  },
  {
    id: 'chaos-game-explorer',
    title: 'Chaos Game Explorer',
    description: 'Interactive chaos game showing how random iteration produces fractals like the Sierpinski triangle. Explore different shapes, rules, and movement ratios.',
    category: 'Fractals & IFS',
    tags: ['Chaos Game', 'Sierpinski', 'Fractals', 'IFS'],
    filename: 'chaos-game-explorer.html',
  },
  {
    id: 'chaos-game-lab',
    title: 'Chaos Game Lab',
    description: 'Extended chaos game laboratory with multiple iteration rules, vertex configurations, and visualization options.',
    category: 'Fractals & IFS',
    tags: ['Chaos Game', 'Fractals', 'Iterated Function Systems'],
    filename: 'chaos-game-lab.html',
  },
  {
    id: 'ifs-explorer',
    title: 'IFS Explorer',
    description: 'Interactive exploration of Iterated Function Systems for generating fractals through affine transformations.',
    category: 'Fractals & IFS',
    tags: ['IFS', 'Fractals', 'Affine Transforms'],
    filename: 'ifs_explorer.html',
  },
  {
    id: 'iterated-function-systems-lab',
    title: 'Iterated Function Systems Lab',
    description: 'Comprehensive lab for designing and exploring IFS fractals with multiple transformations and probability weights.',
    category: 'Fractals & IFS',
    tags: ['IFS', 'Fractals', 'Laboratory'],
    filename: 'IteratedFunctionSystems-lab.html',
  },
  {
    id: 'mandelbrot-bifurcation-aligned',
    title: 'Mandelbrot Set & Bifurcation Diagram Aligned',
    description: 'Aligned visualization of the Mandelbrot set (complex c-plane) and the real orbit diagram (bifurcation diagram) sharing the same horizontal axis.',
    category: 'Complex Dynamics',
    tags: ['Mandelbrot', 'Bifurcation', 'Complex Dynamics'],
    filename: 'mandelbrot_bifurcation_aligned.html',
  },
  {
    id: 'julia-orbit-explorer',
    title: 'Julia Orbit Explorer',
    description: 'Explore orbits in Julia sets with interactive parameter selection and orbit visualization.',
    category: 'Complex Dynamics',
    tags: ['Julia Sets', 'Orbits', 'Complex Dynamics'],
    filename: 'julia_orbit_explorer.html',
  },
  {
    id: 'eigen-explorer',
    title: 'Eigenvectors & Eigenvalues Explorer',
    description: 'Visualize how 2×2 matrices transform the unit circle into an ellipse, with interactive eigenvector directions, eigenvalues, and diagonalization analysis.',
    category: 'Linear Algebra',
    tags: ['Eigenvalues', 'Eigenvectors', 'Linear Algebra', 'Matrix Transform'],
    filename: 'eigen-explorer.html',
  },
  {
    id: 'matrix-transformations',
    title: 'Matrix Transformations',
    description: 'Interactive exploration of 2D matrix transformations with geometric visualization.',
    category: 'Linear Algebra',
    tags: ['Matrix', 'Linear Transform', 'Geometry'],
    filename: 'matrix_transformations.html',
  },
  {
    id: 'matrix-transform-applet',
    title: 'Matrix Transform Applet',
    description: 'Visual applet for exploring linear transformations in 2D with matrix input and geometric effect.',
    category: 'Linear Algebra',
    tags: ['Matrix', 'Applet', 'Linear Algebra'],
    filename: 'matrix-transform-applet.html',
  },
  {
    id: 'linear-combination-explorer',
    title: 'Linear Combination Explorer',
    description: 'Visual exploration of linear combinations of vectors and span concepts.',
    category: 'Linear Algebra',
    tags: ['Linear Combination', 'Span', 'Vector Space'],
    filename: 'linear-combination-explorer.html',
  },
  {
    id: 'svd-applet',
    title: 'SVD Applet',
    description: 'Interactive Singular Value Decomposition visualization showing matrix decomposition UΣVᵀ.',
    category: 'Linear Algebra',
    tags: ['SVD', 'Matrix Decomposition', 'Linear Algebra'],
    filename: 'svd_applet.html',
  },
  {
    id: 'svd-image-compression',
    title: 'SVD Image Compression',
    description: 'Demonstration of image compression using Singular Value Decomposition with adjustable rank.',
    category: 'Linear Algebra',
    tags: ['SVD', 'Image Compression', 'Data Science'],
    filename: 'svd-image-compression.html',
  },
  {
    id: 'euler-hamiltonian-explorer',
    title: 'Euler & Hamiltonian Path Explorer',
    description: 'Interactive graph theory tool for finding Eulerian and Hamiltonian paths in graphs.',
    category: 'Graph Theory',
    tags: ['Graph Theory', 'Eulerian', 'Hamiltonian', 'Paths'],
    filename: 'euler-hamiltonian-explorer.html',
  },
  {
    id: 'graph-gallery',
    title: 'Graph Gallery',
    description: 'Collection of interesting graphs with visualizations and properties.',
    category: 'Graph Theory',
    tags: ['Graphs', 'Gallery', 'Networks'],
    filename: 'graph-gallery.html',
  },
  {
    id: 'embedded-quadratics',
    title: 'Embedded Quadratics',
    description: 'Visualization of quadratic maps and their embedded structures.',
    category: 'Dynamical Systems',
    tags: ['Quadratic Maps', 'Dynamical Systems'],
    filename: 'embedded_quadratics.html',
  },
  {
    id: 'period-tripling',
    title: 'Period Tripling Route to Chaos',
    description: 'Exploration of the period-tripling cascade as an alternative route to chaos.',
    category: 'Dynamical Systems',
    tags: ['Period Tripling', 'Chaos', 'Bifurcation'],
    filename: 'period_tripling.html',
  },
  {
    id: 'fundamental-dichotomy',
    title: 'Fundamental Dichotomy',
    description: 'Visualization of the fundamental dichotomy in dynamical systems: regular vs chaotic behavior.',
    category: 'Dynamical Systems',
    tags: ['Dichotomy', 'Regular vs Chaotic', 'Dynamical Systems'],
    filename: 'fundamental_dichotomy.html',
  },
  {
    id: 'cardioid-tracing',
    title: 'Cardioid Tracing',
    description: 'Interactive tracing of cardioid curves and their properties.',
    category: 'Geometry & Curves',
    tags: ['Cardioid', 'Curves', 'Geometry'],
    filename: 'cardioid_tracing.html',
  },
  {
    id: 'sierpinski-triangle-carpet',
    title: 'Sierpinski Triangle & Carpet',
    description: 'Construction and exploration of Sierpinski triangle and carpet fractals.',
    category: 'Fractals & IFS',
    tags: ['Sierpinski', 'Fractals', 'Self-Similarity'],
    filename: 'sierpinski_triangle_carpet.html',
  },
  {
    id: 'random-fractals-lab',
    title: 'Random Fractals Lab',
    description: 'Laboratory for generating and exploring random fractal structures.',
    category: 'Fractals & IFS',
    tags: ['Random Fractals', 'Stochastic', 'Laboratory'],
    filename: 'random_fractals_lab.html',
  },
  {
    id: 'z3-lambda-family',
    title: 'Z³ Lambda Family',
    description: 'Exploration of the cubic family z³ + λz and its dynamical behavior.',
    category: 'Complex Dynamics',
    tags: ['Cubic Maps', 'Lambda Family', 'Complex Dynamics'],
    filename: 'z3_lambda_family.html',
  },
  {
    id: 'binomial-distribution',
    title: 'Binomial Distribution Theory & Experiment',
    description: 'Interactive applet comparing theoretical binomial distribution with experimental results.',
    category: 'Statistics & Probability',
    tags: ['Binomial', 'Distribution', 'Statistics', 'Experiment'],
    filename: 'binomial_distribution_theory_experiment_applet.html',
  },
  {
    id: 'poisson-distribution',
    title: 'Poisson Distribution Theory & Experiment',
    description: 'Interactive applet comparing theoretical Poisson distribution with experimental results.',
    category: 'Statistics & Probability',
    tags: ['Poisson', 'Distribution', 'Statistics', 'Experiment'],
    filename: 'poisson_distribution_theory_experiment_applet.html',
  },
  {
    id: 'normal-distribution',
    title: 'Normal Distribution Theory & Experiment',
    description: 'Interactive applet comparing theoretical normal distribution with experimental results.',
    category: 'Statistics & Probability',
    tags: ['Normal', 'Gaussian', 'Distribution', 'Statistics', 'Experiment'],
    filename: 'normal_distribution_theory_experiment_applet.html',
  },
  {
    id: 'bias-variance-dartboard',
    title: 'Bias-Variance Tradeoff Dartboard',
    description: 'Visual demonstration of the bias-variance tradeoff using a dartboard analogy.',
    category: 'Statistics & Probability',
    tags: ['Bias-Variance', 'Machine Learning', 'Statistics'],
    filename: 'bias_variance_dartboard_applet.html',
  },
  {
    id: 'figure-17-7-before-after',
    title: 'Figure 17.7 Before/After',
    description: 'Visual comparison showing before and after states for a dynamical systems concept.',
    category: 'Dynamical Systems',
    tags: ['Comparison', 'Dynamical Systems'],
    filename: 'figure_17_7_before_after.html',
  },
];

const categories = ['All', 'Dynamical Systems', 'Complex Dynamics', 'Fractals & IFS', 'Linear Algebra', 'Graph Theory', 'Geometry & Curves', 'Statistics & Probability'];

export default function VisualizationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const filteredVisualizations = visualizations.filter((viz) => {
    const matchesCategory = selectedCategory === 'All' || viz.category === selectedCategory;
    const matchesSearch = 
      viz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      viz.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      viz.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <Section id="visualizations" title="Visualizations" subtitle="Interactive mathematical visualizations and explorations for dynamical systems, fractals, linear algebra, and statistics.">
      <div className="w-full max-w-7xl mx-auto">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-blue-500/30'
                    : 'bg-zinc-900 text-gray-300 border border-zinc-800 hover:border-primary hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search visualizations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </motion.div>

        {/* Visualization Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVisualizations.map((viz, index) => (
            <motion.div
              key={viz.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="p-6 h-full flex flex-col group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <span className="text-xs font-medium text-primary mb-2 block uppercase tracking-wider">
                      {viz.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {viz.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => toggleExpanded(viz.id)}
                    className="p-2 text-gray-400 hover:text-white transition-colors shrink-0"
                    aria-label={expandedItems.has(viz.id) ? 'Collapse' : 'Expand'}
                  >
                    {expandedItems.has(viz.id) ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <p className="text-gray-400 text-sm mb-4 flex-1">{viz.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {viz.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-900 text-gray-400 text-xs border border-zinc-800"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                  {viz.tags.length > 4 && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-zinc-900 text-gray-500 text-xs border border-zinc-800">
                      +{viz.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: expandedItems.has(viz.id) ? 1 : 0, height: expandedItems.has(viz.id) ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-zinc-800 space-y-3">
                    <a
                      href={`/visualizations/${viz.filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors w-full justify-center"
                    >
                      Open Visualization
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={`/visualizations/${viz.filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-gray-300 border border-zinc-800 rounded-lg font-medium hover:border-primary hover:text-white transition-colors w-full justify-center"
                    >
                      Open in New Tab
                    </a>
                  </div>
                </motion.div>

                {/* Quick Action when collapsed */}
                {!expandedItems.has(viz.id) && (
                  <a
                    href={`/visualizations/${viz.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Open
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </Card>
            </motion.div>
          ))}

          {filteredVisualizations.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-20"
            >
              <p className="text-gray-500 text-lg">No visualizations found matching your criteria.</p>
            </motion.div>
          )}
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-zinc-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">{visualizations.length}</p>
              <p className="text-gray-400 text-sm">Total Visualizations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">{categories.length - 1}</p>
              <p className="text-gray-400 text-sm">Categories</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-400">
                {visualizations.reduce((acc, v) => acc + v.tags.length, 0)}
              </p>
              <p className="text-gray-400 text-sm">Tags Across All</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}