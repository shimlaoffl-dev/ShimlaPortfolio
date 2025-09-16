import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills, services } from '@/lib/data';
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills &amp; Services',
  description: 'Explore the skills and services offered by Shimla Jezeem, including CRM, data analysis, and marketing support.',
};

const SkillCategory = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h3 className="mb-4 font-headline text-lg font-semibold">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((skill) => (
        <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
          {skill}
        </Badge>
      ))}
    </div>
  </div>
);

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="mb-16 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Capabilities
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          A blend of analytical prowess, technical skill, and marketing acumen to drive results.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <section>
          <h2 className="mb-8 font-headline text-3xl font-bold text-foreground">
            Core Skills
          </h2>
          <Card>
            <CardContent className="p-6 space-y-8">
              <SkillCategory title="CRM Tools" items={skills.crm} />
              <SkillCategory title="Data Analysis" items={skills.dataAnalysis} />
              <SkillCategory title="Marketing" items={skills.marketing} />
              <SkillCategory title="Communication" items={skills.communication} />
              <SkillCategory title="Process &amp; Business" items={skills.processAndBusiness} />
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="mb-8 font-headline text-3xl font-bold text-foreground">
            Services Offered
          </h2>
          <div className="space-y-6">
            {services.map((service, index) => (
              <Card key={index} className="group transition-all hover:border-primary hover:shadow-md">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
