
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";

const Articles = () => {
  // Sample article data - using the same one as homepage
  const articleData = {
    id: "2",
    title: "The Psychology Behind Effective Content Creation",
    excerpt: "Understanding how our brains process information can help create more engaging and memorable content.",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    category: "Content",
    author: "Mia Roberts",
    date: "March 24, 2023",
    readTime: "6 min read",
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
          
          {/* Single Article */}
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
