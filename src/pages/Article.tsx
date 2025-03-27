
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { User, Clock, Calendar, Share2, Bookmark, Heart } from "lucide-react";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample article data
  const article = {
    id: id,
    title: "The Evolution of Minimalist Design in Modern Digital Spaces",
    excerpt: "Exploring how less became more in the digital landscape and why simplicity continues to drive innovation in user experience and interface design.",
    content: `
      <p>In the ever-evolving landscape of digital design, minimalism has emerged not just as an aesthetic choice, but as a fundamental philosophy guiding user experience. The journey from cluttered interfaces to clean, purposeful designs reflects a deeper understanding of human psychology and interaction patterns.</p>
      
      <h2>The Origins of Digital Minimalism</h2>
      
      <p>The roots of minimalist design can be traced back to early 20th-century movements like Bauhaus and De Stijl, which emphasized functionality and simplicity. However, it wasn't until the digital revolution that these principles found a new canvas in user interfaces.</p>
      
      <p>Early websites and applications were often characterized by complex layouts, competing visual elements, and information overload. As users became increasingly overwhelmed, designers began to recognize the value of restraint.</p>
      
      <blockquote>
        <p>"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."</p>
        <cite>— Antoine de Saint-Exupéry</cite>
      </blockquote>
      
      <p>This shift toward digital minimalism wasn't merely aesthetic; it was backed by emerging research in cognitive psychology. Studies showed that users made decisions more quickly and reported higher satisfaction when interacting with simplified interfaces.</p>
      
      <h2>Key Principles of Modern Minimalist Design</h2>
      
      <p>Today's minimalist digital spaces are guided by several core principles:</p>
      
      <ul>
        <li><strong>Purposeful content hierarchy</strong>: Every element serves a clear purpose and is arranged according to its importance.</li>
        <li><strong>Negative space</strong>: The strategic use of empty space creates focus and reduces cognitive load.</li>
        <li><strong>Limited color palette</strong>: Restricted use of color emphasizes key elements and creates visual harmony.</li>
        <li><strong>Typography as hierarchy</strong>: Thoughtful type choices and sizing establish information importance without additional visual elements.</li>
        <li><strong>Contextual disclosure</strong>: Information is revealed progressively, when relevant to the user's current task.</li>
      </ul>
      
      <p>These principles have fundamentally transformed how we approach digital design, shifting focus from decoration to function, from quantity to quality.</p>
      
      <h2>The Impact on User Experience</h2>
      
      <p>Research consistently demonstrates that minimalist interfaces lead to improved user experiences. Load times decrease, comprehension increases, and users report greater satisfaction. Perhaps most importantly, conversion rates and engagement metrics typically improve when unnecessary elements are stripped away.</p>
      
      <p>This doesn't mean minimalist designs lack personality or brand expression. On the contrary, thoughtful simplicity often creates more memorable experiences by allowing distinctive elements to shine without competition.</p>
      
      <h2>Balancing Minimalism and Functionality</h2>
      
      <p>The greatest challenge in minimalist design is maintaining complete functionality while reducing visual complexity. This balancing act requires deep understanding of user needs and behaviors.</p>
      
      <p>Successful minimalist interfaces don't simply remove elements—they thoughtfully consolidate, simplify, and prioritize. Every design decision must be justified by user value, not aesthetic preference alone.</p>
      
      <h2>The Future of Minimalist Design</h2>
      
      <p>As digital experiences continue to evolve, minimalism is adapting as well. Emerging trends include:</p>
      
      <p><strong>Functional animation</strong>: Subtle motion provides context and guidance without adding visual clutter.</p>
      
      <p><strong>Adaptive minimalism</strong>: Interfaces that shift between simplified and detailed states based on user expertise and context.</p>
      
      <p><strong>Sensory minimalism</strong>: Designing for reduced cognitive load across all senses, including sound and haptic feedback.</p>
      
      <p>The enduring appeal of minimalist design suggests it's not merely a trend but a fundamental approach to human-centered design. As our digital world grows more complex, the clarity offered by thoughtful simplicity becomes not just appealing, but essential.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80",
    category: "Design",
    author: "Alex Johnson",
    authorImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
    authorBio: "Alex Johnson is a UX designer and design systems specialist with over 10 years of experience working with leading technology companies.",
    date: "April 12, 2023",
    readTime: "8 min read",
  };

  // Related articles
  const relatedArticles = [
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Article Hero */}
        <div className="w-full h-[50vh] relative">
          <div className="absolute inset-0">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
          </div>
          
          <div className="relative h-full max-w-4xl mx-auto px-4 flex flex-col justify-end pb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-primary mb-6">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="article-container">
          <div className="flex justify-end mb-8 space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Bookmark className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Share2 className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          
          <div className="article-text prose prose-lg prose-gray mx-auto"
               dangerouslySetInnerHTML={{ __html: article.content }}>
          </div>
          
          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-6">
              <img
                src={article.authorImage}
                alt={article.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-lg mb-2">{article.author}</h3>
                <p className="text-gray-600">{article.authorBio}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">More Articles You Might Enjoy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Article;
