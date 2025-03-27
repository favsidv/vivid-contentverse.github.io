
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

const Videos = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("all");
  
  // Sample videos data
  const videosData = [
    {
      id: "1",
      title: "How Great Design Elevates User Experience",
      thumbnail: "https://images.unsplash.com/photo-1661961110671-77b71b929d52?auto=format&fit=crop&w=800&q=80",
      duration: "18:24",
      category: "Design",
      date: "Apr 8, 2023",
    },
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
    {
      id: "6",
      title: "Color Theory in Digital Media",
      thumbnail: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&w=800&q=80",
      duration: "19:56",
      category: "Design",
      date: "Mar 25, 2023",
    },
    {
      id: "7",
      title: "Sustainable Design Practices",
      thumbnail: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&w=800&q=80",
      duration: "22:31",
      category: "Design",
      date: "Apr 6, 2023",
    },
    {
      id: "8",
      title: "Motion Graphics Fundamentals",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      duration: "28:19",
      category: "Animation",
      date: "Mar 18, 2023",
    },
    {
      id: "9",
      title: "Documentary Filmmaking Techniques",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      duration: "32:47",
      category: "Video",
      date: "Apr 1, 2023",
    },
    {
      id: "10",
      title: "Building a Personal Brand Online",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      duration: "16:08",
      category: "Marketing",
      date: "Mar 27, 2023",
    },
    {
      id: "11",
      title: "Social Media Content Strategy",
      thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
      duration: "23:15",
      category: "Marketing",
      date: "Apr 9, 2023",
    },
    {
      id: "12",
      title: "Artificial Intelligence in Creative Industries",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad695?auto=format&fit=crop&w=800&q=80",
      duration: "26:42",
      category: "Technology",
      date: "Mar 22, 2023",
    },
  ];

  // Get unique categories for filter
  const categories = ["all", ...Array.from(new Set(videosData.map(video => video.category)))];

  // Filter videos based on search query and category
  const filteredVideos = videosData.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          video.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || video.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Function to clear search
  const clearSearch = () => {
    setSearchQuery("");
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
          
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className={`pl-10 transition-all duration-300 ${
                    isSearchFocused ? "ring-2 ring-primary/50" : ""
                  }`}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
              
              <div className="w-full md:w-48">
                <Select
                  value={categoryFilter}
                  onValueChange={(value) => setCategoryFilter(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Featured Video - Display first video with larger size */}
          {filteredVideos.length > 0 && (
            <div className="mb-12">
              <div className="aspect-video relative overflow-hidden rounded-xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10" />
                <img
                  src={filteredVideos[0].thumbnail}
                  alt={filteredVideos[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:bg-white transition-colors hover:scale-105 transform duration-300">
                    <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-primary ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-primary mb-4">
                    {filteredVideos[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{filteredVideos[0].title}</h2>
                  <div className="flex items-center text-white/80">
                    <span className="text-sm">{filteredVideos[0].duration}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{filteredVideos[0].date}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.slice(1).map((video) => (
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
          
          {/* Empty State */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No videos found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or changing the category filter.
              </p>
              <div className="flex gap-4 justify-center mt-6">
                <button
                  onClick={clearSearch}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Clear Search
                </button>
                <button
                  onClick={() => setCategoryFilter("all")}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Show All Categories
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Videos;
