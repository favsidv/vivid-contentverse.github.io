import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // Sample article data - just keeping one article
  const articleData = {
    id: "1",
    title: "The Evolution of Minimalist Design in Modern Digital Spaces",
    excerpt: "Exploring how less became more in the digital landscape and why simplicity continues to drive innovation in user experience and interface design.",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    category: "Design",
    author: "Alex Johnson",
    date: "April 12, 2023",
    readTime: "8 min read",
  };

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
          {/* Articles Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Articles</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Deep dives, insightful analyses, and thought-provoking perspectives on design, technology, content, and creativity.
            </p>
          </div>
          
          {/* Search */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search articles..."
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
            </div>
          </div>
          
          {/* Featured Article - Now the only article */}
          <div className="mb-12 max-w-4xl mx-auto">
            <ArticleCard
              id={articleData.id}
              title={articleData.title}
              excerpt={articleData.excerpt}
              coverImage={articleData.coverImage}
              category={articleData.category}
              author={articleData.author}
              date={articleData.date}
              readTime={articleData.readTime}
              featured={true}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Articles;
