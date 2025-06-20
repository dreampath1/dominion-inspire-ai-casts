
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Show Up Every Day Tee",
    price: "$29.99",
    image: "/lovable-uploads/2eb03ea0-518d-471e-8b6f-83667ff19997.png",
    category: "Apparel",
    description: "Daily motivation reminder - consistency is key"
  },
  {
    id: 2,
    name: "Take Dominion Tee",
    price: "$29.99",
    image: "/lovable-uploads/38930bec-7fab-48ce-b723-17e08e8b5cad.png",
    category: "Apparel",
    description: "Take control of your life and destiny"
  },
  {
    id: 3,
    name: "Dominion Mindset Hoodie",
    price: "$49.99",
    image: "/lovable-uploads/1005aed9-5939-4b5c-ad5f-ce5b9e571f5c.png",
    category: "Apparel",
    description: "Cultivate the mindset of success and dominion"
  },
  {
    id: 4,
    name: "Speak Life Tee",
    price: "$29.99",
    image: "/lovable-uploads/ad94d17c-0975-44df-b677-e11f7dbf6290.png",
    category: "Apparel",
    description: "Inspire yourself and others with positive words"
  },
  {
    id: 5,
    name: "Don't Let Go Tee",
    price: "$29.99",
    image: "/lovable-uploads/fd01c68e-69db-4e4c-b846-dc77fc264864.png",
    category: "Apparel",
    description: "Keep fighting and never give up on your dreams"
  },
  {
    id: 6,
    name: "Know Who You Are Tee",
    price: "$29.99",
    image: "/lovable-uploads/fb46c430-bd04-40ae-85b6-4da84787e760.png",
    category: "Apparel",
    description: "Embrace your identity and inner strength"
  },
  {
    id: 7,
    name: "Dominion T-Shirt",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "Apparel",
    description: "Premium cotton tee with motivational messaging"
  },
  {
    id: 8,
    name: "Power Hoodie",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
    category: "Apparel",
    description: "Comfortable hoodie for your journey to greatness"
  },
  {
    id: 9,
    name: "Victory Cap",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop",
    category: "Accessories",
    description: "Stylish cap to crown your achievements"
  },
  {
    id: 10,
    name: "Motivation Mug",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop",
    category: "Lifestyle",
    description: "Start your day with inspiration"
  },
  {
    id: 11,
    name: "Success Journal",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&h=500&fit=crop",
    category: "Lifestyle",
    description: "Document your path to greatness"
  },
  {
    id: 12,
    name: "Dominion Water Bottle",
    price: "$27.99",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    category: "Lifestyle",
    description: "Stay hydrated on your journey"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each product is designed to remind you of your strength and inspire daily action towards your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
