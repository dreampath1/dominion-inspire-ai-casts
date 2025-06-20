
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Award, Calendar, Heart, Star, Users2 } from "lucide-react";

const Community = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "The 'Heal Yourself' episode came at exactly the right time. I've listened to it 5 times already.",
      rating: 5
    },
    {
      name: "Marcus R.",
      text: "Dominion Motivational has become my daily dose of inspiration. The AI voices are incredibly engaging.",
      rating: 5
    },
    {
      name: "Jessica T.",
      text: "Short, powerful, and exactly what I need to start my day strong. Thank you for this amazing content!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Community</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with thousands of others on their journey to personal transformation and motivation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Community Features</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <MessageCircle className="w-8 h-8 text-purple-400 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Discussion Forums</h4>
                  <p className="text-gray-300">Share your journey and connect with like-minded individuals</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <Award className="w-8 h-8 text-yellow-400 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">30-Day Challenges</h4>
                  <p className="text-gray-300">Participate in monthly transformation challenges</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <Calendar className="w-8 h-8 text-blue-400 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Live Events</h4>
                  <p className="text-gray-300">Join virtual meetups and motivation sessions</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-8">What Our Community Says</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                    <p className="text-purple-400 font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl p-12 text-center border border-green-400/30">
          <Users2 className="w-20 h-20 text-green-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Together?</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join over 50k+ members in our supportive community and start your journey to becoming stronger than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full">
              <Heart className="w-5 h-5 mr-2" />
              Join Community
            </Button>
            <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 text-lg rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
