import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import OptimizeOutreach from '@/components/blog/OptimizeOutreach';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const getImage = (slug: string) => {
    const formattedSlug = slug.replace(/-/g, ' ').split(' ').slice(0, 2).join('-');
    return PlaceHolderImages.find((img) => img.id === `blog-${formattedSlug}`);
  };

  const image = getImage(post.slug);

  return (
    <article>
      <header className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            {post.excerpt}
          </p>
        </div>
      </header>

      <div className="container mx-auto -mt-10 max-w-5xl px-4 md:-mt-16">
        {image && (
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={image.imageUrl}
              alt={post.title}
              width={1200}
              height={600}
              data-ai-hint={image.imageHint}
              className="h-auto w-full"
            />
          </div>
        )}
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-12">
        <div className="prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
            {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
      </div>

      <div className="bg-background">
          <OptimizeOutreach blogContent={post.content} />
      </div>
    </article>
  );
}
