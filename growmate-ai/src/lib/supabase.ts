import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  subscription_tier: 'free' | 'basic' | 'premium' | 'enterprise';
  credits: number;
  coins: number;
  level: number;
  referral_code: string;
  referred_by?: string;
  created_at: string;
  updated_at: string;
}

export interface ContentIdea {
  id: string;
  user_id: string;
  platform: 'instagram' | 'youtube' | 'linkedin' | 'facebook' | 'twitter';
  niche: string;
  title: string;
  description: string;
  hashtags: string[];
  engagement_score: number;
  created_at: string;
}

export interface Caption {
  id: string;
  user_id: string;
  platform: 'instagram' | 'youtube' | 'linkedin' | 'facebook' | 'twitter';
  content: string;
  hook: string;
  cta: string;
  hashtags: string[];
  tone: string;
  created_at: string;
}

export interface ScheduledPost {
  id: string;
  user_id: string;
  platform: 'instagram' | 'youtube' | 'linkedin' | 'facebook' | 'twitter';
  content: string;
  scheduled_time: string;
  status: 'scheduled' | 'published' | 'failed';
  created_at: string;
}

export interface Analytics {
  id: string;
  user_id: string;
  platform: 'instagram' | 'youtube' | 'linkedin' | 'facebook' | 'twitter';
  followers_count: number;
  engagement_rate: number;
  reach: number;
  impressions: number;
  date: string;
}

export interface Reward {
  id: string;
  user_id: string;
  type: 'task_completion' | 'referral' | 'daily_login' | 'level_up';
  coins_earned: number;
  description: string;
  created_at: string;
}