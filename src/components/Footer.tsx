
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter">
              Contentverse
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              A beautiful content platform featuring curated articles, videos, and images 
              designed with attention to detail and aesthetic excellence.
            </p>
            <div className="flex space-x-5 mt-6">
              <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-600 hover:text-primary transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-gray-600 hover:text-primary transition-colors">
                  Videos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Subscribe
            </h3>
            <p className="mt-4 text-gray-600">
              Get the latest updates from our team.
            </p>
            <div className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="appearance-none min-w-0 w-full bg-white border border-gray-300 py-2 px-4 text-base rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 bg-primary px-4 py-2 border border-transparent text-base font-medium rounded-r-md text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Contentverse. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for beautiful content
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
