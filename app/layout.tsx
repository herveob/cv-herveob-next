import type { Metadata } from 'next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hervé OCTUVON-BAZILE CV',
  description: 'CV de Hervé OCTUVON-BAZILE - Développeur Web - DevHOB',
  keywords: ['CV', 'Développeur Web', 'Freelance', 'Node.js', 'React', 'TypeScript', 'GraphQL', 'Prisma', 'PostgreSQL', 'Docker', 'TailwindCSS', 'Jest', 'Storybook', 'Ramda', 'TanStack Query'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
