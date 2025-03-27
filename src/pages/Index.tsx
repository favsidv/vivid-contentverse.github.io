
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedContent from "@/components/FeaturedContent";
import ArticleCard from "@/components/ArticleCard";
import VideoCard from "@/components/VideoCard";
import { ChevronRight } from "lucide-react";

const Index = () => {
  // Sample data for the homepage
  const featuredArticle = {
    id: "1",
    title: "The Evolution of Minimalist Design in Modern Digital Spaces",
    excerpt: "Exploring how less became more in the digital landscape and why simplicity continues to drive innovation in user experience and interface design.",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80",
    category: "Design",
    author: "Alex Johnson",
    date: "April 12, 2023",
    readTime: "8 min read",
  };

  const article = {
    id: "2",
    title: "The Psychology Behind Effective Content Creation",
    excerpt: "Understanding how our brains process information can help create more engaging and memorable content.",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    category: "Content",
    author: "Mia Roberts",
    date: "March 24, 2023",
    readTime: "6 min read",
  };

  const video = {
    id: "1",
    title: "How Great Design Elevates User Experience",
    thumbnail: "https://images.unsplash.com/photo-1661961110671-77b71b929d52?auto=format&fit=crop&w=800&q=80",
    duration: "18:24",
    category: "Design",
    date: "Apr 8, 2023",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="mb-16 md:mb-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <FeaturedContent
              id={featuredArticle.id}
              title={featuredArticle.title}
              excerpt={featuredArticle.excerpt}
              coverImage={featuredArticle.coverImage}
              category={featuredArticle.category}
              author={featuredArticle.author}
              date={featuredArticle.date}
              readTime={featuredArticle.readTime}
              className="h-[70vh] min-h-[600px]"
            />
          </div>
        </section>

        {/* Latest Article Section */}
        <section className="mb-16 md:mb-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Latest Article</h2>
              <Link 
                to="/articles" 
                className="flex items-center text-sm font-medium text-primary hover:underline"
              >
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="max-w-3xl mx-auto">
              <ArticleCard
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                coverImage={article.coverImage}
                category={article.category}
                author={article.author}
                date={article.date}
                readTime={article.readTime}
              />
            </div>
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="mb-16 md:mb-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Video</h2>
              <Link 
                to="/videos" 
                className="flex items-center text-sm font-medium text-primary hover:underline"
              >
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="max-w-3xl mx-auto">
              <VideoCard
                id={video.id}
                title={video.title}
                thumbnail={video.thumbnail}
                duration={video.duration}
                category={video.category}
                date={video.date}
              />
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="px-4 md:px-6 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-6">
                Subscribe to get the latest content, updates, and exclusive offers delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
