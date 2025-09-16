'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm, FormState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Mail, Phone, Linkedin, Send, Github } from 'lucide-react';


const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof contactSchema>;

function SubmitButton() {
  const { pending } = useFormState<FormState, FormData>(submitContactForm, { message: '' });
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export default function ContactPage() {
  const { toast } = useToast();
  const [state, formAction] = useFormState<FormState, FormData>(submitContactForm, { message: '' });

  const form = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.errors && Object.keys(state.errors).length > 0) {
        toast({
          variant: 'destructive',
          title: 'Oops! Something went wrong.',
          description: state.message,
        });
      } else {
        toast({
          title: 'Success!',
          description: state.message,
        });
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="mb-16 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Available for Assistant Marketing roles and collaborations. Let&apos;s connect!
        </p>
      </header>
      
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form action={formAction} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage>{state.errors?.name?.[0]}</FormMessage>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage>{state.errors?.email?.[0]}</FormMessage>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Regarding a marketing role" {...field} />
                        </FormControl>
                        <FormMessage>{state.errors?.subject?.[0]}</FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message here..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage>{state.errors?.message?.[0]}</FormMessage>
                      </FormItem>
                    )}
                  />
                  <SubmitButton />
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
            <h3 className="font-headline text-2xl font-bold text-foreground">Direct Contact</h3>
            <p className="mt-2 text-muted-foreground">Prefer to reach out directly? Here's how.</p>
            <div className="mt-6 space-y-4">
              <a href="mailto:shimlaoffl@gmail.com" className="flex items-center gap-4 rounded-lg p-3 hover:bg-card">
                <Mail className="h-6 w-6 text-primary" />
                <span>shimlaoffl@gmail.com</span>
              </a>
               <a href="tel:+94763335155" className="flex items-center gap-4 rounded-lg p-3 hover:bg-card">
                <Phone className="h-6 w-6 text-primary" />
                <span>+94 763335155</span>
              </a>
              <a href="https://www.linkedin.com/in/shimla-jezeem/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-lg p-3 hover:bg-card">
                <Linkedin className="h-6 w-6 text-primary" />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-lg p-3 hover:bg-card">
                <Github className="h-6 w-6 text-primary" />
                <span>GitHub Profile</span>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}
