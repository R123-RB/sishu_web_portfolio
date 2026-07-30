import { PlaySquare } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'YouTube Playlists | Dr. Sishu Shankar Muni',
  description: 'Educational content and playlists on Data Science, AI, and Computational Science.',
};

const playlists = [
  {
    id: 1,
    title: "Computational Nonlinear Dynamics-2026",
    videoCount: 3,
    link: "https://youtube.com/@chaos_sishu?si=wOWe_pP9HBj1tj02",
    updated: "View full playlist",
    bg: "from-blue-900 to-slate-900"
  },
  {
    id: 2,
    title: "Semantic Web and Social Network Analysis",
    videoCount: 11,
    link: "https://youtube.com/@chaos_sishu?si=wOWe_pP9HBj1tj02",
    updated: "Updated yesterday",
    bg: "from-purple-900 to-slate-900"
  },
  {
    id: 3,
    title: "Numerical Methods 2026",
    videoCount: 13,
    link: "https://youtube.com/@chaos_sishu?si=wOWe_pP9HBj1tj02",
    updated: "View full playlist",
    bg: "from-emerald-900 to-slate-900"
  },
  {
    id: 4,
    title: "Introduction to Data Analytics",
    videoCount: 20,
    link: "https://youtube.com/@chaos_sishu?si=wOWe_pP9HBj1tj02",
    updated: "View full playlist",
    bg: "from-amber-900 to-slate-900"
  },
  {
    id: 5,
    title: "2025-ComputationalNonlinearDynami...",
    videoCount: 15,
    link: "https://youtube.com/@chaos_sishu?si=wOWe_pP9HBj1tj02",
    updated: "View full playlist",
    bg: "from-rose-900 to-slate-900"
  },
  {
    id: 6,
    title: "Numerical Methods for Deep Learning (2025)",
    videoCount: 21,
    link: "https://youtube.com/@chaos_sishu?si=wOWe_pP9HBj1tj02",
    updated: "View full playlist",
    bg: "from-indigo-900 to-slate-900"
  },
  {
    id: 7,
    title: "Introduction to Computational Science (2024)",
    videoCount: 33,
    link: "https://youtube.com/@chaos_sishu?si=wOWe_pP9HBj1tj02",
    updated: "View full playlist",
    bg: "from-cyan-900 to-slate-900"
  },
  {
    id: 8,
    title: "Computational Nonlinear Dynamics(2024)",
    videoCount: 28,
    link: "https://youtube.com/@chaos_sishu?si=wOWe_pP9HBj1tj02",
    updated: "View full playlist",
    bg: "from-teal-900 to-slate-900"
  },
  {
    id: 9,
    title: "Research_Nonlinear_Dynamics",
    videoCount: 17,
    link: "https://youtube.com/@chaos_sishu?si=wOWe_pP9HBj1tj02",
    updated: "View full playlist",
    bg: "from-fuchsia-900 to-slate-900"
  },
  {
    id: 10,
    title: "Numerical Methods For Computational Science 2024",
    videoCount: 18,
    link: "https://youtube.com/@chaos_sishu?si=wOWe_pP9HBj1tj02",
    updated: "View full playlist",
    bg: "from-orange-900 to-slate-900"
  }
];

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function YouTubePage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="w-full flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 flex items-center gap-4">
            <YoutubeIcon className="w-10 h-10 text-red-500" />
            Educational Content
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Explore complete courses and lecture series from my YouTube channel, focusing on Data Science, AI, and Computational Science.
          </p>
        </div>
        <a 
          href="https://youtube.com/@chaos_sishu?si=wOWe_pP9HBj1tj02" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 md:mt-0 inline-flex items-center justify-center px-6 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
        >
          Subscribe to Channel
        </a>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
        {playlists.map((playlist) => (
          <a 
            key={playlist.id} 
            href={playlist.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            {/* Thumbnail Placeholder */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-3 border border-zinc-800 bg-zinc-900 group-hover:border-zinc-600 transition-colors">
              {/* Fake thumbnail background to resemble slides/notes */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-40 ${playlist.bg}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlaySquare className="w-12 h-12 text-white/50 group-hover:text-white/80 transition-colors group-hover:scale-110 duration-300" />
              </div>
              
              {/* Overlay with video count (YouTube style) */}
              <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded flex items-center gap-1.5">
                <PlaySquare className="w-3 h-3" />
                {playlist.videoCount} videos
              </div>
            </div>

            {/* Playlist Info */}
            <div className="flex flex-col pr-6">
              <h3 className="text-zinc-100 font-semibold text-base leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
                {playlist.title}
              </h3>
              <p className="text-zinc-400 text-sm">
                Chaos by Sishu
              </p>
              <p className="text-zinc-500 text-xs mt-0.5">
                {playlist.updated}
              </p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
