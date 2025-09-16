import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { certifications, education, experiences } from '@/lib/data';
import { CheckCircle, School, Briefcase, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Shimla Jezeem\'s professional journey, experience, education, and skills.',
};

const Section: React.FC<{
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}> = ({ title, icon: Icon, children }) => (
  <section className="mb-12">
    <div className="mb-8 flex items-center gap-4">
      <Icon className="h-8 w-8 text-primary" />
      <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">{title}</h2>
    </div>
    {children}
  </section>
);

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="mb-16 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          My Professional Journey
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Enthusiastic and results-driven professional with a strong foundation in commerce and software engineering. Adept at research, analytics, and collaborative teamwork, now transitioning into Assistant Marketing roles.
        </p>
      </header>
      
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Section title="Experience" icon={Briefcase}>
            <div className="relative space-y-8 pl-6 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-border">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[35px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 ring-background">
                    <Briefcase className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <Card>
                    <CardHeader>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                      <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                      <p className="font-semibold text-primary">{exp.company}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <Section title="Education" icon={School}>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="font-headline text-lg">{edu.degree}</CardTitle>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </Section>

            <Section title="Certifications" icon={Award}>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <p className="font-semibold">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
