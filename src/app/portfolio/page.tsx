import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolio } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A collection of case studies showcasing Shimla Jezeem\'s experience in lead generation, marketing, and business analysis.',
};

export default function PortfolioPage() {
  const getImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === `portfolio-${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="mb-16 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Portfolio &amp; Case Studies
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          A showcase of my experience applying analytical and strategic skills to real-world business challenges.
        </p>
      </header>

      <div className="space-y-16">
        {portfolio.map((item, index) => {
          const image = getImage(item.id);
          const isReversed = index % 2 !== 0;

          return (
            <section key={item.id} id={item.id} className="scroll-mt-24">
              <Card className="overflow-hidden">
                <div className={`grid grid-cols-1 md:grid-cols-2`}>
                  <div className={`flex items-center justify-center bg-card ${isReversed ? 'md:order-last' : ''}`}>
                    {image && (
                       <Image
                        src={image.imageUrl}
                        alt={item.title}
                        width={600}
                        height={400}
                        data-ai-hint={image.imageHint}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-8 md:p-10">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="font-headline text-2xl lg:text-3xl">{item.title}</CardTitle>
                      <p className="pt-2 text-base text-muted-foreground">{item.description}</p>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <h4 className="mb-4 font-semibold text-foreground">Key Activities &amp; Outcomes:</h4>
                      <ul className="space-y-3">
                        {item.details.map((detail, i) => (
                           <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </section>
          );
        })}
      </div>
    </div>
  );
}
