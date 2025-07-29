'use client';

import { useState } from 'react';
import { 
  Lightbulb, 
  RefreshCw, 
  Copy, 
  Save, 
  TrendingUp, 
  Heart,
  Sparkles,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  Twitter
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { generateContentIdeas } from '@/lib/ai-client';
import toast from 'react-hot-toast';

const platforms = [
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'from-purple-500 to-pink-500' },
  { id: 'youtube', name: 'YouTube', icon: Youtube, color: 'from-red-500 to-red-600' },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'from-blue-600 to-blue-700' },
  { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'from-blue-500 to-blue-600' },
  { id: 'twitter', name: 'X (Twitter)', icon: Twitter, color: 'from-gray-800 to-black' }
];

const niches = [
  'Fitness & Health',
  'Business & Entrepreneurship',
  'Technology',
  'Food & Cooking',
  'Travel',
  'Fashion & Beauty',
  'Personal Development',
  'Finance & Investment',
  'Education',
  'Entertainment',
  'Art & Design',
  'Parenting',
  'Photography',
  'Music',
  'Gaming'
];

interface ContentIdea {
  id: string;
  title: string;
  description: string;
  engagement_score: number;
  trending_topics: string[];
  content_type: string;
}

export default function ContentIdeasPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');
  const [selectedNiche, setSelectedNiche] = useState('');
  const [customNiche, setCustomNiche] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [contentIdeas, setContentIdeas] = useState<ContentIdea[]>([]);
  const [generatedCount, setGeneratedCount] = useState(0);

  const handleGenerateIdeas = async () => {
    const niche = customNiche || selectedNiche;
    if (!niche) {
      toast.error('Please select or enter a niche');
      return;
    }

    setIsGenerating(true);
    try {
      const ideas = await generateContentIdeas(selectedPlatform, niche, 6);
      
      // Transform the AI response into structured content ideas
      const structuredIdeas: ContentIdea[] = ideas.map((idea, index) => ({
        id: `idea-${Date.now()}-${index}`,
        title: idea,
        description: `Engaging ${selectedPlatform} content about ${idea.toLowerCase()}`,
        engagement_score: Math.floor(Math.random() * 30) + 70, // Mock score 70-100
        trending_topics: ['trending', 'viral', 'growth'],
        content_type: ['post', 'story', 'reel', 'video'][Math.floor(Math.random() * 4)]
      }));

      setContentIdeas(structuredIdeas);
      setGeneratedCount(prev => prev + ideas.length);
      toast.success(`Generated ${ideas.length} viral content ideas!`);
    } catch (error) {
      toast.error('Failed to generate content ideas. Please try again.');
      console.error('Content generation error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const saveIdea = () => {
    // In a real app, save to database
    toast.success('Idea saved to your collection!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Lightbulb className="mr-3 h-8 w-8 text-yellow-500" />
            Viral Content Ideas
          </h1>
          <p className="text-gray-600 mt-1">
            Generate AI-powered content ideas that are trending and have high viral potential
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Badge variant="secondary">
            {generatedCount} ideas generated today
          </Badge>
        </div>
      </div>

      {/* Generator Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="mr-2 h-5 w-5 text-purple-500" />
            Generate New Ideas
          </CardTitle>
          <CardDescription>
            Select your platform and niche to get personalized viral content ideas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
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

          {/* Niche Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Select Niche
              </label>
              <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                {niches.map((niche) => (
                  <button
                    key={niche}
                    onClick={() => {
                      setSelectedNiche(niche);
                      setCustomNiche('');
                    }}
                    className={`p-2 text-left rounded-md border transition-colors ${
                      selectedNiche === niche
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {niche}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Or Enter Custom Niche
              </label>
              <Textarea
                placeholder="Describe your niche, audience, or specific topic you want to create content about..."
                value={customNiche}
                onChange={(e) => {
                  setCustomNiche(e.target.value);
                  setSelectedNiche('');
                }}
                className="min-h-[200px]"
              />
            </div>
          </div>

          {/* Generate Button */}
          <Button 
            onClick={handleGenerateIdeas}
            disabled={isGenerating || (!selectedNiche && !customNiche)}
            size="lg"
            className="w-full sm:w-auto"
            loading={isGenerating}
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${isGenerating ? 'animate-spin' : ''}`} />
            {isGenerating ? 'Generating Ideas...' : 'Generate Viral Ideas'}
          </Button>
        </CardContent>
      </Card>

      {/* Generated Ideas */}
      {contentIdeas.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Your Viral Content Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentIdeas.map((idea) => (
              <Card key={idea.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <Badge 
                      variant={idea.engagement_score >= 85 ? 'default' : 'secondary'}
                      className="mb-2"
                    >
                      {idea.engagement_score}% viral potential
                    </Badge>
                    <div className="flex space-x-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(idea.title)}
                        className="h-8 w-8"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => saveIdea()}
                        className="h-8 w-8"
                      >
                        <Save className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {idea.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    {idea.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span>Trending</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>High Engagement</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {idea.content_type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Generate More Button */}
          <div className="text-center">
            <Button 
              onClick={handleGenerateIdeas}
              disabled={isGenerating}
              variant="outline"
              loading={isGenerating}
            >
              <RefreshCw className={`mr-2 h-4 w-4 ${isGenerating ? 'animate-spin' : ''}`} />
              Generate More Ideas
            </Button>
          </div>
        </div>
      )}

      {/* Tips Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">💡 Pro Tips for Viral Content</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• Post consistently during your audience&apos;s peak hours</li>
            <li>• Use trending hashtags but mix them with niche-specific ones</li>
            <li>• Create content that encourages engagement (questions, polls, etc.)</li>
            <li>• Jump on trending topics quickly while they&apos;re still hot</li>
            <li>• Tell stories that your audience can relate to</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}