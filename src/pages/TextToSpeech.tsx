
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TTSHero from "@/components/TTSHero";
import TTSForm from "@/components/TTSForm";

const TextToSpeech = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <TTSHero />
      <TTSForm />
      <Footer />
    </div>
  );
};

export default TextToSpeech;
