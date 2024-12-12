import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Genesis Fund - Student Venture Capital',
  description: 'Boston-based venture fund investing in student and postgrad ventures',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow mt-16">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}