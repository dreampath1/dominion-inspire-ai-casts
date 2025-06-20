
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
          {product.category}
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-4 left-4 p-2 rounded-full transition-colors ${
            isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-red-50'
          }`}
        >
          <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
        </motion.button>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-600">{product.price}</span>
          <Button 
            size="sm"
            className="bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
