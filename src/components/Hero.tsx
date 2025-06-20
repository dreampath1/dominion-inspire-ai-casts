
import { Button } from "@/components/ui/button";
import { Play, Headphones, Mic } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-100"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-500"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            DOMINION
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              MOTIVATIONAL
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform inspirational YouTube content into powerful AI-generated podcast episodes. 
            <span className="text-purple-400 font-semibold"> Heal yourself. Show up every day. Come back stronger.</span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Play className="w-6 h-6 mr-2" />
            Listen Now
          </Button>
          <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300">
            <Headphones className="w-6 h-6 mr-2" />
            Browse Episodes
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Mic className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">AI-Generated</h3>
            <p className="text-gray-300">Cutting-edge AI voices bring motivational content to life</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Play className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Short-Form</h3>
            <p className="text-gray-300">Powerful 10-minute episodes for maximum impact</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Headphones className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Inspirational</h3>
            <p className="text-gray-300">Transform your mindset and come back stronger</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
