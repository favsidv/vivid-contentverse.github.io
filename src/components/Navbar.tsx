
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon, Search } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: "Videos", path: "/videos" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8",
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tighter transition-transform hover:scale-[1.02] duration-300"
        >
          Contentverse
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-all duration-200 ease-in-out relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300",
                location.pathname === link.path
                  ? "text-primary after:w-full"
                  : "text-gray-600 hover:text-primary after:w-0 hover:after:w-full"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <XIcon className="h-6 w-6 text-gray-900" />
          ) : (
            <MenuIcon className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 px-6 flex flex-col md:hidden animate-fade-in">
          <nav className="flex flex-col space-y-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-lg font-medium py-2 transition-colors",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-gray-600"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-3 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
