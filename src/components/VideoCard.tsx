
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Play, Clock } from "lucide-react";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
  date: string;
  featured?: boolean;
  className?: string;
}

const VideoCard = ({
  id,
  title,
  thumbnail,
  duration,
  category,
  date,
  featured = false,
  className,
}: VideoCardProps) => {
  return (
    <Link
      to={`/video/${id}`}
      className={cn(
        "group block overflow-hidden rounded-lg bg-white card-hover transition-all duration-300",
        className
      )}
    >
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Play className="h-8 w-8 text-primary fill-primary" />
          </div>
        </div>
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onLoad={(e) => e.currentTarget.classList.add('lazy-image')}
        />
        <div className="absolute bottom-3 right-3 z-10">
          <span className="px-2 py-1 text-xs font-semibold rounded bg-black/75 text-white">
            {duration}
          </span>
        </div>
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-primary">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
