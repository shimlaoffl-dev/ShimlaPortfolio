import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'group flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-transparent transition-colors hover:bg-primary',
        className
      )}
    >
      <span className="font-headline text-lg font-bold text-primary transition-colors group-hover:text-primary-foreground">
        SJ
      </span>
    </Link>
  );
}
