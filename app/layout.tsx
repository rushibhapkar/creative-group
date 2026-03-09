//app\layout.tsx


import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // 1. ADD THIS: This clears the warning and sets the foundation for SEO
  metadataBase: new URL(
    process.env.NODE_ENV === 'production' 
      ? 'https://creativegroup.com' // Replace with the client's actual domain later
      : 'http://localhost:3000'
  ),

  // 2. Updated Branding for Creative Group
  title: 'Creative Group | Premium Real Estate Developers & Builders',
  description: 'Creative Group is a premier construction firm with 25+ years of excellence in residential, commercial, and turnkey projects. We build with quality and trust.',
  keywords: ['Creative Group', 'construction', 'builders', 'real estate Pune', 'commercial construction', 'luxury residential'],
  
  openGraph: {
    title: 'Creative Group - Construction & Builders',
    description: 'Constructing excellence for over 25 years. Your vision, our expertise.',
    url: 'https://creativegroup.com',
    siteName: 'Creative Group',
    images: [
      {
        url: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Creative Group Construction Project',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Group - Construction & Builders',
    description: 'Building your dream with quality and trust.',
    images: ['https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200'],
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