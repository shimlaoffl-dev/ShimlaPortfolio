'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { optimizeOutreach, OptimizeOutreachOutput } from '@/ai/flows/optimize-outreach-with-ai';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  targetAudience: z.string().min(10, 'Please describe the target audience in more detail.'),
  marketingGoals: z.string().min(10, 'Please describe the marketing goals in more detail.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function OptimizeOutreach({ blogContent }: { blogContent: string }) {
  const [result, setResult] = useState<OptimizeOutreachOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetAudience: '',
      marketingGoals: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const aiResult = await optimizeOutreach({
        blogPostContent: blogContent,
        targetAudience: data.targetAudience,
        marketingGoals: data.marketingGoals,
      });
      setResult(aiResult);
    } catch (error) {
      console.error('Error optimizing outreach:', error);
      // You could show a toast notification here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <Card className="border-primary/50 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Wand2 className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl lg:text-3xl">Optimize Outreach with AI</CardTitle>
            </div>
            <CardDescription className="pt-2">
              Get a strategic recommendation on whether to include a Call to Action (CTA) in this blog post based on your goals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="targetAudience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Audience</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Marketing managers in tech startups" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="marketingGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Marketing Goals</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., Increase demo sign-ups by 15%" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Get Recommendation
                      <Wand2 className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>

            {result && (
              <div className="mt-8 rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3">
                   <Sparkles className="h-6 w-6 text-primary" />
                  <h3 className="font-headline text-xl font-semibold">AI Recommendation</h3>
                </div>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Recommendation:</h4>
                    <p className="text-muted-foreground">{result.recommendation}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Reasoning:</h4>
                    <p className="text-muted-foreground">{result.reasoning}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
