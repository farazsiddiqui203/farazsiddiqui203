# 🚀 GrowMate AI - Complete Social Media Growth SaaS Platform

GrowMate AI is a comprehensive, AI-powered SaaS platform designed to help content creators, influencers, freelancers, small businesses, and coaches grow rapidly on social media platforms like Instagram, YouTube, LinkedIn, Facebook, and X (Twitter).

![GrowMate AI Dashboard](https://via.placeholder.com/800x400/6366f1/ffffff?text=GrowMate+AI+Dashboard)

## 🎯 Problem We Solve

Millions of people want to grow on social media but face real-world challenges:
- No idea what type of content works
- Low engagement, reach, or followers
- No time or skill to write great captions or find hashtags
- Don't know how to get brand deals or monetize
- Struggling to stay consistent and optimize their posts

## 🎯 Target Audience

- **Micro creators** (500–10K followers)
- **Coaches & solopreneurs**
- **Freelancers** using LinkedIn
- **Small businesses** using Instagram or YouTube
- **Aspiring influencers**

## ✨ Key Features

### 🧩 Core AI-Powered Tools

1. **🔥 Viral Content Idea Generator**
   - Platform-specific content ideas using trending topics and user's niche
   - AI-powered viral potential scoring
   - Niche-specific recommendations

2. **✍️ AI Caption & Hook Writer**
   - High-converting captions with CTAs for all platforms
   - Multiple tone options (engaging, professional, casual, etc.)
   - Separate hook, main content, and CTA sections

3. **# Smart Hashtag Generator**
   - Niche hashtags with high engagement potential
   - Category-based hashtag organization (trending, niche, community, branded)
   - Engagement score and difficulty analysis

4. **📅 Post Scheduler Calendar**
   - AI-powered best time recommendations
   - Multi-platform scheduling
   - Content calendar visualization

5. **📊 Analytics Dashboard**
   - Track growth, followers, engagement across platforms
   - Content performance analysis
   - Insights and recommendations

6. **🤝 Collaboration Finder**
   - Find similar creators/influencers for partnerships
   - Network building tools

7. **💼 Brand Pitch Generator**
   - Auto-generate professional email/DM pitches
   - Customizable templates for brand outreach

8. **💬 AI DM Auto-Reply / Outreach Scripts**
   - Personalized message generator
   - Networking and engagement scripts

9. **🏆 Earn & Learn Zone (Gamified)**
   - Daily tasks and challenges
   - Coins, XP, and level system
   - Achievement badges
   - Reward store
   - Leaderboards

## 💰 Pricing Plans

### 🆓 Free Plan
- 1 platform connection
- 5 daily AI credits
- Basic content ideas
- Limited hashtag suggestions
- Community support

### ⭐ Basic Plan - $19/month
- 3 platform connections
- 100 monthly AI credits
- Advanced AI features
- Post scheduling
- Basic analytics
- Email support

### 👑 Premium Plan - $49/month
- All platform connections
- 500 monthly AI credits
- All features unlocked
- Advanced analytics
- Brand pitch generator
- Priority support

### 🏢 Enterprise Plan - Custom
- Unlimited everything
- White-label solution
- Team collaboration
- Custom integrations
- Dedicated support

## 🛠 Tech Stack

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Lucide React** for icons
- **Framer Motion** for animations
- **React Hook Form** for forms

### Backend & Database
- **Supabase** for database and authentication
- **PostgreSQL** database
- **API Routes** for server-side logic

### AI & APIs
- **OpenRouter** for AI model access (GPT-4, Claude, etc.)
- **Custom AI service layer** for content generation

### UI Components
- **Radix UI** primitives
- **Custom component library**
- **Responsive design** with mobile-first approach

### Deployment
- **Vercel** for frontend hosting
- **Supabase** for backend services

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account
- OpenRouter API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/growmate-ai.git
cd growmate-ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
```

Fill in your environment variables:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# OpenRouter AI API
OPENROUTER_API_KEY=your_openrouter_api_key_here

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Set up the database**
```bash
# Run Supabase migrations (if you have them)
npx supabase db push
```

5. **Start the development server**
```bash
npm run dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
growmate-ai/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── dashboard/         # Dashboard pages
│   │   ├── api/               # API routes
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── ui/                # Base UI components
│   │   └── layout/            # Layout components
│   └── lib/                   # Utility functions
│       ├── ai.ts              # AI service functions
│       ├── ai-client.ts       # Client-side AI calls
│       ├── supabase.ts        # Database client
│       └── utils.ts           # Helper functions
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
└── package.json              # Dependencies
```

## 🎨 Design System

### Colors
- **Primary**: Purple to Pink gradient (`from-purple-500 to-pink-500`)
- **Secondary**: Blue shades
- **Success**: Green shades
- **Warning**: Yellow/Orange shades
- **Error**: Red shades

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights
- **Body**: Regular weight

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Multiple variants with hover states
- **Forms**: Clean inputs with focus states
- **Navigation**: Sidebar with active states

## 🔧 API Endpoints

### AI Content Generation
- `POST /api/ai/content-ideas` - Generate viral content ideas
- `POST /api/ai/captions` - Generate captions with hooks and CTAs
- `POST /api/ai/hashtags` - Generate smart hashtags

### User Management
- Authentication handled by Supabase
- User profiles and preferences
- Subscription management

## 🏗 Database Schema

### Core Tables
- `users` - User profiles and settings
- `content_ideas` - Generated content ideas
- `captions` - AI-generated captions
- `hashtag_sets` - Generated hashtag collections
- `scheduled_posts` - Post scheduling data
- `analytics` - Performance metrics
- `rewards` - Gamification data

## 🎮 Gamification System

### User Progression
- **Levels**: Based on XP earned from completing tasks
- **Coins**: Virtual currency for reward store
- **Streaks**: Daily activity tracking
- **Achievements**: Milestone-based badges

### Daily Tasks
- Generate content ideas
- Write captions
- Find hashtags
- Schedule posts
- Share referrals

### Rewards Store
- Extra AI credits
- Premium features access
- Custom templates
- Exclusive content

## 📱 Mobile Responsiveness

- **Mobile-first design** approach
- **Responsive navigation** with mobile menu
- **Touch-friendly** interface elements
- **Optimized** for all screen sizes

## 🔒 Security Features

- **Authentication** via Supabase
- **API rate limiting**
- **Input validation** and sanitization
- **Environment variable** protection
- **HTTPS** enforcement

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Setup
- Production environment variables
- Database connection
- AI API keys configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenRouter** for AI model access
- **Supabase** for backend services
- **Vercel** for hosting
- **Tailwind CSS** for styling
- **Lucide** for icons

## 📞 Support

- **Documentation**: [docs.growmate-ai.com](https://docs.growmate-ai.com)
- **Email**: support@growmate-ai.com
- **Discord**: [Join our community](https://discord.gg/growmate-ai)

---

**Built with ❤️ for the creator economy**

*Helping creators grow faster with AI-powered tools*
