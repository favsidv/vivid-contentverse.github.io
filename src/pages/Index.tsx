
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedContent from "@/components/FeaturedContent";
import ArticleCard from "@/components/ArticleCard";
import VideoCard from "@/components/VideoCard";
import ImageCard from "@/components/ImageCard";
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

  const articles = [
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
  ];

  const videos = [
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
  ];

  const images = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=800&q=80",
      title: "Urban Architecture",
      likes: 254,
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1673468133059-c6046c365eef?auto=format&fit=crop&w=800&q=80",
      title: "Natural Landscapes",
      likes: 187,
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
      title: "Abstract Minimalism",
      likes: 142,
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?auto=format&fit=crop&w=800&q=80",
      title: "Macro Photography",
      likes: 203,
    },
  ];

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

        {/* Latest Articles Section */}
        <section className="mb-16 md:mb-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
              <Link 
                to="/articles" 
                className="flex items-center text-sm font-medium text-primary hover:underline"
              >
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {articles.map((article) => (
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
          </div>
        </section>

        {/* Featured Videos Section */}
        <section className="mb-16 md:mb-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Videos</h2>
              <Link 
                to="/videos" 
                className="flex items-center text-sm font-medium text-primary hover:underline"
              >
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video) => (
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
        </section>

        {/* Gallery Preview Section */}
        <section className="mb-16 md:mb-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Explore Gallery</h2>
              <Link 
                to="/gallery" 
                className="flex items-center text-sm font-medium text-primary hover:underline"
              >
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((image) => (
                <ImageCard
                  key={image.id}
                  id={image.id}
                  image={image.image}
                  title={image.title}
                  likes={image.likes}
                />
              ))}
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
