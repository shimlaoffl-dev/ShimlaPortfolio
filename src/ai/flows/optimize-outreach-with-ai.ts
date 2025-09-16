// Use server directive.
'use server';

/**
 * @fileOverview A flow to generate strategic recommendations for including calls to action in blog posts.
 *
 * - optimizeOutreach - A function that generates strategic recommendations for including calls to action in blog posts.
 * - OptimizeOutreachInput - The input type for the optimizeOutreach function.
 * - OptimizeOutreachOutput - The return type for the optimizeOutreach function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeOutreachInputSchema = z.object({
  blogPostContent: z
    .string()
    .describe('The content of the blog post to analyze.'),
  targetAudience: z
    .string()
    .describe('The target audience for the blog post.'),
  marketingGoals: z
    .string()
    .describe('The overall marketing goals for the campaign.'),
});
export type OptimizeOutreachInput = z.infer<typeof OptimizeOutreachInputSchema>;

const OptimizeOutreachOutputSchema = z.object({
  recommendation: z
    .string()
    .describe(
      'A strategic recommendation on whether to include a call to action in the blog post, and if so, what type of call to action to use.'
    ),
  reasoning: z
    .string()
    .describe(
      'The reasoning behind the recommendation, based on the blog post content, target audience, and marketing goals.'
    ),
});
export type OptimizeOutreachOutput = z.infer<typeof OptimizeOutreachOutputSchema>;

export async function optimizeOutreach(input: OptimizeOutreachInput): Promise<OptimizeOutreachOutput> {
  return optimizeOutreachFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeOutreachPrompt',
  input: {schema: OptimizeOutreachInputSchema},
  output: {schema: OptimizeOutreachOutputSchema},
  prompt: `You are a marketing strategy expert. You will analyze a blog post and provide a recommendation on whether to include a call to action (CTA) in the post. If you recommend including a CTA, you will also suggest the type of CTA to use.

Blog Post Content: {{{blogPostContent}}}
Target Audience: {{{targetAudience}}}
Marketing Goals: {{{marketingGoals}}}

Consider the blog post content, target audience, and marketing goals to determine if a CTA is appropriate. If the blog post is informative and the target audience is likely to be interested in taking further action, recommend including a CTA. Suggest a CTA that is relevant to the blog post content and aligns with the marketing goals.

Format your response as follows:

Recommendation: [Your recommendation on whether to include a CTA]
Reasoning: [Your reasoning behind the recommendation]`,
});

const optimizeOutreachFlow = ai.defineFlow(
  {
    name: 'optimizeOutreachFlow',
    inputSchema: OptimizeOutreachInputSchema,
    outputSchema: OptimizeOutreachOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
