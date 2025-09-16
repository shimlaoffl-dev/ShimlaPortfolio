import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
];

export function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Assistant Marketer &amp; Business Analyst
            </p>
            <div className="mt-4 flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/shimla-jezeem/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="md:justify-self-center">
            <h3 className="font-headline font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:justify-self-end">
             <h3 className="font-headline font-semibold text-foreground">Contact</h3>
             <ul className="mt-4 space-y-2">
                <li><a href="mailto:shimlaoffl@gmail.com" className="text-sm text-muted-foreground hover:text-primary">shimlaoffl@gmail.com</a></li>
                <li><a href="tel:+94763335155" className="text-sm text-muted-foreground hover:text-primary">+94 763335155</a></li>
             </ul>
             <Button asChild className="mt-4">
                <Link href="/contact">Get in Touch</Link>
             </Button>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&amp;copy; {new Date().getFullYear()} Shimla Jezeem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
