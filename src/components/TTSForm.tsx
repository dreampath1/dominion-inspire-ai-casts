
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Download, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const TTSForm = () => {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("alloy");
  const [provider, setProvider] = useState("openai");
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [filename, setFilename] = useState("");
  const { toast } = useToast();

  // OpenAI voices
  const openaiVoices = [
    { id: "alloy", name: "Alloy (Neutral)" },
    { id: "echo", name: "Echo (Male)" },
    { id: "fable", name: "Fable (British Male)" },
    { id: "onyx", name: "Onyx (Deep Male)" },
    { id: "nova", name: "Nova (Female)" },
    { id: "shimmer", name: "Shimmer (Soft Female)" }
  ];

  // ElevenLabs voices
  const elevenLabsVoices = [
    { id: "9BWtsMINqrJLrRacOk9x", name: "Aria" },
    { id: "CwhRBWXzGAHq8TQ4Fs17", name: "Roger" },
    { id: "EXAVITQu4vr4xnSDxMaL", name: "Sarah" },
    { id: "FGY2WhTYpPnrIDTdsKH5", name: "Laura" },
    { id: "IKne3meq5aSn9XLyUdCD", name: "Charlie" },
    { id: "JBFqnCBsd6RMkjVDRZzb", name: "George" }
  ];

  const handleGenerate = async () => {
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to convert to speech.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      if (provider === "openai") {
        await generateOpenAIAudio();
      } else {
        await generateElevenLabsAudio();
      }
    } catch (error) {
      console.error("Error generating audio:", error);
      toast({
        title: "Error",
        description: "Failed to generate audio. Please check your API keys in Supabase secrets.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const generateOpenAIAudio = async () => {
    // This would need to be implemented as a Supabase Edge Function
    // For now, showing the UI structure
    toast({
      title: "OpenAI TTS",
      description: "OpenAI integration requires Supabase connection for API key management.",
    });
  };

  const generateElevenLabsAudio = async () => {
    // This would need to be implemented as a Supabase Edge Function
    // For now, showing the UI structure
    toast({
      title: "ElevenLabs TTS",
      description: "ElevenLabs integration requires Supabase connection for API key management.",
    });
  };

  const handleDownload = () => {
    if (audioUrl) {
      const link = document.createElement('a');
      link.href = audioUrl;
      link.download = filename || 'generated-audio.mp3';
      link.click();
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Generate Audio Content</CardTitle>
              <CardDescription className="text-center">
                Convert your text into professional-quality audio for podcasts and content creation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="openai" value={provider} onValueChange={setProvider}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="openai">OpenAI TTS</TabsTrigger>
                  <TabsTrigger value="elevenlabs">ElevenLabs</TabsTrigger>
                </TabsList>
                
                <TabsContent value="openai" className="space-y-4">
                  <div>
                    <Label htmlFor="openai-voice">Voice Selection</Label>
                    <Select value={voice} onValueChange={setVoice}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a voice" />
                      </SelectTrigger>
                      <SelectContent>
                        {openaiVoices.map((v) => (
                          <SelectItem key={v.id} value={v.id}>
                            {v.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
                
                <TabsContent value="elevenlabs" className="space-y-4">
                  <div>
                    <Label htmlFor="elevenlabs-voice">Voice Selection</Label>
                    <Select value={voice} onValueChange={setVoice}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a voice" />
                      </SelectTrigger>
                      <SelectContent>
                        {elevenLabsVoices.map((v) => (
                          <SelectItem key={v.id} value={v.id}>
                            {v.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
              </Tabs>

              <div>
                <Label htmlFor="filename">Filename (optional)</Label>
                <Input
                  id="filename"
                  value={filename}
                  onChange={(e) => setFilename(e.target.value)}
                  placeholder="my-podcast-episode.mp3"
                />
              </div>

              <div>
                <Label htmlFor="text-input">Text Content</Label>
                <Textarea
                  id="text-input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your motivational content here... You can paste your podcast scripts, quotes, or any text you want to convert to speech."
                  className="min-h-[200px]"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Character count: {text.length}
                </p>
              </div>

              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating || !text.trim()}
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating Audio...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Generate Audio
                  </>
                )}
              </Button>

              {audioUrl && (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-green-800">Audio Generated Successfully!</h4>
                        <p className="text-sm text-green-600">Your audio is ready to play or download</p>
                      </div>
                      <div className="flex gap-2">
                        <audio controls className="max-w-xs">
                          <source src={audioUrl} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                        <Button 
                          onClick={handleDownload}
                          variant="outline"
                          size="sm"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>

          <Card className="mt-8 border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800">Setup Required</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 mb-4">
                To use this Text-to-Speech feature, you need to:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-orange-700">
                <li>Connect your project to Supabase (click the green Supabase button)</li>
                <li>Add your API keys to Supabase Secrets:
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li><code>OPENAI_API_KEY</code> - for OpenAI TTS</li>
                    <li><code>ELEVENLABS_API_KEY</code> - for ElevenLabs TTS</li>
                  </ul>
                </li>
                <li>The backend functions will be created automatically</li>
              </ol>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TTSForm;
