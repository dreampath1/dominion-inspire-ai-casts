
import { Button } from "@/components/ui/button";
import { Youtube, Twitter, Instagram, Facebook, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  const quickLinks = [
    "Browse Episodes",
    "Create Content",
    "Join Community",
    "Premium Membership",
    "Merchandise Store"
  ];

  const supportLinks = [
    "Help Center",
    "Contact Us",
    "Privacy Policy",
    "Terms of Service",
    "Brand Guidelines"
  ];

  return (
    <footer className="bg-black/40 border-t border-white/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-4xl font-bold text-white mb-4">
              DOMINION
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                MOTIVATIONAL
              </span>
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Transforming inspirational content into powerful AI-generated podcast episodes. 
              Heal yourself, show up every day, and come back stronger than ever.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-purple-600 hover:border-purple-600 rounded-full"
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2">
                    {link}
                    <ExternalLink className="w-4 h-4 opacity-0 hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2">
                    {link}
                    <ExternalLink className="w-4 h-4 opacity-0 hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 mb-12 border border-purple-400/30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-2xl font-bold text-white mb-2">Stay Motivated</h4>
              <p className="text-gray-300">Get weekly inspiration and new episodes delivered to your inbox.</p>
            </div>
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full">
                <Mail className="w-5 h-5 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/20">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 Dominion Motivational. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Source Videos
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              AI Technology
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Brand Guidelines
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
