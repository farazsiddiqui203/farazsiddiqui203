import { NextRequest, NextResponse } from 'next/server';
import { generateCaption } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    const { platform, topic, tone = 'engaging', includeHashtags = true } = await request.json();

    if (!platform || !topic) {
      return NextResponse.json(
        { error: 'Platform and topic are required' },
        { status: 400 }
      );
    }

    const caption = await generateCaption(platform, topic, tone, includeHashtags);
    
    return NextResponse.json({ caption });
  } catch (error) {
    console.error('Caption generation API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate caption' },
      { status: 500 }
    );
  }
}