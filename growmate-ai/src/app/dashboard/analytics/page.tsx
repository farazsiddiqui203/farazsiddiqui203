'use client';

import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  Heart, 
  MessageCircle,
  Share2,
  Calendar,
  Instagram,
  Youtube,
  Linkedin,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Mock data - replace with real analytics data
const overviewStats = [
  {
    title: 'Total Followers',
    value: '12,547',
    change: '+12.3%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    title: 'Engagement Rate',
    value: '4.8%',
    change: '+0.8%',
    trend: 'up',
    icon: Heart,
    color: 'text-red-600'
  },
  {
    title: 'Monthly Reach',
    value: '85.2K',
    change: '+23.1%',
    trend: 'up',
    icon: Eye,
    color: 'text-green-600'
  },
  {
    title: 'Content Posts',
    value: '47',
    change: '+5',
    trend: 'up',
    icon: MessageCircle,
    color: 'text-purple-600'
  }
];

const platformStats = [
  {
    platform: 'Instagram',
    icon: Instagram,
    followers: 8547,
    engagement: 5.2,
    posts: 24,
    reach: '45.2K',
    color: 'from-purple-500 to-pink-500',
    change: '+15.3%'
  },
  {
    platform: 'YouTube',
    icon: Youtube,
    followers: 2341,
    engagement: 4.1,
    posts: 8,
    reach: '23.1K',
    color: 'from-red-500 to-red-600',
    change: '+8.7%'
  },
  {
    platform: 'LinkedIn',
    icon: Linkedin,
    followers: 1659,
    engagement: 6.8,
    posts: 15,
    reach: '16.9K',
    color: 'from-blue-600 to-blue-700',
    change: '+22.1%'
  }
];

const topContent = [
  {
    id: 1,
    title: '5 Morning Habits That Changed My Life',
    platform: 'Instagram',
    engagement: 8.7,
    likes: 1247,
    comments: 89,
    shares: 156,
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'Building a Successful Online Business',
    platform: 'LinkedIn',
    engagement: 12.3,
    likes: 892,
    comments: 67,
    shares: 234,
    date: '2024-01-12'
  },
  {
    id: 3,
    title: 'Quick Healthy Breakfast Ideas',
    platform: 'YouTube',
    engagement: 6.9,
    likes: 2341,
    comments: 145,
    shares: 89,
    date: '2024-01-10'
  }
];

const weeklyData = [
  { day: 'Mon', followers: 12100, engagement: 4.2 },
  { day: 'Tue', followers: 12180, engagement: 4.5 },
  { day: 'Wed', followers: 12250, engagement: 4.8 },
  { day: 'Thu', followers: 12320, engagement: 4.6 },
  { day: 'Fri', followers: 12420, engagement: 5.1 },
  { day: 'Sat', followers: 12480, engagement: 4.9 },
  { day: 'Sun', followers: 12547, engagement: 4.8 }
];

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const periods = [
    { id: '7d', label: '7 Days' },
    { id: '30d', label: '30 Days' },
    { id: '90d', label: '90 Days' },
    { id: '1y', label: '1 Year' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <BarChart3 className="mr-3 h-8 w-8 text-indigo-500" />
            Analytics Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Track your growth, engagement, and content performance across all platforms
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          {periods.map((period) => (
            <Button
              key={period.id}
              variant={selectedPeriod === period.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedPeriod(period.id)}
            >
              {period.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center text-xs mt-1">
                {stat.trend === 'up' ? (
                  <ArrowUp className="h-3 w-3 text-green-600 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 text-red-600 mr-1" />
                )}
                <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>
                <span className="text-gray-500 ml-1">from last period</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Performance</CardTitle>
            <CardDescription>
              Your growth and engagement across different platforms
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {platformStats.map((platform, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center`}>
                      <platform.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{platform.platform}</p>
                      <p className="text-sm text-gray-600">{platform.posts} posts this month</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    {platform.change}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{platform.followers.toLocaleString()}</p>
                    <p className="text-gray-600">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{platform.engagement}%</p>
                    <p className="text-gray-600">Engagement</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{platform.reach}</p>
                    <p className="text-gray-600">Reach</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Growth</CardTitle>
            <CardDescription>
              Follower growth and engagement trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Simple bar chart representation */}
              <div className="space-y-3">
                {weeklyData.map((day, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 text-sm text-gray-600">{day.day}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: `${(day.followers / 13000) * 100}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-900 w-16 text-right">
                      {day.followers.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Weekly Growth: +447 followers</span>
                  <span>Avg Engagement: 4.7%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Content */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Content</CardTitle>
          <CardDescription>
            Your best-performing posts from the selected period
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topContent.map((content, index) => (
              <div key={content.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="text-xs">
                      #{index + 1}
                    </Badge>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">{content.title}</h4>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                      <span>{content.platform}</span>
                      <span>•</span>
                      <span>{content.date}</span>
                      <span>•</span>
                      <span className="text-green-600">{content.engagement}% engagement</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>{content.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{content.comments}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Share2 className="h-4 w-4" />
                    <span>{content.shares}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Insights & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900">📊 Key Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-blue-800 text-sm">
              <li className="flex items-start space-x-2">
                <TrendingUp className="h-4 w-4 mt-0.5 text-blue-600" />
                <span>Your engagement rate increased by 23% this week</span>
              </li>
              <li className="flex items-start space-x-2">
                <Users className="h-4 w-4 mt-0.5 text-blue-600" />
                <span>LinkedIn shows the highest engagement rate at 6.8%</span>
              </li>
              <li className="flex items-start space-x-2">
                <Calendar className="h-4 w-4 mt-0.5 text-blue-600" />
                <span>Your best posting time is between 6-8 PM on weekdays</span>
              </li>
              <li className="flex items-start space-x-2">
                <MessageCircle className="h-4 w-4 mt-0.5 text-blue-600" />
                <span>Educational content performs 40% better than entertainment</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-900">🎯 Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-green-800 text-sm">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Post more educational content to boost engagement</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Increase LinkedIn posting frequency to 3-4 times per week</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Use more video content on Instagram for better reach</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Engage with comments within the first hour of posting</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}