import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SentriQ AI | Custom AI Agents for Healthcare, Legal, Real Estate, and Business',
  description: 'SentriQ AI builds, secures, and manages custom AI agents for healthcare, legal, real estate, and small-to-mid-sized businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
