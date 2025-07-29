import Link from 'next/link';
import { 
  Sparkles, 
  Lightbulb, 
  PenTool, 
  Hash, 
  Calendar, 
  BarChart3, 
  Users, 
  Mail, 
  MessageCircle, 
  Trophy,
  ArrowRight,
  Check,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: Lightbulb,
    title: 'Viral Content Ideas',
    description: 'AI-generated content ideas that are trending and have high viral potential for your niche.'
  },
  {
    icon: PenTool,
    title: 'AI Caption Writer',
    description: 'Create engaging captions with hooks and CTAs that convert for all social platforms.'
  },
  {
    icon: Hash,
    title: 'Smart Hashtags',
    description: 'Get high-engagement hashtags tailored to your content and niche for maximum reach.'
  },
  {
    icon: Calendar,
    title: 'Post Scheduler',
    description: 'Schedule posts at optimal times with AI-powered best time recommendations.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track your growth, engagement, and content performance across all platforms.'
  },
  {
    icon: Users,
    title: 'Collaboration Finder',
    description: 'Find and connect with similar creators and influencers for partnerships.'
  },
  {
    icon: Mail,
    title: 'Brand Pitch Generator',
    description: 'Auto-generate professional pitches to attract brand deals and sponsorships.'
  },
  {
    icon: MessageCircle,
    title: 'DM Scripts',
    description: 'Personalized message templates for networking and outreach that get responses.'
  },
  {
    icon: Trophy,
    title: 'Earn & Learn Zone',
    description: 'Gamified system with rewards, coins, and levels to keep you motivated.'
  }
];

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      '1 platform connection',
      '5 daily credits',
      'Basic content ideas',
      'Limited hashtag suggestions',
      'Community support'
    ],
    popular: false,
    cta: 'Get Started Free'
  },
  {
    name: 'Basic',
    price: '$19',
    period: 'month',
    description: 'For growing creators',
    features: [
      '3 platform connections',
      '100 monthly credits',
      'Advanced AI features',
      'Post scheduling',
      'Basic analytics',
      'Email support'
    ],
    popular: false,
    cta: 'Start Basic Plan'
  },
  {
    name: 'Premium',
    price: '$49',
    period: 'month',
    description: 'For serious influencers',
    features: [
      'All platform connections',
      '500 monthly credits',
      'Advanced analytics',
      'Brand pitch generator',
      'Collaboration finder',
      'Priority support',
      'Export features'
    ],
    popular: true,
    cta: 'Go Premium'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For agencies & teams',
    features: [
      'Unlimited everything',
      'White-label solution',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'Advanced reporting'
    ],
    popular: false,
    cta: 'Contact Sales'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Instagram Influencer',
    content: 'GrowMate AI helped me grow from 5K to 50K followers in just 3 months! The content ideas are pure gold.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'Mike Chen',
    role: 'YouTube Creator',
    content: 'The caption writer and hashtag generator saved me hours every week. My engagement rate doubled!',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Small Business Owner',
    content: 'Finally, a tool that understands my niche. The brand pitch feature got me 3 new partnerships.',
    rating: 5,
    avatar: '👩‍🚀'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">GrowMate AI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="/dashboard">
                <Button>Get Started Free</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6" variant="secondary">
            🚀 Join 10,000+ creators growing faster
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Grow Your Social Media
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {' '}10x Faster
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered platform that helps content creators, influencers, and businesses 
            create viral content, grow followers, and earn money on all social platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8">
                Start Growing Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Demo
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • 5 free credits daily • Cancel anytime
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Go Viral
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful AI tools designed to help you create engaging content and grow your audience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Creators Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See how GrowMate AI is helping creators achieve their goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">&quot;{testimonial.content}&quot;</p>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{testimonial.avatar}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your growth journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-purple-500 border-2' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period !== 'contact us' && (
                      <span className="text-gray-500">/{plan.period}</span>
                    )}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/dashboard">
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Go Viral?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of creators who are already growing faster with GrowMate AI
          </p>
          <Link href="/dashboard">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">GrowMate AI</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © 2024 GrowMate AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
