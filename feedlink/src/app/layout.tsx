// src/app/layout.tsx
import './globals.css';
import Navbar from './sharedcomponents/Navbar';
// import Footer from './sharedcomponents/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feedlink — Transform Food Wastage Into Impact',
  description: 'Reduce waste, feed communities, and create sustainable value chains.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        
      </body>
    </html>
  );
}