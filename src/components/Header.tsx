
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 sm:space-x-3"
        >
          <img 
            src="/lovable-uploads/ffd7c94e-a600-4204-b58b-370be2e6bce0.png" 
            alt="Dominion Motivational Logo"
            className="h-8 sm:h-10 w-auto"
          />
          <div className="text-lg sm:text-2xl font-bold">
            Dominion Motivational
          </div>
        </motion.div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-orange-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
          <a href="#podcasts" className="hover:text-orange-500 transition-colors">Podcasts</a>
          <a href="#videos" className="hover:text-orange-500 transition-colors">Videos</a>
          <a href="#episodes" className="hover:text-orange-500 transition-colors">Episodes</a>
          <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#community" className="hover:text-orange-500 transition-colors">Community</a>
        </div>
      </nav>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-800 px-4 py-4 space-y-4"
        >
          <a href="#home" className="block hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#podcasts" className="block hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Podcasts</a>
          <a href="#videos" className="block hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Videos</a>
          <a href="#episodes" className="block hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Episodes</a>
          <a href="#about" className="block hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#community" className="block hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Community</a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
