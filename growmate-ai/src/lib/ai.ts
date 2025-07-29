const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

interface AIRequest {
  model: string;
  messages: Array<{
    role: 'system' | 'user' | 'assistant';
    content: string;
  }>;
  temperature?: number;
  max_tokens?: number;
}

export async function generateAIResponse(request: AIRequest): Promise<string> {
  try {
    const response = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
        'X-Title': 'GrowMate AI',
      },
      body: JSON.stringify({
        ...request,
        model: request.model || 'openai/gpt-4o-mini',
        temperature: request.temperature || 0.7,
        max_tokens: request.max_tokens || 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(`AI API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
  } catch (error) {
    console.error('AI generation error:', error);
    throw new Error('Failed to generate AI content');
  }
}

export async function generateContentIdeas(platform: string, niche: string, count: number = 5): Promise<string[]> {
  const prompt = `Generate ${count} viral content ideas for ${platform} in the ${niche} niche. 
  Focus on trending topics, engagement hooks, and content that has high viral potential.
  Return only the ideas as a JSON array of strings.`;

  const response = await generateAIResponse({
    model: 'openai/gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: 'You are a social media expert who creates viral content ideas. Always respond with valid JSON array format.'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.8,
  });

  try {
    return JSON.parse(response);
  } catch {
    return response.split('\n').filter(line => line.trim()).slice(0, count);
  }
}

export async function generateCaption(
  platform: string,
  topic: string,
  tone: string = 'engaging',
  includeHashtags: boolean = true
): Promise<{ caption: string; hook: string; cta: string; hashtags: string[] }> {
  const prompt = `Create a ${tone} ${platform} caption about "${topic}".
  
  Requirements:
  - Start with a compelling hook
  - Include engaging content
  - End with a clear call-to-action
  - ${includeHashtags ? 'Include relevant hashtags' : 'No hashtags needed'}
  
  Return as JSON with fields: caption, hook, cta, hashtags (array)`;

  const response = await generateAIResponse({
    model: 'openai/gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `You are a ${platform} content expert. Create engaging captions that drive engagement and conversions.`
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.7,
  });

  try {
    return JSON.parse(response);
  } catch {
    return {
      caption: response,
      hook: response.split('\n')[0] || '',
      cta: 'Let me know your thoughts in the comments!',
      hashtags: includeHashtags ? ['#socialmedia', '#content', '#growth'] : []
    };
  }
}

export async function generateHashtags(
  platform: string,
  niche: string,
  content: string,
  count: number = 10
): Promise<string[]> {
  const prompt = `Generate ${count} high-engagement hashtags for ${platform} in the ${niche} niche.
  Content context: "${content}"
  
  Mix of:
  - Niche-specific hashtags
  - Trending hashtags
  - Community hashtags
  - Branded hashtags
  
  Return as JSON array of hashtag strings (with # symbol).`;

  const response = await generateAIResponse({
    model: 'openai/gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: 'You are a hashtag research expert who finds high-engagement hashtags for social media growth.'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.6,
  });

  try {
    return JSON.parse(response);
  } catch {
    return response.split('\n').filter(line => line.includes('#')).slice(0, count);
  }
}

export async function generateBrandPitch(
  niche: string,
  followerCount: number,
  engagementRate: number,
  platforms: string[]
): Promise<string> {
  const prompt = `Create a professional brand collaboration pitch email for an influencer with:
  - Niche: ${niche}
  - Followers: ${followerCount}
  - Engagement Rate: ${engagementRate}%
  - Platforms: ${platforms.join(', ')}
  
  Include:
  - Professional introduction
  - Value proposition
  - Collaboration ideas
  - Portfolio highlights
  - Call to action
  
  Keep it concise and compelling.`;

  return await generateAIResponse({
    model: 'openai/gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: 'You are a professional brand partnership specialist who writes compelling collaboration pitches.'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.6,
  });
}

export async function generateDMScript(
  purpose: 'collaboration' | 'networking' | 'outreach',
  targetType: 'influencer' | 'brand' | 'creator',
  context: string
): Promise<string> {
  const prompt = `Create a personalized DM script for ${purpose} with a ${targetType}.
  Context: ${context}
  
  Requirements:
  - Friendly and professional tone
  - Personalized opening
  - Clear value proposition
  - Soft call-to-action
  - Keep under 150 words
  
  Make it feel genuine and not spammy.`;

  return await generateAIResponse({
    model: 'openai/gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: 'You are a social media networking expert who writes authentic, engaging DM scripts.'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.7,
  });
}