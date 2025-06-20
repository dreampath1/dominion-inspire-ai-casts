
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Headphones } from "lucide-react";
import { motion } from "framer-motion";

interface Video {
  id: string;
  title: string;
  duration: string;
  views: string;
  uploadDate: string;
  thumbnail: string;
  youtubeUrl: string;
  podcastEpisode?: string;
  theme: string;
}

const VideoGallery = () => {
  const [selectedTheme, setSelectedTheme] = useState("all");

  const videos: Video[] = [
    {
      id: "1",
      title: "She Tried to Kill Me - God's purpose Saved me",
      duration: "3:43",
      views: "6 views",
      uploadDate: "1 hour ago",
      thumbnail: "/lovable-uploads/d6c848d6-18a7-4db4-80f3-78969ebe20b9.png",
      youtubeUrl: "https://www.youtube.com/watch?v=S4EZlXgKV4U",
      podcastEpisode: "The Power of Retreat: Healing and Returning Stronger",
      theme: "resilience"
    },
    {
      id: "2",
      title: "SHOW UP EVERYDAY - Powerful Motivational Speech",
      duration: "1:51",
      views: "54 views",
      uploadDate: "1 day ago",
      thumbnail: "/lovable-uploads/690f0442-75cf-4324-b771-6cba7958cdb1.png",
      youtubeUrl: "https://www.youtube.com/watch?v=cveARQj9LUQ",
      podcastEpisode: "The Unseen Grind: Why Showing Up Daily Matters",
      theme: "consistency"
    },
    {
      id: "3",
      title: "HEAL YOURSELF IF POSSIBLE, DISAPPEAR AND COME BACK STRONGER",
      duration: "4:09",
      views: "142 views",
      uploadDate: "8 days ago",
      thumbnail: "/lovable-uploads/d6c848d6-18a7-4db4-80f3-78969ebe20b9.png",
      youtubeUrl: "https://www.youtube.com/watch?v=UaJjZ15Xg0U",
      theme: "healing"
    },
    {
      id: "4",
      title: "It is Never Too Late to Start - Even When You are feeling Lost",
      duration: "6:03",
      views: "189 views",
      uploadDate: "11 days ago",
      thumbnail: "/lovable-uploads/690f0442-75cf-4324-b771-6cba7958cdb1.png",
      youtubeUrl: "https://www.youtube.com/watch?v=wi4ahBsIxLM",
      theme: "new-beginnings"
    }
  ];

  const themes = [
    { value: "all", label: "All Videos" },
    { value: "resilience", label: "Resilience" },
    { value: "consistency", label: "Consistency" },
    { value: "healing", label: "Healing" },
    { value: "new-beginnings", label: "New Beginnings" }
  ];

  const filteredVideos = selectedTheme === "all" 
    ? videos 
    : videos.filter(video => video.theme === selectedTheme);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Video Library</h2>
          <p className="text-xl text-gray-600 mb-8">
            Watch our motivational videos and dive deeper with podcast discussions
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {themes.map((theme) => (
              <Button
                key={theme.value}
                variant={selectedTheme === theme.value ? "default" : "outline"}
                onClick={() => setSelectedTheme(theme.value)}
                className={selectedTheme === theme.value 
                  ? "bg-orange-600 hover:bg-orange-700" 
                  : "hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300"
                }
              >
                {theme.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-medium capitalize">
                      {video.theme.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{video.title}</h3>
                  <div className="text-sm text-gray-500 mb-4">
                    {video.views} • {video.uploadDate}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white flex-1"
                      onClick={() => window.open(video.youtubeUrl, '_blank')}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Video
                    </Button>
                    
                    {video.podcastEpisode && (
                      <Button 
                        variant="outline" 
                        className="flex-1 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300"
                        onClick={() => {
                          // Scroll to episodes section
                          const episodesSection = document.getElementById('episodes');
                          if (episodesSection) {
                            episodesSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        <Headphones className="w-4 h-4 mr-2" />
                        Discussion
                      </Button>
                    )}
                  </div>
                  
                  {video.podcastEpisode && (
                    <div className="mt-3 p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm text-orange-800">
                        <strong>Podcast Discussion:</strong> {video.podcastEpisode}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
