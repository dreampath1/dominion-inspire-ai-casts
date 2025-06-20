
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-slate-900">About Dominion Motivational</h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe in the power of daily inspiration to transform lives. Our AI-generated podcast episodes 
              are carefully crafted to deliver powerful motivational content that resonates with your journey.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Each episode is designed to be a tightly focused, under 10-minute motivational segment that fits 
              easily into your day, providing the inspiration you need to keep moving forward.
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">50+</div>
                <div className="text-gray-600">Episodes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">10K+</div>
                <div className="text-gray-600">Listeners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">4.9</div>
                <div className="text-gray-600">Rating</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg h-48 flex items-center justify-center">
              <div className="text-orange-500 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <p className="text-white text-sm">Speaker Profile</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg h-48 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <p className="text-white text-sm">Audio Waveform</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
