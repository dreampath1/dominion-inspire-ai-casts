
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const MerchandiseHero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-orange-900 to-slate-800 text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Wear Your <span className="text-orange-500">Dominion</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Motivational merchandise that inspires you to take control and live with purpose.
            Every piece tells a story of strength, determination, and personal growth.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
          >
            Shop Collection
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchandiseHero;
