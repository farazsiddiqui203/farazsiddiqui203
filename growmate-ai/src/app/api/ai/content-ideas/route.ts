import { NextRequest, NextResponse } from 'next/server';
import { generateContentIdeas } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    const { platform, niche, count = 5 } = await request.json();

    if (!platform || !niche) {
      return NextResponse.json(
        { error: 'Platform and niche are required' },
        { status: 400 }
      );
    }

    const ideas = await generateContentIdeas(platform, niche, count);
    
    return NextResponse.json({ ideas });
  } catch (error) {
    console.error('Content ideas API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate content ideas' },
      { status: 500 }
    );
  }
}