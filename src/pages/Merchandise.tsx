
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MerchandiseHero from "@/components/MerchandiseHero";
import ProductGrid from "@/components/ProductGrid";
import MerchandiseFeatures from "@/components/MerchandiseFeatures";

const Merchandise = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <MerchandiseHero />
      <ProductGrid />
      <MerchandiseFeatures />
      <Footer />
    </div>
  );
};

export default Merchandise;
