
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCard from "@/components/ImageCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // Sample image data
  const images = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=800&q=80",
      title: "Urban Architecture",
      likes: 254,
      category: "architecture",
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1673468133059-c6046c365eef?auto=format&fit=crop&w=800&q=80",
      title: "Natural Landscapes",
      likes: 187,
      category: "nature",
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
      title: "Abstract Minimalism",
      likes: 142,
      category: "abstract",
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?auto=format&fit=crop&w=800&q=80",
      title: "Macro Photography",
      likes: 203,
      category: "macro",
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80",
      title: "Cityscape at Night",
      likes: 312,
      category: "architecture",
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
      title: "Mountain Explorations",
      likes: 275,
      category: "nature",
    },
    {
      id: "7",
      image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=800&q=80",
      title: "Streets of Paris",
      likes: 189,
      category: "travel",
    },
    {
      id: "8",
      image: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=800&q=80",
      title: "Desert Sands",
      likes: 167,
      category: "nature",
    },
    {
      id: "9",
      image: "https://images.unsplash.com/photo-1675250482111-d0c76a1b9c65?auto=format&fit=crop&w=800&q=80",
      title: "Geometric Shapes",
      likes: 125,
      category: "abstract",
    },
    {
      id: "10",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80",
      title: "Snowcapped Mountains",
      likes: 234,
      category: "nature",
    },
    {
      id: "11",
      image: "https://images.unsplash.com/photo-1581252584735-1290561c0ad6?auto=format&fit=crop&w=800&q=80",
      title: "Coastal Views",
      likes: 211,
      category: "travel",
    },
    {
      id: "12",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
      title: "Fashion Portrait",
      likes: 287,
      category: "portrait",
    },
    {
      id: "13",
      image: "https://images.unsplash.com/photo-1541845157-a6d2d100c931?auto=format&fit=crop&w=800&q=80",
      title: "Historical Buildings",
      likes: 198,
      category: "architecture",
    },
    {
      id: "14",
      image: "https://images.unsplash.com/photo-1460904577254-b2b76d49dbce?auto=format&fit=crop&w=800&q=80",
      title: "Wildlife Close-up",
      likes: 245,
      category: "macro",
    },
    {
      id: "15",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
      title: "Studio Lighting",
      likes: 176,
      category: "portrait",
    },
    {
      id: "16",
      image: "https://images.unsplash.com/photo-1515982200576-f29f647ad84d?auto=format&fit=crop&w=800&q=80",
      title: "Street Photography",
      likes: 222,
      category: "travel",
    },
  ];

  // Filter images based on search query
  const filteredImages = images.filter(image => 
    image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    image.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          {/* Gallery Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Image Gallery</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of stunning images spanning architecture, nature, abstract art, and more.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search by title or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className={`pl-10 pr-10 py-6 transition-all duration-300 ${
                    isSearchFocused ? "ring-2 ring-primary/50" : ""
                  }`}
                />
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
          
          {/* Gallery Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <div className="flex justify-center">
              <TabsList className="bg-gray-100 p-1">
                <TabsTrigger value="all" className="px-5 py-2">All</TabsTrigger>
                <TabsTrigger value="architecture" className="px-5 py-2">Architecture</TabsTrigger>
                <TabsTrigger value="nature" className="px-5 py-2">Nature</TabsTrigger>
                <TabsTrigger value="abstract" className="px-5 py-2">Abstract</TabsTrigger>
                <TabsTrigger value="portrait" className="px-5 py-2">Portrait</TabsTrigger>
                <TabsTrigger value="travel" className="px-5 py-2">Travel</TabsTrigger>
                <TabsTrigger value="macro" className="px-5 py-2">Macro</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredImages.map((image) => (
                  <ImageCard
                    key={image.id}
                    id={image.id}
                    image={image.image}
                    title={image.title}
                    likes={image.likes}
                  />
                ))}
              </div>
            </TabsContent>
            
            {["architecture", "nature", "abstract", "portrait", "travel", "macro"].map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredImages
                    .filter((image) => image.category === category)
                    .map((image) => (
                      <ImageCard
                        key={image.id}
                        id={image.id}
                        image={image.image}
                        title={image.title}
                        likes={image.likes}
                      />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
