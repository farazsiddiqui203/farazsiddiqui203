'use client';

import { useState } from 'react';
import { Bell, Search, Menu, Coins, Zap, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock user data - replace with actual user context
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    credits: 85,
    coins: 1250,
    level: 5,
    tier: 'Free'
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Mobile menu + Search */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search features, content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-80 pl-10"
            />
          </div>
        </div>

        {/* Right side - User info and actions */}
        <div className="flex items-center space-x-4">
          {/* Credits and Coins */}
          <div className="hidden sm:flex items-center space-x-3">
            <div className="flex items-center space-x-1 px-3 py-1 bg-blue-50 rounded-full">
              <Zap className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">{user.credits}</span>
              <span className="text-xs text-blue-600">credits</span>
            </div>
            <div className="flex items-center space-x-1 px-3 py-1 bg-yellow-50 rounded-full">
              <Coins className="h-4 w-4 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-700">{user.coins}</span>
              <span className="text-xs text-yellow-600">coins</span>
            </div>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <div className="flex items-center space-x-2">
                <Badge variant={user.tier === 'Free' ? 'secondary' : 'default'} className="text-xs">
                  {user.tier}
                </Badge>
                <span className="text-xs text-gray-500">Level {user.level}</span>
              </div>
            </div>
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile search */}
      <div className="mt-4 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search features, content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10"
          />
        </div>
      </div>

      {/* Mobile credits/coins */}
      <div className="mt-4 flex sm:hidden items-center space-x-3">
        <div className="flex items-center space-x-1 px-3 py-1 bg-blue-50 rounded-full">
          <Zap className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">{user.credits}</span>
          <span className="text-xs text-blue-600">credits</span>
        </div>
        <div className="flex items-center space-x-1 px-3 py-1 bg-yellow-50 rounded-full">
          <Coins className="h-4 w-4 text-yellow-600" />
          <span className="text-sm font-medium text-yellow-700">{user.coins}</span>
          <span className="text-xs text-yellow-600">coins</span>
        </div>
      </div>
    </header>
  );
}