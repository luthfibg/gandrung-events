// src/components/VideoBackground.jsx

import React from 'react';

const VideoBackground = ({ videoSource }) => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <video
        className="w-full h-full object-cover"
        src={videoSource}
        autoPlay
        loop
        muted
        playsInline // untuk perangkat seluler
      >
        Browser Anda tidak mendukung tag video.
      </video>
      
      {/* Overlay gelap untuk visibilitas teks */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
  );
};

export default VideoBackground;