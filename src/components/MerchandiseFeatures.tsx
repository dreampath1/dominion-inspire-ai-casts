
import { motion } from "framer-motion";
import { Truck, Shield, RotateCcw, Star } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on orders over $50"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure payment processing"
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free returns"
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "High-quality materials and printing"
  }
];

const MerchandiseFeatures = () => {
  return (
    <section className="py-16 px-4 bg-slate-900 text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-orange-500">Dominion</span>?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're committed to delivering quality products that inspire and empower your journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchandiseFeatures;
