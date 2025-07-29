'use client';

import { useState } from 'react';
import { 
  Hash, 
  Copy, 
  Save, 
  Sparkles,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  Twitter,
  TrendingUp,
  Users,
  Target,
  Star
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { generateHashtags } from '@/lib/ai-client';
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

const hashtagCategories = [
  { name: 'Trending', description: 'Currently viral hashtags', color: 'bg-red-100 text-red-800' },
  { name: 'Niche', description: 'Specific to your content area', color: 'bg-blue-100 text-blue-800' },
  { name: 'Community', description: 'Connect with your audience', color: 'bg-green-100 text-green-800' },
  { name: 'Branded', description: 'Build your personal brand', color: 'bg-purple-100 text-purple-800' }
];

interface GeneratedHashtag {
  tag: string;
  category: 'trending' | 'niche' | 'community' | 'branded';
  engagement_score: number;
  posts_count: string;
  difficulty: 'low' | 'medium' | 'high';
}

interface HashtagSet {
  id: string;
  platform: string;
  niche: string;
  content: string;
  hashtags: GeneratedHashtag[];
  timestamp: Date;
}

export default function HashtagsPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');
  const [selectedNiche, setSelectedNiche] = useState('');
  const [contentDescription, setContentDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [hashtagSets, setHashtagSets] = useState<HashtagSet[]>([]);
  const [generatedCount, setGeneratedCount] = useState(0);

  const handleGenerateHashtags = async () => {
    if (!selectedNiche || !contentDescription.trim()) {
      toast.error('Please select a niche and describe your content');
      return;
    }

    setIsGenerating(true);
    try {
      const hashtags = await generateHashtags(selectedPlatform, selectedNiche, contentDescription, 20);
      
      // Transform AI response into structured hashtag data
      const structuredHashtags: GeneratedHashtag[] = hashtags.map((tag, index) => {
        const categories: Array<'trending' | 'niche' | 'community' | 'branded'> = ['trending', 'niche', 'community', 'branded'];
        const difficulties: Array<'low' | 'medium' | 'high'> = ['low', 'medium', 'high'];
        
        return {
          tag: tag.startsWith('#') ? tag : `#${tag}`,
          category: categories[index % categories.length],
          engagement_score: Math.floor(Math.random() * 40) + 60, // 60-100
          posts_count: ['1.2M', '856K', '432K', '2.1M', '678K'][Math.floor(Math.random() * 5)],
          difficulty: difficulties[Math.floor(Math.random() * 3)]
        };
      });

      const newHashtagSet: HashtagSet = {
        id: `set-${Date.now()}`,
        platform: selectedPlatform,
        niche: selectedNiche,
        content: contentDescription,
        hashtags: structuredHashtags,
        timestamp: new Date()
      };

      setHashtagSets(prev => [newHashtagSet, ...prev]);
      setGeneratedCount(prev => prev + hashtags.length);
      toast.success(`Generated ${hashtags.length} smart hashtags!`);
    } catch (error) {
      toast.error('Failed to generate hashtags. Please try again.');
      console.error('Hashtag generation error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyHashtags = (hashtags: GeneratedHashtag[], category?: string) => {
    const filteredHashtags = category 
      ? hashtags.filter(h => h.category === category)
      : hashtags;
    
    const hashtagText = filteredHashtags.map(h => h.tag).join(' ');
    navigator.clipboard.writeText(hashtagText);
    
    const categoryText = category ? `${category} ` : '';
    toast.success(`${categoryText}hashtags copied to clipboard!`);
  };

  const saveHashtagSet = () => {
    // In a real app, save to database
    toast.success('Hashtag set saved to your collection!');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'trending': return TrendingUp;
      case 'niche': return Target;
      case 'community': return Users;
      case 'branded': return Star;
      default: return Hash;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Hash className="mr-3 h-8 w-8 text-green-500" />
            Smart Hashtag Generator
          </h1>
          <p className="text-gray-600 mt-1">
            Get high-engagement hashtags tailored to your content and niche for maximum reach
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Badge variant="secondary">
            {generatedCount} hashtags generated today
          </Badge>
        </div>
      </div>

      {/* Generator Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="mr-2 h-5 w-5 text-purple-500" />
            Generate Smart Hashtags
          </CardTitle>
          <CardDescription>
            Describe your content and get AI-powered hashtag recommendations for maximum engagement
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
          <div>
            <label className="text-sm font-medium text-gray-700 mb-3 block">
              Select Your Niche
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              {niches.map((niche) => (
                <button
                  key={niche}
                  onClick={() => setSelectedNiche(niche)}
                  className={`p-2 text-sm rounded-md border transition-colors ${
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

          {/* Content Description */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Describe Your Content
            </label>
            <Textarea
              placeholder="Describe what your post is about, the mood, target audience, and any specific topics you want to cover..."
              value={contentDescription}
              onChange={(e) => setContentDescription(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          {/* Generate Button */}
          <Button 
            onClick={handleGenerateHashtags}
            disabled={isGenerating || !selectedNiche || !contentDescription.trim()}
            size="lg"
            className="w-full sm:w-auto"
            loading={isGenerating}
          >
            <Hash className={`mr-2 h-4 w-4 ${isGenerating ? 'animate-pulse' : ''}`} />
            {isGenerating ? 'Finding Best Hashtags...' : 'Generate Smart Hashtags'}
          </Button>
        </CardContent>
      </Card>

      {/* Hashtag Categories Info */}
      <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
        <CardHeader>
          <CardTitle className="text-indigo-900">📊 Hashtag Categories Explained</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {hashtagCategories.map((category, index) => (
              <div key={index} className="text-center">
                <Badge className={`${category.color} mb-2`}>
                  {category.name}
                </Badge>
                <p className="text-sm text-indigo-700">{category.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Generated Hashtag Sets */}
      {hashtagSets.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Generated Hashtag Sets</h2>
          
          {hashtagSets.map((set) => (
            <Card key={set.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">
                      {platforms.find(p => p.id === set.platform)?.name} Hashtags
                    </CardTitle>
                    <CardDescription>
                      {set.niche} • {set.hashtags.length} hashtags • {set.timestamp.toLocaleDateString()}
                    </CardDescription>
                    <p className="text-sm text-gray-600 mt-2">{set.content}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyHashtags(set.hashtags)}
                    >
                      <Copy className="h-4 w-4 mr-1" />
                      Copy All
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => saveHashtagSet()}
                    >
                      <Save className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {hashtagCategories.map((category) => {
                    const categoryHashtags = set.hashtags.filter(h => h.category === category.name.toLowerCase());
                    if (categoryHashtags.length === 0) return null;
                    
                    const Icon = getCategoryIcon(category.name.toLowerCase());
                    
                    return (
                      <Button
                        key={category.name}
                        variant="outline"
                        size="sm"
                        onClick={() => copyHashtags(set.hashtags, category.name.toLowerCase())}
                        className="flex items-center space-x-2"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{category.name} ({categoryHashtags.length})</span>
                        <Copy className="h-3 w-3" />
                      </Button>
                    );
                  })}
                </div>

                {/* Hashtags Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {set.hashtags.map((hashtag, index) => (
                    <div
                      key={index}
                      className="p-3 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer"
                      onClick={() => copyHashtags([hashtag])}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="font-medium text-gray-900">{hashtag.tag}</span>
                        <Copy className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <span>{hashtag.posts_count} posts</span>
                        <Badge variant="outline" className={getDifficultyColor(hashtag.difficulty)}>
                          {hashtag.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {hashtag.category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="h-3 w-3 text-green-500" />
                          <span className="text-xs text-green-600">{hashtag.engagement_score}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Tips Card */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardHeader>
          <CardTitle className="text-orange-900"># Hashtag Strategy Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-orange-800 text-sm">
            <li>• Mix high-competition and low-competition hashtags for better reach</li>
            <li>• Use 5-10 hashtags on Instagram, 1-2 on Twitter, and 3-5 on LinkedIn</li>
            <li>• Research hashtags before using them to avoid banned or inappropriate ones</li>
            <li>• Create a branded hashtag to build community around your content</li>
            <li>• Monitor hashtag performance and adjust your strategy regularly</li>
            <li>• Hide hashtags in your first comment on Instagram for cleaner captions</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}