import { 
  Sparkles, 
  Check, 
  Star, 
  Crown, 
  Building,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with social media growth',
    icon: Sparkles,
    color: 'from-gray-500 to-gray-600',
    features: [
      '1 platform connection',
      '5 daily AI credits',
      'Basic content ideas',
      'Limited hashtag suggestions',
      'Community support',
      'Basic analytics',
      'Watermarked exports'
    ],
    limitations: [
      'Limited to Instagram only',
      'No post scheduling',
      'No advanced analytics',
      'No brand pitch generator'
    ],
    popular: false,
    cta: 'Current Plan',
    ctaVariant: 'outline' as const,
    currentPlan: true
  },
  {
    name: 'Basic',
    price: '$19',
    period: 'month',
    description: 'For growing creators and small businesses',
    icon: Star,
    color: 'from-blue-500 to-blue-600',
    features: [
      '3 platform connections',
      '100 monthly AI credits',
      'Advanced content ideas',
      'Smart hashtag generator',
      'Post scheduling',
      'Basic analytics',
      'Email support',
      'Export without watermarks',
      'Best time recommendations'
    ],
    limitations: [
      'No brand pitch generator',
      'No collaboration finder',
      'Limited analytics'
    ],
    popular: false,
    cta: 'Upgrade to Basic',
    ctaVariant: 'outline' as const,
    currentPlan: false
  },
  {
    name: 'Premium',
    price: '$49',
    period: 'month',
    description: 'For serious influencers and content creators',
    icon: Crown,
    color: 'from-purple-500 to-pink-500',
    features: [
      'All platform connections',
      '500 monthly AI credits',
      'All AI features unlocked',
      'Advanced analytics dashboard',
      'Brand pitch generator',
      'Collaboration finder',
      'DM script generator',
      'Priority support',
      'Custom hashtag sets',
      'A/B testing tools',
      'White-label exports'
    ],
    limitations: [],
    popular: true,
    cta: 'Upgrade to Premium',
    ctaVariant: 'default' as const,
    currentPlan: false
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For agencies, teams, and large businesses',
    icon: Building,
    color: 'from-emerald-500 to-teal-600',
    features: [
      'Unlimited everything',
      'White-label solution',
      'Team collaboration tools',
      'Custom integrations',
      'Dedicated account manager',
      'Advanced reporting',
      'API access',
      'Custom training',
      'SLA guarantee',
      'On-premise deployment'
    ],
    limitations: [],
    popular: false,
    cta: 'Contact Sales',
    ctaVariant: 'outline' as const,
    currentPlan: false
  }
];

const faqs = [
  {
    question: 'Can I change my plan at any time?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
  },
  {
    question: 'What happens to my credits if I upgrade?',
    answer: 'Unused credits from your current plan will be carried over when you upgrade, plus you&apos;ll get the full credit allocation for your new plan.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 14-day money-back guarantee for all paid plans. If you&apos;re not satisfied, contact our support team for a full refund.'
  },
  {
    question: 'Can I use GrowMate AI for multiple brands?',
    answer: 'Yes! Premium and Enterprise plans allow you to manage multiple brands and social media accounts from one dashboard.'
  },
  {
    question: 'Is there a discount for annual billing?',
    answer: 'Yes! Save 20% when you choose annual billing for Basic or Premium plans. Contact us for Enterprise annual pricing.'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Instagram Influencer • 50K followers',
    content: 'GrowMate AI helped me triple my engagement rate in just 2 months. The content ideas are incredible!',
    avatar: '👩‍💼',
    plan: 'Premium'
  },
  {
    name: 'Mike Chen',
    role: 'Digital Marketing Agency',
    content: 'We manage 20+ client accounts with GrowMate AI. The time savings and results speak for themselves.',
    avatar: '👨‍💻',
    plan: 'Enterprise'
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Small Business Owner',
    content: 'Finally, a tool that understands my niche. My LinkedIn engagement increased by 400%!',
    avatar: '👩‍🚀',
    plan: 'Basic'
  }
];

export default function PricingPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Choose Your Growth Plan
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From free tools to enterprise solutions, find the perfect plan to accelerate your social media growth
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingPlans.map((plan, index) => (
          <Card 
            key={index} 
            className={`relative ${
              plan.popular 
                ? 'border-2 border-purple-500 shadow-lg scale-105' 
                : plan.currentPlan 
                ? 'border-2 border-green-500' 
                : 'border-gray-200'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                  Most Popular
                </Badge>
              </div>
            )}
            {plan.currentPlan && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white px-4 py-1">
                  Current Plan
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-4">
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                <plan.icon className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.period !== 'contact us' && (
                  <span className="text-gray-500 ml-1">/{plan.period}</span>
                )}
              </div>
              <CardDescription className="mt-2">{plan.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, limitIndex) => (
                  <li key={limitIndex} className="flex items-start opacity-60">
                    <span className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0 text-gray-400">×</span>
                    <span className="text-sm text-gray-500">{limitation}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' : ''}`}
                variant={plan.ctaVariant}
                disabled={plan.currentPlan}
              >
                {plan.cta}
                {!plan.currentPlan && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Feature Comparison */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Compare All Features
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Features</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-900">Free</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-900">Basic</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-900">Premium</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-900">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                ['AI Content Ideas', '5/day', '100/month', '500/month', 'Unlimited'],
                ['Platform Connections', '1', '3', 'All', 'Unlimited'],
                ['Post Scheduling', '×', '✓', '✓', '✓'],
                ['Analytics Dashboard', 'Basic', 'Standard', 'Advanced', 'Enterprise'],
                ['Brand Pitch Generator', '×', '×', '✓', '✓'],
                ['Team Collaboration', '×', '×', '×', '✓'],
                ['White-label Solution', '×', '×', '×', '✓'],
                ['API Access', '×', '×', '×', '✓'],
                ['Priority Support', '×', '×', '✓', '✓'],
                ['Custom Integrations', '×', '×', '×', '✓']
              ].map((row, index) => (
                <tr key={index} className="hover:bg-white">
                  <td className="py-4 px-4 font-medium text-gray-900">{row[0]}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{row[1]}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{row[2]}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{row[3]}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Testimonials */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Trusted by 10,000+ Creators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-left">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{testimonial.avatar}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {testimonial.plan} User
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-600 italic">&quot;{testimonial.content}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Accelerate Your Growth?
        </h2>
        <p className="text-xl text-purple-100 mb-6">
          Join thousands of creators who are already growing faster with GrowMate AI
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white hover:text-purple-600">
            Schedule Demo
          </Button>
        </div>
        <p className="text-sm text-purple-200 mt-4">
          No credit card required • 14-day money-back guarantee
        </p>
      </div>
    </div>
  );
}