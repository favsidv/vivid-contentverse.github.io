import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [sortBy, setSortBy] = useState("latest");
  
  // Sample articles data
  const articlesData = [
    {
      id: "1",
      title: "The Evolution of Minimalist Design in Modern Digital Spaces",
      excerpt: "Exploring how less became more in the digital landscape and why simplicity continues to drive innovation in user experience and interface design.",
      coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      category: "Design",
      author: "Alex Johnson",
      date: "April 12, 2023",
      readTime: "8 min read",
    },
    {
      id: "2",
      title: "The Psychology Behind Effective Content Creation",
      excerpt: "Understanding how our brains process information can help create more engaging and memorable content.",
      coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      category: "Content",
      author: "Mia Roberts",
      date: "March 24, 2023",
      readTime: "6 min read",
    },
    {
      id: "3",
      title: "Sustainable Technology: Building for the Future",
      excerpt: "How eco-friendly practices are shaping the next generation of technological innovation.",
      coverImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      category: "Technology",
      author: "David Chen",
      date: "April 2, 2023",
      readTime: "7 min read",
    },
    {
      id: "4",
      title: "Visual Storytelling in the Digital Age",
      excerpt: "The power of imagery in creating compelling narratives that resonate with modern audiences.",
      coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      category: "Visual Arts",
      author: "Sofia Garcia",
      date: "March 18, 2023",
      readTime: "5 min read",
    },
    {
      id: "5",
      title: "The Art of Typography in Web Design",
      excerpt: "How thoughtful type choices can dramatically improve readability, accessibility, and user engagement.",
      coverImage: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800&q=80",
      category: "Design",
      author: "Jackson Lee",
      date: "April 5, 2023",
      readTime: "9 min read",
    },
    {
      id: "6",
      title: "Digital Accessibility: Building for Everyone",
      excerpt: "Creating inclusive experiences that work for users of all abilities is not just ethical — it's good business.",
      coverImage: "https://images.unsplash.com/photo-1573496130407-57329f01f769?auto=format&fit=crop&w=800&q=80",
      category: "Accessibility",
      author: "Elena Sharma",
      date: "March 30, 2023",
      readTime: "7 min read",
    },
    {
      id: "7",
      title: "The Science of Color in Visual Media",
      excerpt: "Understanding how color psychology affects perception and emotions in digital and print environments.",
      coverImage: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&w=800&q=80",
      category: "Visual Arts",
      author: "Olivia Martinez",
      date: "April 8, 2023",
      readTime: "6 min read",
    },
    {
      id: "8",
      title: "Content Strategy for Emerging Platforms",
      excerpt: "Adapting your approach for new media formats while maintaining brand consistency and audience engagement.",
      coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      category: "Content",
      author: "Ethan Park",
      date: "March 22, 2023",
      readTime: "8 min read",
    },
    {
      id: "9",
      title: "The Future of Artificial Intelligence in Creative Fields",
      excerpt: "How AI is transforming content creation, design workflows, and creative collaboration.",
      coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad695?auto=format&fit=crop&w=800&q=80",
      category: "Technology",
      author: "Lucas Wilson",
      date: "April 10, 2023",
      readTime: "10 min read",
    },
  ];

  // Filter articles based on search query
  const filteredArticles = articlesData.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort articles based on selection
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === "latest") {
      // Assuming dates are in format "Month Day, Year"
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === "readTime") {
      // Extract number from "X min read"
      const aTime = parseInt(a.readTime.split(" ")[0]);
      const bTime = parseInt(b.readTime.split(" ")[0]);
      return aTime - bTime;
    }
    return 0;
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
          {/* Articles Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Articles</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Deep dives, insightful analyses, and thought-provoking perspectives on design, technology, content, and creativity.
            </p>
          </div>
          
          {/* Search and Filter */}
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
              
              <div className="w-full md:w-48">
                <Select
                  value={sortBy}
                  onValueChange={(value) => setSortBy(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="readTime">Reading Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Featured Article */}
          {sortedArticles.length > 0 && (
            <div className="mb-12">
              <ArticleCard
                id={sortedArticles[0].id}
                title={sortedArticles[0].title}
                excerpt={sortedArticles[0].excerpt}
                coverImage={sortedArticles[0].coverImage}
                category={sortedArticles[0].category}
                author={sortedArticles[0].author}
                date={sortedArticles[0].date}
                readTime={sortedArticles[0].readTime}
                featured={true}
              />
            </div>
          )}
          
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedArticles.slice(1).map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                coverImage={article.coverImage}
                category={article.category}
                author={article.author}
                date={article.date}
                readTime={article.readTime}
              />
            ))}
          </div>
          
          {/* Empty State */}
          {sortedArticles.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or browse all categories.
              </p>
              <button
                onClick={clearSearch}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Articles;
