import React, { FC } from "react";
const VideoDemo: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 py-16 md:py-24 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">See Our Platform in Action</h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">Watch a short demonstration to understand how our solution can transform your daily operations.</p>
        <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <video
            className="w-full h-auto"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            poster="https://images.unsplash.com/photo-1600861111003-d64070a79744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            controls
            preload="metadata"
            playsInline
            loop
            muted
            aria-label="Product demonstration video"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};
export default VideoDemo;