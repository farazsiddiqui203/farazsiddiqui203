import { 
  TrendingUp, 
  Users, 
  Eye, 
  Heart, 
  Lightbulb, 
  PenTool, 
  Hash, 
  Calendar,
  Trophy,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

// Mock data - replace with real data from your database
const stats = [
  {
    title: 'Total Followers',
    value: '12.5K',
    change: '+12.3%',
    trend: 'up',
    icon: Users
  },
  {
    title: 'Engagement Rate',
    value: '4.8%',
    change: '+0.8%',
    trend: 'up',
    icon: Heart
  },
  {
    title: 'Monthly Reach',
    value: '85.2K',
    change: '+23.1%',
    trend: 'up',
    icon: Eye
  },
  {
    title: 'Content Score',
    value: '8.9/10',
    change: '+0.5',
    trend: 'up',
    icon: TrendingUp
  }
];

const quickActions = [
  {
    title: 'Generate Content Ideas',
    description: 'Get viral content ideas for your niche',
    icon: Lightbulb,
    href: '/dashboard/content-ideas',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'Write Captions',
    description: 'Create engaging captions with AI',
    icon: PenTool,
    href: '/dashboard/caption-writer',
    color: 'from-blue-400 to-purple-500'
  },
  {
    title: 'Find Hashtags',
    description: 'Discover trending hashtags',
    icon: Hash,
    href: '/dashboard/hashtags',
    color: 'from-green-400 to-teal-500'
  },
  {
    title: 'Schedule Posts',
    description: 'Plan your content calendar',
    icon: Calendar,
    href: '/dashboard/scheduler',
    color: 'from-pink-400 to-red-500'
  }
];

const recentActivities = [
  {
    type: 'content_idea',
    title: 'Generated 5 content ideas for Instagram',
    time: '2 hours ago',
    platform: 'Instagram'
  },
  {
    type: 'caption',
    title: 'Created caption for "Morning Routine" post',
    time: '4 hours ago',
    platform: 'YouTube'
  },
  {
    type: 'hashtags',
    title: 'Found 15 trending hashtags for fitness niche',
    time: '6 hours ago',
    platform: 'TikTok'
  },
  {
    type: 'reward',
    title: 'Earned 50 coins for daily login',
    time: '1 day ago',
    platform: 'System'
  }
];

const platformStats = [
  {
    name: 'Instagram',
    followers: '8.2K',
    engagement: '5.2%',
    posts: 24,
    color: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    name: 'YouTube',
    followers: '3.1K',
    engagement: '4.1%',
    posts: 12,
    color: 'bg-red-500'
  },
  {
    name: 'LinkedIn',
    followers: '1.2K',
    engagement: '6.8%',
    posts: 18,
    color: 'bg-blue-600'
  }
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John! 👋</h1>
          <p className="text-gray-600 mt-1">Here&apos;s what&apos;s happening with your social media growth</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Badge variant="success" className="flex items-center space-x-1">
            <Trophy className="h-3 w-3" />
            <span>Level 5</span>
          </Badge>
          <Badge variant="secondary" className="flex items-center space-x-1">
            <Zap className="h-3 w-3" />
            <span>85 Credits</span>
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change} from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Jump into your most-used features to keep growing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <div className="group p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer">
                  <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-3`}>
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all mt-2" />
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Performance</CardTitle>
            <CardDescription>
              Your growth across different social platforms
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {platformStats.map((platform, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className={`h-8 w-8 rounded-full ${platform.color} flex items-center justify-center text-white text-sm font-semibold`}>
                    {platform.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{platform.name}</p>
                    <p className="text-sm text-gray-600">{platform.posts} posts this month</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{platform.followers}</p>
                  <p className="text-sm text-green-600">{platform.engagement} engagement</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest actions and achievements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  {activity.type === 'content_idea' && <Lightbulb className="h-4 w-4 text-white" />}
                  {activity.type === 'caption' && <PenTool className="h-4 w-4 text-white" />}
                  {activity.type === 'hashtags' && <Hash className="h-4 w-4 text-white" />}
                  {activity.type === 'reward' && <Trophy className="h-4 w-4 text-white" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <p className="text-xs text-gray-500">{activity.time}</p>
                    <span className="text-xs text-gray-300">•</span>
                    <Badge variant="outline" className="text-xs">
                      {activity.platform}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Growth Tips */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-900">💡 Growth Tip of the Day</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-purple-800 mb-4">
            Post consistently at your optimal times! Our AI analysis shows your audience is most active 
            between 6-8 PM on weekdays. Schedule your content accordingly for maximum engagement.
          </p>
          <Link href="/dashboard/scheduler">
            <Button variant="outline" size="sm">
              Schedule Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}