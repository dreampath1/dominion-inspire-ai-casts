
import Hero from "@/components/Hero";
import Episodes from "@/components/Episodes";
import ContentCreation from "@/components/ContentCreation";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Episodes />
      <ContentCreation />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
