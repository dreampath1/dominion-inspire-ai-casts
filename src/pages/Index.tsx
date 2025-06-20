
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Podcasts from "@/components/Podcasts";
import VideoGallery from "@/components/VideoGallery";
import Episodes from "@/components/Episodes";
import About from "@/components/About";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Podcasts />
      <VideoGallery />
      <div id="episodes">
        <Episodes />
      </div>
      <About />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
