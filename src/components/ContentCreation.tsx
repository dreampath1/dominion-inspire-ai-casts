
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube, Mic2, Scissors, Share2, Zap, Target } from "lucide-react";

const ContentCreation = () => {
  const features = [
    {
      icon: Youtube,
      title: "YouTube Integration",
      description: "Transform inspirational YouTube videos into podcast content",
      color: "text-red-400"
    },
    {
      icon: Mic2,
      title: "AI Voice Generation",
      description: "Choose from single or dual-speaker formats with premium AI voices",
      color: "text-purple-400"
    },
    {
      icon: Scissors,
      title: "Smart Editing",
      description: "Automated editing with dynamic visuals and perfect pacing",
      color: "text-blue-400"
    },
    {
      icon: Share2,
      title: "Multi-Platform",
      description: "Generate content for podcasts, YouTube, and social media",
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Turn raw content into polished episodes in minutes",
      color: "text-yellow-400"
    },
    {
      icon: Target,
      title: "Engagement Focus",
      description: "Optimized for maximum retention and emotional impact",
      color: "text-pink-400"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Creation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI-powered platform transforms raw inspirational content into polished, engaging podcast episodes with professional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center">
                <feature.icon className={`w-16 h-16 ${feature.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 text-center border border-purple-400/30">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Create Your First Episode?</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Start with our source videos "Heal Yourself" and "Show Up Everyday" or upload your own inspirational content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full">
              Start Creating
            </Button>
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg rounded-full">
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreation;
