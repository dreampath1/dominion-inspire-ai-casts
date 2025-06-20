
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
  youtubeId: string;
  youtubeUrl: string;
  podcastEpisode?: string;
  theme: string;
}

const VideoGallery = () => {
  const [selectedTheme, setSelectedTheme] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos: Video[] = [
    {
      id: "1",
      title: "She Tried to Kill Me - God's purpose Saved me",
      duration: "3:43",
      views: "6 views",
      uploadDate: "1 hour ago",
      youtubeId: "S4EZlXgKV4U",
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
      youtubeId: "cveARQj9LUQ",
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
      youtubeId: "UajfZ15Xg0U",
      youtubeUrl: "https://www.youtube.com/watch?v=UajfZ15Xg0U&t=1s",
      theme: "healing"
    },
    {
      id: "4",
      title: "It is Never Too Late to Start - Even When You are feeling Lost",
      duration: "6:03",
      views: "189 views",
      uploadDate: "11 days ago",
      youtubeId: "4ahBsIxLMGc",
      youtubeUrl: "https://www.youtube.com/watch?v=4ahBsIxLMGc&t=171s",
      theme: "new-beginnings"
    },
    {
      id: "5",
      title: "KNOW WHO YOU ARE",
      duration: "1:16",
      views: "317 views",
      uploadDate: "2 weeks ago",
      youtubeId: "5dapBqBgmnA",
      youtubeUrl: "https://www.youtube.com/watch?v=5dapBqBgmnA",
      theme: "self-awareness"
    },
    {
      id: "6",
      title: "SPEAK LIFE",
      duration: "9:40",
      views: "5.9K views",
      uploadDate: "5 months ago",
      youtubeId: "3AwXOvpgOqg",
      youtubeUrl: "https://www.youtube.com/watch?v=3AwXOvpgOqg&t=32s",
      theme: "motivation"
    }
  ];

  const themes = [
    { value: "all", label: "All Videos" },
    { value: "resilience", label: "Resilience" },
    { value: "consistency", label: "Consistency" },
    { value: "healing", label: "Healing" },
    { value: "new-beginnings", label: "New Beginnings" },
    { value: "self-awareness", label: "Self Awareness" },
    { value: "motivation", label: "Motivation" }
  ];

  const filteredVideos = selectedTheme === "all" 
    ? videos 
    : videos.filter(video => video.theme === selectedTheme);

  const handlePlayVideo = (youtubeId: string) => {
    setSelectedVideo(youtubeId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

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
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to default thumbnail if maxresdefault doesn't exist
                      e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                    }}
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
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 flex-1">{video.title}</h3>
                  <div className="text-sm text-gray-500 mb-4">
                    {video.views} • {video.uploadDate}
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white flex-1"
                      onClick={() => handlePlayVideo(video.youtubeId)}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Video
                    </Button>
                    
                    {video.podcastEpisode && (
                      <Button 
                        variant="outline" 
                        className="flex-1 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300"
                        onClick={() => {
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh]">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-semibold">Video Player</h3>
                <Button variant="ghost" onClick={closeVideo}>
                  ✕
                </Button>
              </div>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoGallery;
