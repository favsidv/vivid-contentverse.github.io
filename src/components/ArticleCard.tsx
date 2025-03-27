
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Clock, User } from "lucide-react";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  className?: string;
}

const ArticleCard = ({
  id,
  title,
  excerpt,
  coverImage,
  category,
  author,
  date,
  readTime,
  featured = false,
  className,
}: ArticleCardProps) => {
  return (
    <Link 
      to={`/article/${id}`}
      className={cn(
        "group block overflow-hidden rounded-lg bg-white card-hover transition-all duration-300",
        featured ? "md:grid md:grid-cols-2 md:gap-8" : "",
        className
      )}
    >
      <div 
        className={cn(
          "relative overflow-hidden h-52 md:h-64",
          featured && "md:h-full"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onLoad={(e) => e.currentTarget.classList.add('lazy-image')}
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-primary">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
