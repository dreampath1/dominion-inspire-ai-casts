
import { motion } from "framer-motion";
import { Mic, Volume2, Download } from "lucide-react";

const TTSHero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-orange-900 to-slate-800 text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4">
              <Mic className="w-12 h-12 text-orange-500" />
              <Volume2 className="w-12 h-12 text-orange-500" />
              <Download className="w-12 h-12 text-orange-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Text to <span className="text-orange-500">Speech</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Transform your motivational content into high-quality audio using advanced AI voices.
            Create professional podcasts with OpenAI and ElevenLabs technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TTSHero;
