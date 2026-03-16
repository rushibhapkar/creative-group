// app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// The Cloudinary logo link you provided
const LOGO_URL = 'https://res.cloudinary.com/demz8cf5k/image/upload/v1773681264/uploads/jzfra5zu7fu7yjvaiv1q.jpg';

export const metadata: Metadata = {
  // 1. Foundation for SEO
  metadataBase: new URL(
    process.env.NODE_ENV === 'production' 
      ? 'https://creativegroup.com' // Replace with your actual domain later
      : 'http://localhost:3000'
  ),

  // 2. Updated Branding
  title: 'Creative Group | Premium Real Estate Developers & Builders',
  description: 'Creative Group is a premier construction firm with 12+ years of excellence in Baramati. We build with quality and trust.',
  keywords: ['Creative Group', 'construction', 'builders', 'Baramati Real Estate', 'commercial construction', 'Sandip Jaypatre'],
  
  // 3. ADD THIS: This makes the logo visible in Browser Tabs and Search Snippets
  icons: {
    icon: LOGO_URL,
    shortcut: LOGO_URL,
    apple: LOGO_URL,
  },

  // 4. Social Media Previews (WhatsApp, LinkedIn, Facebook)
  openGraph: {
    title: 'Creative Group - Construction & Builders',
    description: 'Constructing excellence in Baramati. Your vision, our expertise.',
    url: 'https://creativegroup.com',
    siteName: 'Creative Group',
    images: [
      {
        url: LOGO_URL, // Using your logo as the share image
        width: 800,
        height: 800,
        alt: 'Creative Group Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  
  twitter: {
    card: 'summary', // Changed to 'summary' because your logo is likely square
    title: 'Creative Group - Construction & Builders',
    description: 'Building your dream with quality and trust.',
    images: [LOGO_URL],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}