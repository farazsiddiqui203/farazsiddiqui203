import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GrowMate AI - Grow Your Social Media Presence",
  description: "AI-powered SaaS platform to help content creators, influencers, and businesses grow on social media with viral content ideas, captions, hashtags, and more.",
  keywords: "social media growth, AI content generator, Instagram growth, YouTube growth, LinkedIn growth, viral content, hashtags, captions",
  authors: [{ name: "GrowMate AI" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
