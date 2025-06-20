
import { Button } from "@/components/ui/button";
import { Users, Headphones, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Community = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-12 text-orange-100 max-w-2xl mx-auto">
            Connect with like-minded individuals on their journey to personal growth
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
              <Users className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-orange-100">Share your journey and get support from others</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
              <Headphones className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Exclusive Content</h3>
              <p className="text-orange-100">Access premium episodes and bonus material</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
              <Star className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Personal Growth</h3>
              <p className="text-orange-100">Track your progress and celebrate milestones</p>
            </div>
          </div>
          <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all transform hover:scale-105">
            Join Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
