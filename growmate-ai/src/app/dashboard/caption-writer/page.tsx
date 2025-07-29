'use client';

import { useState } from 'react';
import { 
  PenTool, 
  Copy, 
  Save, 
  Sparkles,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  Twitter,
  Hash,
  MessageSquare,
  Target
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { generateCaption } from '@/lib/ai-client';
import toast from 'react-hot-toast';

const platforms = [
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'from-purple-500 to-pink-500' },
  { id: 'youtube', name: 'YouTube', icon: Youtube, color: 'from-red-500 to-red-600' },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'from-blue-600 to-blue-700' },
  { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'from-blue-500 to-blue-600' },
  { id: 'twitter', name: 'X (Twitter)', icon: Twitter, color: 'from-gray-800 to-black' }
];

const tones = [
  { id: 'engaging', name: 'Engaging', description: 'Friendly and conversational' },
  { id: 'professional', name: 'Professional', description: 'Formal and authoritative' },
  { id: 'casual', name: 'Casual', description: 'Relaxed and informal' },
  { id: 'inspiring', name: 'Inspiring', description: 'Motivational and uplifting' },
  { id: 'humorous', name: 'Humorous', description: 'Funny and entertaining' },
  { id: 'educational', name: 'Educational', description: 'Informative and teaching' },
  { id: 'emotional', name: 'Emotional', description: 'Heartfelt and personal' },
  { id: 'urgent', name: 'Urgent', description: 'Time-sensitive and compelling' }
];

interface GeneratedCaption {
  id: string;
  caption: string;
  hook: string;
  cta: string;
  hashtags: string[];
  platform: string;
  tone: string;
  topic: string;
}

export default function CaptionWriterPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');
  const [selectedTone, setSelectedTone] = useState('engaging');
  const [topic, setTopic] = useState('');
  const [includeHashtags, setIncludeHashtags] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCaptions, setGeneratedCaptions] = useState<GeneratedCaption[]>([]);
  const [generatedCount, setGeneratedCount] = useState(0);

  const handleGenerateCaption = async () => {
    if (!topic.trim()) {
      toast.error('Please enter a topic or content idea');
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateCaption(selectedPlatform, topic, selectedTone, includeHashtags);
      
      const newCaption: GeneratedCaption = {
        id: `caption-${Date.now()}`,
        caption: result.caption,
        hook: result.hook,
        cta: result.cta,
        hashtags: result.hashtags,
        platform: selectedPlatform,
        tone: selectedTone,
        topic: topic
      };

      setGeneratedCaptions(prev => [newCaption, ...prev]);
      setGeneratedCount(prev => prev + 1);
      toast.success('Caption generated successfully!');
    } catch (error) {
      toast.error('Failed to generate caption. Please try again.');
      console.error('Caption generation error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  const copyFullCaption = (caption: GeneratedCaption) => {
    const fullText = `${caption.caption}\n\n${caption.hashtags.join(' ')}`;
    navigator.clipboard.writeText(fullText);
    toast.success('Full caption copied to clipboard!');
  };

  const saveCaption = () => {
    // In a real app, save to database
    toast.success('Caption saved to your collection!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <PenTool className="mr-3 h-8 w-8 text-blue-500" />
            AI Caption Writer
          </h1>
          <p className="text-gray-600 mt-1">
            Create engaging captions with hooks and CTAs that convert for all social platforms
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Badge variant="secondary">
            {generatedCount} captions generated today
          </Badge>
        </div>
      </div>

      {/* Generator Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="mr-2 h-5 w-5 text-purple-500" />
            Generate New Caption
          </CardTitle>
          <CardDescription>
            Enter your content topic and customize the style to generate the perfect caption
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Topic Input */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Content Topic or Idea
            </label>
            <Textarea
              placeholder="Describe what your post is about. E.g., 'Morning workout routine for busy professionals' or 'Tips for growing your business online'"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          {/* Platform Selection */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">
              Choose Platform
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    selectedPlatform === platform.id
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center mx-auto mb-2`}>
                    <platform.icon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">{platform.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Tone Selection */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">
              Choose Tone & Style
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {tones.map((tone) => (
                <button
                  key={tone.id}
                  onClick={() => setSelectedTone(tone.id)}
                  className={`p-3 rounded-lg border-2 text-left transition-all ${
                    selectedTone === tone.id
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <p className="font-medium text-gray-900 text-sm">{tone.name}</p>
                  <p className="text-xs text-gray-600 mt-1">{tone.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeHashtags}
                onChange={(e) => setIncludeHashtags(e.target.checked)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-700">Include hashtags</span>
            </label>
          </div>

          {/* Generate Button */}
          <Button 
            onClick={handleGenerateCaption}
            disabled={isGenerating || !topic.trim()}
            size="lg"
            className="w-full sm:w-auto"
            loading={isGenerating}
          >
            <PenTool className={`mr-2 h-4 w-4 ${isGenerating ? 'animate-pulse' : ''}`} />
            {isGenerating ? 'Writing Caption...' : 'Generate Caption'}
          </Button>
        </CardContent>
      </Card>

      {/* Generated Captions */}
      {generatedCaptions.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Generated Captions</h2>
          
          {generatedCaptions.map((caption) => (
            <Card key={caption.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">
                      {platforms.find(p => p.id === caption.platform)?.name} Caption
                    </CardTitle>
                    <CardDescription>
                      {caption.topic} • {tones.find(t => t.id === caption.tone)?.name} tone
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyFullCaption(caption)}
                    >
                      <Copy className="h-4 w-4 mr-1" />
                      Copy All
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => saveCaption()}
                    >
                      <Save className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Hook Section */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-yellow-800 flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      Hook
                    </h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(caption.hook, 'Hook')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-yellow-700">{caption.hook}</p>
                </div>

                {/* Main Caption */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-blue-800 flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Caption
                    </h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(caption.caption, 'Caption')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-blue-700 whitespace-pre-wrap">{caption.caption}</p>
                </div>

                {/* CTA Section */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-green-800 flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      Call-to-Action
                    </h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(caption.cta, 'CTA')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-green-700">{caption.cta}</p>
                </div>

                {/* Hashtags */}
                {caption.hashtags.length > 0 && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-purple-800 flex items-center">
                        <Hash className="h-4 w-4 mr-1" />
                        Hashtags ({caption.hashtags.length})
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(caption.hashtags.join(' '), 'Hashtags')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {caption.hashtags.map((hashtag, index) => (
                        <Badge key={index} variant="outline" className="text-purple-700 border-purple-300">
                          {hashtag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Tips Card */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-900">✍️ Caption Writing Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-green-800 text-sm">
            <li>• Start with a strong hook to grab attention in the first few words</li>
            <li>• Use emojis strategically to break up text and add personality</li>
            <li>• Include a clear call-to-action to encourage engagement</li>
            <li>• Ask questions to spark conversations in the comments</li>
            <li>• Keep it authentic - your audience can tell when you&apos;re being genuine</li>
            <li>• Use line breaks to make your caption easy to read</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}