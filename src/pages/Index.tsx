
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Episodes from "@/components/Episodes";
import About from "@/components/About";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Episodes />
      <About />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
