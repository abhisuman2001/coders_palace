import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter font for better readability
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster" // Added Toaster for potential notifications

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevHub - Your Coding Palace', // Updated title
  description: 'Tech blogs, coding tutorials, and documentation for developers and learners.', // Updated description
  icons: { // Add a generic icon
    icon: '/favicon.ico', // Assuming a favicon exists at public/favicon.ico
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container py-8">{children}</main>
        <Footer />
        <Toaster /> {/* Include Toaster for UI feedback */}
      </body>
    </html>
  );
}
