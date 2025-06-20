
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
        >
          <img 
            src="/lovable-uploads/ffd7c94e-a600-4204-b58b-370be2e6bce0.png" 
            alt="Dominion Motivational Logo"
            className="h-10 w-auto"
          />
          <div className="text-2xl font-bold">
            Dominion Motivational
          </div>
        </motion.div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
          <a href="#videos" className="hover:text-orange-500 transition-colors">Videos</a>
          <a href="#episodes" className="hover:text-orange-500 transition-colors">Episodes</a>
          <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#community" className="hover:text-orange-500 transition-colors">Community</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
