import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import TanstackProvider from '../providers/TanstackProvider';
import './globals.css';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'NGA - Contract Management System',
  description: 'Contract Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn(nunitoSans.className)}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
