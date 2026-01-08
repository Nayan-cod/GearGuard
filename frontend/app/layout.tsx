import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oddo Full Stack App',
  description: 'Modern full-stack application with Next.js, Python, and PostgreSQL',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

