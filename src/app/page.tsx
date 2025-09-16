import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolio } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, BarChart, Briefcase, Download, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredWork = portfolio.slice(0, 3);
  const getImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === `portfolio-${id}`);
  };

  return (
    <div className="flex flex-col">
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Shimla Jezeem
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl lg:text-2xl font-headline">
            Assistant Marketer & Business Analyst in Transition
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Experienced in sales development, CRM, and business analysis — now bringing analytical and creative skills into marketing.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/portfolio">
                View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/shimla-jezeem-resume.pdf" download>
                Download Resume <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="flex items-center gap-4 p-6">
              <TrendingUp className="h-10 w-10 text-primary" />
              <div>
                <p className="text-2xl font-bold">2+ years</p>
                <p className="text-sm text-muted-foreground">in Business Development &amp; Sales</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6">
              <BarChart className="h-10 w-10 text-primary" />
              <div>
                <p className="text-xl font-bold">Hands-on Experience</p>
                <p className="text-sm text-muted-foreground">Salesforce, HubSpot, Google Analytics</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6">
              <Briefcase className="h-10 w-10 text-primary" />
              <div>
                <p className="text-xl font-bold">Process Improvement</p>
                <p className="text-sm text-muted-foreground">&amp; Campaign Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Work
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((item) => {
              const image = getImage(item.id);
              return (
                <Card key={item.id} className="group overflow-hidden">
                  <div className="overflow-hidden">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={item.title}
                        width={600}
                        height={400}
                        data-ai-hint={image.imageHint}
                        className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                    <Button variant="link" asChild className="mt-4 px-0">
                      <Link href={`/portfolio#${item.id}`}>
                        Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">
                See All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
