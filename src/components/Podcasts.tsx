
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Download, Share } from "lucide-react";
import { motion } from "framer-motion";

interface Podcast {
  id: string;
  title: string;
  description: string;
  type: string;
  duration: string;
  image: string;
}

const Podcasts = () => {
  const [selectedPodcast, setSelectedPodcast] = useState<string | null>(null);

  const podcasts: Podcast[] = [
    {
      id: "1",
      title: "The Power of Retreat: Healing and Returning Stronger",
      description: "Discover the transformative power of strategic withdrawal and how to emerge stronger than ever before.",
      type: "Single Speaker",
      duration: "8 min",
      image: "/lovable-uploads/d6c848d6-18a7-4db4-80f3-78969ebe20b9.png"
    },
    {
      id: "2",
      title: "The Unseen Grind: Why Showing Up Daily Matters",
      description: "A powerful conversation about the importance of consistency and showing up every single day.",
      type: "Dual Speaker", 
      duration: "9 min",
      image: "/lovable-uploads/690f0442-75cf-4324-b771-6cba7958cdb1.png"
    }
  ];

  const handlePlay = (podcastId: string) => {
    setSelectedPodcast(podcastId);
    // In a real app, this would trigger audio playback
    console.log(`Playing podcast: ${podcastId}`);
  };

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Latest Podcasts</h2>
          <p className="text-lg sm:text-xl text-gray-600">Powerful motivational content to fuel your journey</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {podcasts.map((podcast, index) => (
            <motion.div
              key={podcast.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="w-full"
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="h-40 sm:h-48 relative overflow-hidden">
                  <img 
                    src={podcast.image} 
                    alt={podcast.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <span className="bg-orange-600 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">{podcast.type}</span>
                    <span className="ml-2 text-xs sm:text-sm">{podcast.duration}</span>
                  </div>
                </div>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl leading-tight">{podcast.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm sm:text-base">{podcast.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button 
                      className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto"
                      onClick={() => handlePlay(podcast.id)}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto">
                      <Share className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Podcasts;
