
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Clock, Users, TrendingUp } from "lucide-react";

const Episodes = () => {
  const episodes = [
    {
      id: 1,
      title: "HEAL YOURSELF: Come Back Stronger Than Ever",
      description: "Learn to forgive, love yourself, and transform pain into power. Sometimes you need to disappear to discover who you truly are.",
      duration: "8:42",
      type: "Single Speaker",
      plays: "12.4K",
      thumbnail: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "SHOW UP EVERYDAY: The Quiet Power of Consistency",
      description: "Success rewards those who show up even when tired, unseen, or doubting. Your season is now—don't quit.",
      duration: "7:18",
      type: "Dual Speaker",
      plays: "8.9K",
      thumbnail: "bg-gradient-to-br from-blue-500 to-purple-500"
    },
    {
      id: 3,
      title: "STOP BEGGING FOR LOVE: Put Yourself First",
      description: "The moment you realize you are your first priority is the moment everything changes. Build your garden, butterflies will come.",
      duration: "6:55",
      type: "Single Speaker",
      plays: "15.2K",
      thumbnail: "bg-gradient-to-br from-pink-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Episodes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful motivational content designed to heal, inspire, and transform your mindset in under 10 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {episodes.map((episode) => (
            <Card key={episode.id} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group overflow-hidden">
              <div className={`h-48 ${episode.thumbnail} relative flex items-center justify-center`}>
                <Button className="bg-white/20 hover:bg-white/30 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <Play className="w-8 h-8 text-white" />
                </Button>
              </div>
              <CardHeader>
                <CardTitle className="text-white text-lg leading-tight">{episode.title}</CardTitle>
                <CardDescription className="text-gray-300">{episode.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {episode.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {episode.plays}
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {episode.type}
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Play Episode
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg rounded-full">
            View All Episodes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Episodes;
