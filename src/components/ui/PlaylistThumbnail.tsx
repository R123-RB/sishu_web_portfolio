"use client";

import React, { useState } from 'react';

interface PlaylistThumbnailProps {
  image?: string;
  title: string;
  bgClass: string;
}

export const PlaylistThumbnail = ({ image, title, bgClass }: PlaylistThumbnailProps) => {
  const [error, setError] = useState(false);

  return (
    <>
      {/* Background gradient (Fallback if image missing or errored) */}
      <div className={`absolute inset-0 bg-gradient-to-br opacity-40 ${bgClass}`} />
      
      {/* Cover Image */}
      {image && !error && (
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105"
          onError={() => setError(true)}
        />
      )}
    </>
  );
};
