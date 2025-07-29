import { NextRequest, NextResponse } from 'next/server';
import { generateHashtags } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    const { platform, niche, content, count = 10 } = await request.json();

    if (!platform || !niche || !content) {
      return NextResponse.json(
        { error: 'Platform, niche, and content are required' },
        { status: 400 }
      );
    }

    const hashtags = await generateHashtags(platform, niche, content, count);
    
    return NextResponse.json({ hashtags });
  } catch (error) {
    console.error('Hashtag generation API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate hashtags' },
      { status: 500 }
    );
  }
}