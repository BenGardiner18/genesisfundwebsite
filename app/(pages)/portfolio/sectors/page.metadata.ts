import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investment Sectors | Genesis Fund',
  description: 'Explore Genesis Fund\'s investment focus areas including Enterprise Software, AI/ML, Healthcare Tech, FinTech, and more.',
  keywords: 'venture capital, startup investment, enterprise software, AI/ML, healthcare tech, fintech, student entrepreneurs',
  openGraph: {
    title: 'Investment Sectors | Genesis Fund',
    description: 'Explore our investment focus areas across technology sectors',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Genesis Fund Investment Sectors'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investment Sectors | Genesis Fund',
    description: 'Explore Genesis Fund\'s investment focus areas across technology sectors'
  }
}; 