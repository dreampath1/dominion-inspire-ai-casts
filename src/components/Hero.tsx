
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 h-[60vh] flex items-center">
      <div className="container mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Transform Your Life
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
        >
          Through Daily Inspiration and Powerful Motivational Content
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg rounded-lg transition-all transform hover:scale-105">
            <Play className="w-5 h-5 mr-2" />
            Listen Now
          </Button>
          <Button className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all">
            Join Community
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
