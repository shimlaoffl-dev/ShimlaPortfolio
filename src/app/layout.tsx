import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: {
    default: 'Shimla Jezeem | Assistant Marketer & Business Analyst',
    template: '%s | Shimla Jezeem',
  },
  description: 'Experienced in sales development, CRM, and business analysis — now bringing analytical and creative skills into marketing.',
  keywords: ['Assistant Marketer', 'Business Development', 'CRM', 'Analytics', 'Shimla Jezeem'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shimla Jezeem',
    url: 'https://shimla-marketing-edge.web.app', // Replace with actual domain
    sameAs: ['https://www.linkedin.com/in/shimla-jezeem/'],
    jobTitle: 'Assistant Marketer & Business Analyst',
    email: 'shimlaoffl@gmail.com',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
