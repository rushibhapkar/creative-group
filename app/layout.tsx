// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Syne, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const syne = Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-syne', display: 'swap' });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-dm-sans', display: 'swap' });

const LOGO_URL = 'https://res.cloudinary.com/demz8cf5k/image/upload/v1773681264/uploads/jzfra5zu7fu7yjvaiv1q.jpg';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://creativegroup.com'
      : 'http://localhost:3000'
  ),

  title: 'Creative Group | Premium Real Estate Developers & Builders',
  description: 'Creative Group is a premier construction firm with 12+ years of excellence in Baramati. We build with quality and trust.',
  keywords: ['Creative Group', 'construction', 'builders', 'Baramati Real Estate', 'commercial construction', 'Sandip Jaypatre'],

  icons: {
    icon: LOGO_URL,
    shortcut: LOGO_URL,
    apple: LOGO_URL,
  },

  openGraph: {
    title: 'Creative Group - Construction & Builders',
    description: 'Constructing excellence in Baramati. Your vision, our expertise.',
    url: 'https://creativegroup.com',
    siteName: 'Creative Group',
    images: [
      {
        url: LOGO_URL,
        width: 800,
        height: 800,
        alt: 'Creative Group Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary',
    title: 'Creative Group - Construction & Builders',
    description: 'Building your dream with quality and trust.',
    images: [LOGO_URL],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${syne.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}