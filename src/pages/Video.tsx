
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { User, Calendar, Share2, Bookmark, Heart, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";

const Video = () => {
  const { id } = useParams<{ id: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample video data
  const video = {
    id: id,
    title: "How Great Design Elevates User Experience",
    description: "An in-depth exploration of how thoughtful design choices can transform ordinary digital experiences into memorable interactions that build brand loyalty and user satisfaction.",
    videoUrl: "https://player.vimeo.com/video/499506000?title=0&byline=0&portrait=0",
    thumbnail: "https://images.unsplash.com/photo-1661961110671-77b71b929d52?auto=format&fit=crop&w=2000&q=80",
    duration: "18:24",
    category: "Design",
    creator: "Emma Wilson",
    creatorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    creatorBio: "Emma Wilson is a senior UX designer and educator with a focus on creating intuitive, accessible digital experiences.",
    date: "Apr 8, 2023",
    views: "24,651",
    likes: 1842,
    dislikes: 34,
    comments: 216,
  };

  // Related videos
  const relatedVideos = [
    {
      id: "2",
      title: "Behind the Scenes: Creating Cinematic Content",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      duration: "24:15",
      category: "Video",
      date: "Mar 29, 2023",
    },
    {
      id: "3",
      title: "The Future of Interactive Storytelling",
      thumbnail: "https://images.unsplash.com/photo-1621600411688-4be93c2c1208?auto=format&fit=crop&w=800&q=80",
      duration: "14:37",
      category: "Digital Media",
      date: "Apr 4, 2023",
    },
    {
      id: "4",
      title: "Mastering Light in Photography",
      thumbnail: "https://images.unsplash.com/photo-1520549233664-03f65c1d1327?auto=format&fit=crop&w=800&q=80",
      duration: "21:08",
      category: "Photography",
      date: "Mar 15, 2023",
    },
    {
      id: "5",
      title: "Typography Fundamentals for Designers",
      thumbnail: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800&q=80",
      duration: "16:42",
      category: "Design",
      date: "Apr 10, 2023",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Video Player */}
          <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-xl mb-8">
            <iframe 
              src={`${video.videoUrl}?autoplay=${isPlaying ? 1 : 0}&muted=0`}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={video.title}
              onLoad={() => setIsPlaying(true)}
            ></iframe>
          </div>
          
          <div className="md:grid md:grid-cols-3 md:gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Video Info */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    {video.category}
                  </span>
                  <span className="text-sm text-gray-500">{video.views} views</span>
                </div>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{video.title}</h1>
                <p className="text-gray-600 mb-6">{video.description}</p>
                
                <div className="flex flex-wrap items-center justify-between gap-y-4 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <img
                      src={video.creatorImage}
                      alt={video.creator}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{video.creator}</p>
                      <p className="text-sm text-gray-500">{video.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      <span>{video.likes}</span>
                    </button>
                    <button className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <ThumbsDown className="h-4 w-4 mr-2" />
                      <span>{video.dislikes}</span>
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Creator Bio */}
              <div className="p-6 bg-gray-50 rounded-xl mb-8">
                <h3 className="font-bold text-lg mb-2">About the Creator</h3>
                <p className="text-gray-600">{video.creatorBio}</p>
              </div>
              
              {/* Comments Section */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <h3 className="font-bold text-lg">Comments</h3>
                  <span className="text-sm text-gray-500">{video.comments}</span>
                </div>
                
                <div className="mb-6 flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="Add a comment..." 
                      className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                
                {/* Sample comments */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&q=80"
                      alt="User"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">Jason Miller</span>
                        <span className="text-xs text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-gray-800 mb-2">This video changed how I approach my design work. The section on cognitive load was particularly insightful.</p>
                      <div className="flex items-center text-sm text-gray-500 gap-4">
                        <button className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" /> 24
                        </button>
                        <button className="flex items-center gap-1">
                          <ThumbsDown className="h-4 w-4" /> 2
                        </button>
                        <button>Reply</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&w=100&q=80"
                      alt="User"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">Sarah Johnson</span>
                        <span className="text-xs text-gray-500">1 week ago</span>
                      </div>
                      <p className="text-gray-800 mb-2">Emma always delivers quality content. I've been following her work for years and can't recommend her videos enough to anyone interested in UX design.</p>
                      <div className="flex items-center text-sm text-gray-500 gap-4">
                        <button className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" /> 57
                        </button>
                        <button className="flex items-center gap-1">
                          <ThumbsDown className="h-4 w-4" /> 0
                        </button>
                        <button>Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar - Related Videos */}
            <div className="mt-12 md:mt-0">
              <h3 className="font-bold text-lg mb-6">Related Videos</h3>
              <div className="space-y-6">
                {relatedVideos.map((video) => (
                  <VideoCard
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    thumbnail={video.thumbnail}
                    duration={video.duration}
                    category={video.category}
                    date={video.date}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Video;
