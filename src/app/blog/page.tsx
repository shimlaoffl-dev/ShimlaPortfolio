import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on marketing, analytics, and business strategy from Shimla Jezeem.',
};

export default function BlogPage() {
  const getImage = (slug: string) => {
    const formattedSlug = slug.replace(/-/g, ' ').split(' ').slice(0, 2).join('-');
    return PlaceHolderImages.find((img) => img.id === `blog-${formattedSlug}`);
  };
  
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="mb-16 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Insights &amp; Articles
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Sharing thoughts on marketing, analytics, and business strategy to showcase clarity in communication.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => {
          const image = getImage(post.slug);
          return (
            <Card key={post.slug} className="group flex flex-col overflow-hidden">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="overflow-hidden">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={post.title}
                      width={800}
                      height={450}
                      data-ai-hint={image.imageHint}
                      className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
              </Link>
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="pt-2">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button variant="link" asChild className="px-0">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
