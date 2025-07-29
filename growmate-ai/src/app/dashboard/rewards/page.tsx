'use client';

import { useState } from 'react';
import { 
  Trophy, 
  Coins, 
  Star, 
  Gift, 
  Target, 
  CheckCircle,
  Users,
  Lightbulb,
  PenTool,
  Hash,
  Calendar,
  Share2,
  Award,
  Zap,
  Crown,
  Flame
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// Mock user data
const userStats = {
  level: 5,
  xp: 2340,
  xpToNext: 2800,
  coins: 1250,
  streak: 7,
  totalTasks: 23,
  completedTasks: 18
};

const dailyTasks = [
  {
    id: 1,
    title: 'Generate 3 Content Ideas',
    description: 'Use the AI content generator to create viral ideas',
    reward: 50,
    xp: 25,
    icon: Lightbulb,
    completed: true,
    category: 'content'
  },
  {
    id: 2,
    title: 'Write 2 Captions',
    description: 'Create engaging captions with AI assistance',
    reward: 40,
    xp: 20,
    icon: PenTool,
    completed: true,
    category: 'content'
  },
  {
    id: 3,
    title: 'Find 10 Hashtags',
    description: 'Generate hashtags for your niche',
    reward: 30,
    xp: 15,
    icon: Hash,
    completed: false,
    category: 'content'
  },
  {
    id: 4,
    title: 'Schedule 1 Post',
    description: 'Plan your content for optimal engagement',
    reward: 35,
    xp: 18,
    icon: Calendar,
    completed: false,
    category: 'planning'
  },
  {
    id: 5,
    title: 'Share GrowMate AI',
    description: 'Refer a friend and earn bonus rewards',
    reward: 100,
    xp: 50,
    icon: Share2,
    completed: false,
    category: 'social'
  }
];

const achievements = [
  {
    id: 1,
    title: 'Content Creator',
    description: 'Generate 100 content ideas',
    progress: 67,
    total: 100,
    reward: 500,
    icon: Lightbulb,
    unlocked: false,
    rarity: 'common'
  },
  {
    id: 2,
    title: 'Caption Master',
    description: 'Write 50 AI-powered captions',
    progress: 32,
    total: 50,
    reward: 300,
    icon: PenTool,
    unlocked: false,
    rarity: 'common'
  },
  {
    id: 3,
    title: 'Hashtag Hero',
    description: 'Generate 500 hashtags',
    progress: 234,
    total: 500,
    reward: 750,
    icon: Hash,
    unlocked: false,
    rarity: 'rare'
  },
  {
    id: 4,
    title: 'Social Butterfly',
    description: 'Refer 10 friends to GrowMate AI',
    progress: 3,
    total: 10,
    reward: 1000,
    icon: Users,
    unlocked: false,
    rarity: 'epic'
  },
  {
    id: 5,
    title: 'Streak Master',
    description: 'Complete daily tasks for 30 days straight',
    progress: 7,
    total: 30,
    reward: 2000,
    icon: Flame,
    unlocked: false,
    rarity: 'legendary'
  }
];

const rewards = [
  {
    id: 1,
    title: '100 Extra Credits',
    description: 'Boost your monthly AI credits',
    cost: 500,
    icon: Zap,
    type: 'credits'
  },
  {
    id: 2,
    title: 'Premium Features (7 days)',
    description: 'Unlock all premium features for a week',
    cost: 800,
    icon: Crown,
    type: 'premium'
  },
  {
    id: 3,
    title: 'Custom Hashtag Set',
    description: 'Get a personalized hashtag collection',
    cost: 300,
    icon: Hash,
    type: 'content'
  },
  {
    id: 4,
    title: 'Brand Pitch Template',
    description: 'Professional email templates for outreach',
    cost: 400,
    icon: Target,
    type: 'content'
  }
];

const leaderboard = [
  { rank: 1, name: 'Sarah J.', level: 12, coins: 4250, avatar: '👩‍💼' },
  { rank: 2, name: 'Mike C.', level: 11, coins: 3890, avatar: '👨‍💻' },
  { rank: 3, name: 'You', level: 5, coins: 1250, avatar: '🚀', isUser: true },
  { rank: 4, name: 'Lisa R.', level: 8, coins: 2100, avatar: '👩‍🚀' },
  { rank: 5, name: 'John D.', level: 7, coins: 1950, avatar: '👨‍🎨' }
];

export default function RewardsPage() {
  const [selectedTab, setSelectedTab] = useState('tasks');

  const completeTask = (taskId: number) => {
    // In a real app, update the task status in the database
    console.log(`Completing task ${taskId}`);
  };

  const claimReward = (rewardId: number) => {
    // In a real app, process the reward claim
    console.log(`Claiming reward ${rewardId}`);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300 bg-gray-50';
      case 'rare': return 'border-blue-300 bg-blue-50';
      case 'epic': return 'border-purple-300 bg-purple-50';
      case 'legendary': return 'border-yellow-300 bg-yellow-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getRarityBadge = (rarity: string) => {
    const colors = {
      common: 'bg-gray-100 text-gray-800',
      rare: 'bg-blue-100 text-blue-800',
      epic: 'bg-purple-100 text-purple-800',
      legendary: 'bg-yellow-100 text-yellow-800'
    };
    return colors[rarity as keyof typeof colors] || colors.common;
  };

  const levelProgress = (userStats.xp / userStats.xpToNext) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Trophy className="mr-3 h-8 w-8 text-yellow-500" />
            Earn & Learn Zone
          </h1>
          <p className="text-gray-600 mt-1">
            Complete tasks, earn rewards, and level up your social media game
          </p>
        </div>
      </div>

      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Level</p>
                <p className="text-3xl font-bold">{userStats.level}</p>
              </div>
              <Star className="h-10 w-10 text-yellow-300" />
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-purple-100 mb-1">
                <span>XP</span>
                <span>{userStats.xp}/{userStats.xpToNext}</span>
              </div>
              <Progress value={levelProgress} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100">Coins</p>
                <p className="text-3xl font-bold">{userStats.coins}</p>
              </div>
              <Coins className="h-10 w-10 text-yellow-200" />
            </div>
            <p className="text-sm text-yellow-100 mt-2">Spend on rewards</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Streak</p>
                <p className="text-3xl font-bold">{userStats.streak}</p>
              </div>
              <Flame className="h-10 w-10 text-orange-300" />
            </div>
            <p className="text-sm text-green-100 mt-2">Days in a row</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Tasks</p>
                <p className="text-3xl font-bold">{userStats.completedTasks}/{userStats.totalTasks}</p>
              </div>
              <CheckCircle className="h-10 w-10 text-green-300" />
            </div>
            <p className="text-sm text-blue-100 mt-2">Completed</p>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {[
          { id: 'tasks', label: 'Daily Tasks', icon: Target },
          { id: 'achievements', label: 'Achievements', icon: Award },
          { id: 'rewards', label: 'Reward Store', icon: Gift },
          { id: 'leaderboard', label: 'Leaderboard', icon: Trophy }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors flex-1 justify-center ${
              selectedTab === tab.id
                ? 'bg-white text-purple-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <tab.icon className="h-4 w-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {selectedTab === 'tasks' && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5 text-purple-500" />
                Daily Tasks
              </CardTitle>
              <CardDescription>
                Complete tasks to earn coins and XP. Tasks reset daily!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dailyTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-4 border rounded-lg transition-all ${
                      task.completed 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                          task.completed 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {task.completed ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <task.icon className="h-5 w-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-medium ${
                            task.completed ? 'text-green-800 line-through' : 'text-gray-900'
                          }`}>
                            {task.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center space-x-1 text-sm text-yellow-600">
                              <Coins className="h-4 w-4" />
                              <span>{task.reward} coins</span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-purple-600">
                              <Star className="h-4 w-4" />
                              <span>{task.xp} XP</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {task.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      {!task.completed && (
                        <Button
                          size="sm"
                          onClick={() => completeTask(task.id)}
                          className="ml-4"
                        >
                          Complete
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedTab === 'achievements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className={`${getRarityColor(achievement.rarity)} border-2`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </div>
                  </div>
                  <Badge className={getRarityBadge(achievement.rarity)}>
                    {achievement.rarity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{achievement.progress}/{achievement.total}</span>
                  </div>
                  <Progress value={(achievement.progress / achievement.total) * 100} />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-yellow-600">
                      <Coins className="h-4 w-4" />
                      <span>{achievement.reward} coins</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {achievement.total - achievement.progress} remaining
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {selectedTab === 'rewards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rewards.map((reward) => (
            <Card key={reward.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <reward.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{reward.title}</CardTitle>
                    <CardDescription>{reward.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-lg font-semibold text-yellow-600">
                    <Coins className="h-5 w-5" />
                    <span>{reward.cost}</span>
                  </div>
                  <Button
                    onClick={() => claimReward(reward.id)}
                    disabled={userStats.coins < reward.cost}
                    variant={userStats.coins >= reward.cost ? 'default' : 'outline'}
                  >
                    {userStats.coins >= reward.cost ? 'Claim' : 'Not enough coins'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {selectedTab === 'leaderboard' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
              Top Performers
            </CardTitle>
            <CardDescription>
              See how you stack up against other GrowMate AI users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaderboard.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    user.isUser 
                      ? 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200' 
                      : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      user.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                      user.rank === 2 ? 'bg-gray-300 text-gray-700' :
                      user.rank === 3 ? 'bg-orange-400 text-orange-900' :
                      'bg-gray-200 text-gray-600'
                    }`}>
                      {user.rank}
                    </div>
                    <span className="text-2xl">{user.avatar}</span>
                    <div>
                      <p className={`font-medium ${user.isUser ? 'text-purple-900' : 'text-gray-900'}`}>
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-600">Level {user.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-600">
                    <Coins className="h-4 w-4" />
                    <span className="font-semibold">{user.coins.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}