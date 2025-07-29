'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Lightbulb, 
  PenTool, 
  Hash, 
  Calendar, 
  BarChart3, 
  Users, 
  Mail, 
  MessageCircle, 
  Trophy,
  Settings,
  Sparkles
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Content Ideas', href: '/dashboard/content-ideas', icon: Lightbulb },
  { name: 'Caption Writer', href: '/dashboard/caption-writer', icon: PenTool },
  { name: 'Hashtag Generator', href: '/dashboard/hashtags', icon: Hash },
  { name: 'Post Scheduler', href: '/dashboard/scheduler', icon: Calendar },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Collaborations', href: '/dashboard/collaborations', icon: Users },
  { name: 'Brand Pitches', href: '/dashboard/brand-pitches', icon: Mail },
  { name: 'DM Scripts', href: '/dashboard/dm-scripts', icon: MessageCircle },
  { name: 'Earn & Learn', href: '/dashboard/rewards', icon: Trophy },
];

const bottomNavigation = [
  { name: 'Upgrade', href: '/dashboard/pricing', icon: Sparkles },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex h-16 items-center px-6">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">GrowMate AI</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 pb-4 pt-6">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <item.icon
                    className={cn(
                      'mr-3 h-5 w-5',
                      isActive ? 'text-purple-600' : 'text-gray-400'
                    )}
                  />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Navigation */}
      <div className="px-4 pb-4">
        <ul className="space-y-1">
          {bottomNavigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <item.icon
                    className={cn(
                      'mr-3 h-5 w-5',
                      isActive ? 'text-purple-600' : 'text-gray-400'
                    )}
                  />
                  {item.name}
                  {item.name === 'Upgrade' && (
                    <span className="ml-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                      Pro
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}