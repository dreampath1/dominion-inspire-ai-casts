
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Download, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const Episodes = () => {
  const episodes = [
    {
      id: 1,
      title: "The Power of Retreat: Healing and Returning Stronger",
      description: "Discover the transformative power of strategic withdrawal and how to emerge stronger than ever before.",
      type: "Single Speaker",
      duration: "8 min",
      image: "/lovable-uploads/d6c848d6-18a7-4db4-80f3-78969ebe20b9.png"
    },
    {
      id: 2,
      title: "The Unseen Grind: Why Showing Up Daily Matters",
      description: "A powerful conversation about the importance of consistency and showing up every single day.",
      type: "Dual Speaker", 
      duration: "9 min",
      image: "/lovable-uploads/690f0442-75cf-4324-b771-6cba7958cdb1.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Latest Episodes</h2>
          <p className="text-xl text-gray-600">Powerful motivational content to fuel your journey</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {episodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={episode.image} 
                    alt={episode.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-orange-600 px-3 py-1 rounded text-sm font-medium">{episode.type}</span>
                    <span className="ml-2 text-sm">{episode.duration}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{episode.title}</CardTitle>
                  <CardDescription className="text-gray-600">{episode.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline">
                      <Share2 className="w-4 h-4 mr-2" />
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

export default Episodes;
