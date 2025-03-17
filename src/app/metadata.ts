import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    template: '%s | Form Management',
    default: 'Form Management',
  },
  description:
    'A modern form management application for efficient data collection and organization',
  keywords: ['form management', 'data collection', 'form management', 'forms', 'next.js'],
  authors: [{ name: 'Form Management Team' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
