
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Heart } from "lucide-react";

interface ImageCardProps {
  id: string;
  image: string;
  title: string;
  likes: number;
  className?: string;
}

const ImageCard = ({ id, image, title, likes, className }: ImageCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg card-hover transition-all duration-300 bg-gray-100",
        className
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={image}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
            !isLoaded && "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-lg font-medium line-clamp-2">{title}</h3>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors mr-2 shadow-md"
            aria-label="View full image"
          >
            <Search className="h-5 w-5 text-gray-800" />
          </button>
        </div>
        
        <button
          onClick={handleLike}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
          aria-label={isLiked ? "Unlike" : "Like"}
        >
          <Heart
            className={cn(
              "h-5 w-5 transition-colors",
              isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
            )}
          />
        </button>
      </div>
      
      <div className="absolute bottom-3 left-3 px-2.5 py-1 text-xs bg-white/80 backdrop-blur-sm rounded-full text-gray-800 flex items-center">
        <Heart className="h-3.5 w-3.5 mr-1 text-gray-700" />
        <span>{likeCount}</span>
      </div>
    </div>
  );
};

export default ImageCard;
