
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";

const Videos = () => {
  // Sample video data - using the same one as homepage
  const videoData = {
    id: "1",
    title: "How Great Design Elevates User Experience",
    thumbnail: "https://images.unsplash.com/photo-1661961110671-77b71b929d52?auto=format&fit=crop&w=800&q=80",
    duration: "18:24",
    category: "Design",
    date: "Apr 8, 2023",
  };

  // Handle scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Videos Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Videos</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of informative and inspiring videos on design, photography, marketing, and more.
            </p>
          </div>
          
          {/* Single Featured Video */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="aspect-video relative overflow-hidden rounded-xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10" />
              <img
                src={videoData.thumbnail}
                alt={videoData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:bg-white transition-colors hover:scale-105 transform duration-300">
                  <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-primary ml-1"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-primary mb-4">
                  {videoData.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{videoData.title}</h2>
                <div className="flex items-center text-white/80">
                  <span className="text-sm">{videoData.duration}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{videoData.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Videos;
