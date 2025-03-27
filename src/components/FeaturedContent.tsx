
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Clock, User, ArrowRight } from "lucide-react";

interface FeaturedContentProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  className?: string;
}

const FeaturedContent = ({
  id,
  title,
  excerpt,
  coverImage,
  category,
  author,
  date,
  readTime,
  className,
}: FeaturedContentProps) => {
  return (
    <div className={cn("relative overflow-hidden rounded-xl", className)}>
      <div className="absolute inset-0">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager"
          onLoad={(e) => e.currentTarget.classList.add('lazy-image')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 lg:p-12">
        <div className="animate-slide-in [animation-delay:200ms]">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-primary mb-4">
            {category}
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white animate-slide-in [animation-delay:300ms] max-w-4xl">
          {title}
        </h2>
        
        <p className="text-lg text-white/80 mb-6 max-w-3xl animate-slide-in [animation-delay:400ms]">
          {excerpt}
        </p>
        
        <div className="flex flex-wrap items-center justify-between gap-y-4 animate-slide-in [animation-delay:500ms]">
          <div className="flex items-center text-sm text-white/80 space-x-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{author}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{readTime}</span>
            </div>
          </div>
          
          <Link
            to={`/article/${id}`}
            className="inline-flex items-center justify-center font-medium text-white hover:text-white/80 transition-colors"
          >
            Read Article
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
