import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import { ModalProvider } from '@/shared/ui/Modal/ModalContent/ModalContext';
import { ReduxProvider } from '@/shared/providers/ReduxProvider';

import { defaultMetadata } from './metadata';


import '@/shared/styles/global.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </ReduxProvider>
      </body>
    </html>
  );
} 