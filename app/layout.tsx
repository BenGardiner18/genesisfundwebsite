import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto_Condensed } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "@/components/ui/toaster"
import { ToastProvider } from "@/components/ui/toast"

const inter = Inter({ subsets: ['latin'] });
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
})

export const metadata: Metadata = {
  title: 'Genesis Fund - Student Venture Capital',
  description: 'Boston-based venture fund investing in student and postgrad ventures',
  alternates: {
    types: {
      'application/rss+xml': 'https://genesisfund.co/api/rss',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${robotoCondensed.variable}`} suppressHydrationWarning>
      <head>
        <link 
          rel="alternate" 
          type="application/rss+xml" 
          title="Genesis Fund Blog RSS Feed" 
          href="https://genesisfund.co/api/rss" 
        />
        <link 
          rel="feed" 
          type="application/rss+xml" 
          title="Genesis Fund Blog RSS Feed" 
          href="https://genesisfund.co/api/rss" 
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ToastProvider>
          <Navbar />
          <div className="min-h-screen flex flex-col">
            <div className="flex-grow mt-16">
              {children}
              <Analytics />
              <SpeedInsights />
            </div>
            <Footer />
          </div>
          <Toaster />
        </ToastProvider>
      </body>
    </html>
  );
}