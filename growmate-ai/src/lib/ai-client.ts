// Client-side AI functions that call our API routes

export async function generateContentIdeas(platform: string, niche: string, count: number = 5): Promise<string[]> {
  try {
    const response = await fetch('/api/ai/content-ideas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ platform, niche, count }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.ideas;
  } catch (error) {
    console.error('Content ideas generation error:', error);
    throw new Error('Failed to generate content ideas');
  }
}

export async function generateCaption(
  platform: string,
  topic: string,
  tone: string = 'engaging',
  includeHashtags: boolean = true
): Promise<{ caption: string; hook: string; cta: string; hashtags: string[] }> {
  try {
    const response = await fetch('/api/ai/captions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ platform, topic, tone, includeHashtags }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.caption;
  } catch (error) {
    console.error('Caption generation error:', error);
    throw new Error('Failed to generate caption');
  }
}

export async function generateHashtags(
  platform: string,
  niche: string,
  content: string,
  count: number = 10
): Promise<string[]> {
  try {
    const response = await fetch('/api/ai/hashtags', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ platform, niche, content, count }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.hashtags;
  } catch (error) {
    console.error('Hashtag generation error:', error);
    throw new Error('Failed to generate hashtags');
  }
}