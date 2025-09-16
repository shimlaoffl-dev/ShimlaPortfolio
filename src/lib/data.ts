import { BarChart, Briefcase, FileText, Megaphone, Search, Users } from 'lucide-react';
import type { Experience, Education, Certification, Skills, Service, PortfolioItem, BlogPost } from './types';

export const experiences: Experience[] = [
  {
    role: 'Sales Development Representative',
    company: 'Netrevenue (Canada)',
    period: 'May 2024 – Jan 2025',
    description: [
      'Identified and qualified new leads through targeted outreach.',
      'Managed and maintained CRM records in Salesforce and HubSpot.',
      'Supported marketing material development and campaign execution.',
    ],
  },
  {
    role: 'Business Development Executive',
    company: 'SparQ Corporate (Australia)',
    period: 'May 2024 – Mar 2025',
    description: [
      'Pursued new business opportunities and built strong client relationships.',
      'Created compelling proposals and presentations for prospective clients.',
      'Analyzed competitor activity to inform business strategy.',
    ],
  },
  {
    role: 'Associate Business Analyst',
    company: 'Unico',
    period: 'Jan 2021 – Aug 2025',
    description: [
      'Collaborated with stakeholders on requirements gathering and documentation.',
      'Developed process models and performed data analysis to identify improvements.',
      'Contributed to project planning and execution.',
    ],
  },
  {
    role: 'Business Development Intern',
    company: 'Unico',
    period: 'Aug 2021 – Sept 2022',
    description: [
      'Conducted competitive market analysis to support strategic planning.',
      'Assisted in proposal development and lead tracking.',
      'Gained foundational experience in business development processes.',
    ],
  },
  {
    role: 'Online Mathematics Consultant',
    company: 'Third Space Learning (UK)',
    period: 'Jun 2020 – Aug 2021',
    description: [
      'Delivered personalized math instruction in an online environment.',
      'Developed strong communication and analytical explanation skills.',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'BBA (Hons)',
    institution: 'South Eastern University of Sri Lanka',
  },
  {
    degree: 'HND in Computer Software Engineering',
    institution: 'London Metropolitan University (UK)',
  },
];

export const certifications: Certification[] = [
  {
    name: 'Advanced Google Analytics',
    issuer: 'Google Academy',
  },
  {
    name: 'Cybersecurity for Everyone',
    issuer: 'University of Maryland',
  },
  {
    name: 'Web Designing',
    issuer: 'University of Moratuwa',
  },
  {
    name: 'Project Management',
    issuer: 'Reputed Institution',
  },
];

export const skills: Skills = {
  crm: ['Salesforce', 'HubSpot'],
  dataAnalysis: ['Excel', 'SQL', 'Google Analytics'],
  marketing: ['Social Media Content Support', 'Campaign Coordination', 'Email Marketing Basics'],
  communication: ['Presentations', 'Proposals', 'Stakeholder Management'],
  processAndBusiness: ['Process Improvement', 'Cost-Benefit Analysis', 'Strategic Planning'],
};

export const services: Service[] = [
  {
    icon: Megaphone,
    title: 'Marketing Campaign Support',
    description: 'Assistance with content creation, scheduling, and performance reporting to ensure campaign success.',
  },
  {
    icon: Users,
    title: 'CRM Management &amp; Data Analysis',
    description: 'Managing CRM systems and analyzing customer data to uncover actionable insights and improve engagement.',
  },
  {
    icon: Search,
    title: 'Market &amp; Competitor Research',
    description: 'Conducting in-depth market research and competitor analysis to inform strategy and identify opportunities.',
  },
  {
    icon: FileText,
    title: 'Proposal &amp; Presentation Development',
    description: 'Crafting compelling proposals and presentations to effectively communicate value to clients and stakeholders.',
  },
  {
    icon: BarChart,
    title: 'Sales &amp; Marketing Performance Insights',
    description: 'Generating reports and dashboards to track key metrics and provide insights on sales and marketing performance.',
  },
  {
    icon: Briefcase,
    title: 'Business Development Support',
    description: 'Supporting business development activities, from lead generation to client relationship management.',
  },
];

export const portfolio: PortfolioItem[] = [
  {
    id: 'lead-generation',
    title: 'Strategic Lead Generation Campaign',
    description: 'Developed and executed a targeted outreach strategy to identify and qualify high-value leads.',
    details: [
      'Conducted outreach through multiple channels, including email and social media.',
      'Qualified leads based on predefined criteria, improving the quality of the sales pipeline.',
      'Collaborated with the marketing team on campaign strategies, resulting in a 15% improvement in the lead-to-opportunity conversion rate.',
    ],
  },
  {
    id: 'marketing-material-development',
    title: 'Marketing Material Development',
    description: 'Assisted in the creation of compelling campaign collateral to support marketing and sales efforts.',
    details: [
      'Contributed to the design and content of brochures, case studies, and email templates.',
      'Supported a cross-team strategy to enhance lead flow by providing sales with effective marketing materials.',
      'Received positive feedback on the clarity and impact of the developed collateral.',
    ],
  },
  {
    id: 'business-development-strategy',
    title: 'Business Development Strategy Execution',
    description: 'Drove measurable growth by creating strategic proposals and maintaining key client relationships.',
    details: [
      'Developed and delivered presentations and proposals tailored to client needs.',
      'Maintained and nurtured relationships with key clients, leading to a 20% increase in repeat business.',
      'Actively tracked market trends to adapt and refine business development strategies.',
    ],
  },
  {
    id: 'process-improvement-analysis',
    title: 'Operational Process Improvement',
    description: 'Enhanced operational efficiency by designing new workflow diagrams and recommending improvements.',
    details: [
      'Analyzed existing workflows to identify bottlenecks and areas for improvement.',
      'Designed clear and efficient workflow diagrams using process modeling tools.',
      'Presented recommendations to management, leading to the adoption of a new process that reduced task completion time by 25%.',
    ],
  },
  {
    id: 'competitive-analysis',
    title: 'In-Depth Competitive Analysis',
    description: 'Informed strategic decisions by conducting thorough analysis of market trends and competitor activities.',
    details: [
      'Analyzed market data and competitor strategies to identify threats and opportunities.',
      'Provided key insights that informed the development of more competitive proposals.',
      'The analysis was instrumental in helping the company secure two major contracts.',
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'crm-tools-for-marketing',
    title: 'How CRM Tools Can Supercharge Marketing Teams',
    excerpt: 'Discover how leveraging CRM tools goes beyond sales, offering powerful support for marketing automation, personalization, and data analysis.',
    content: `In today's data-driven world, the alignment between sales and marketing is more critical than ever. One of the most powerful bridges between these two departments is the Customer Relationship Management (CRM) system. While traditionally viewed as a sales tool, a well-utilized CRM can be a marketing team's secret weapon.

First, CRMs provide a unified view of the customer. Every interaction, from email opens to sales calls, is logged in one place. This 360-degree view allows marketers to create highly personalized campaigns that resonate with the audience's specific interests and history with the company.

Second, CRM data is a goldmine for segmentation. Marketers can move beyond basic demographics and segment audiences based on behavior, purchase history, and engagement level. This enables the delivery of the right message to the right person at the right time, dramatically increasing campaign effectiveness.

Finally, integrating a CRM with marketing automation platforms streamlines workflows and allows for sophisticated lead nurturing. A lead's behavior can trigger automated email sequences, personalized content delivery, and timely follow-ups from the sales team, ensuring no opportunity is missed. By embracing the full potential of CRM, marketing teams can enhance their strategies, improve efficiency, and drive measurable results.`,
  },
  {
    slug: 'lessons-from-sales-development',
    title: '5 Lessons from Sales Development That Apply to Marketing',
    excerpt: 'The frontline experience of a Sales Development Representative (SDR) offers invaluable lessons that can sharpen any marketing strategy.',
    content: `Working in sales development provides a unique, real-time perspective on customer needs, objections, and language. Marketers who tap into this knowledge can create more effective and resonant campaigns. Here are five key lessons from the world of SDRs that every marketer should embrace:

1.  **Qualify, Don't Just Collect:** SDRs live by qualification. They know that not all leads are created equal. Marketers should adopt this mindset, focusing on attracting high-quality leads (MQLs) rather than just a high volume of leads.
2.  **The Follow-Up is Everything:** Persistence is key in sales. A single touchpoint is rarely enough. Marketing campaigns should incorporate multi-channel follow-up strategies, from email nurturing to retargeting ads, to stay top-of-mind.
3.  **Listen to the "No":** SDRs learn more from "no" than from "yes." Objections are a direct line into the customer's concerns. Marketers should actively seek out this feedback to refine messaging, address pain points in their content, and improve product positioning.
4.  **Personalization Wins:** A generic pitch falls flat. Successful SDRs research their prospects and tailor their outreach. Marketers must do the same, using data to personalize content, offers, and user experiences.
5.  **It's a Conversation, Not a Monologue:** The best SDRs are great listeners. Marketing shouldn't just be about broadcasting a message. It should be about creating a dialogue through social media, interactive content, and community building.

By adopting these sales-centric principles, marketers can build a more robust, customer-focused strategy that drives not just leads, but revenue.`,
  },
  {
    slug: 'data-driven-thinking',
    title: 'Why Data-Driven Thinking Matters in Modern Campaigns',
    excerpt: 'Moving beyond gut feelings to data-backed decisions is what separates good marketing campaigns from great ones.',
    content: `In the past, marketing was often seen as a purely creative endeavor. While creativity remains essential, the digital age has introduced a new, powerful component: data. Data-driven thinking is no longer a luxury; it's a necessity for any campaign aiming for success.

At its core, data-driven marketing means using data to inform and validate your strategic decisions. It starts with setting clear, measurable goals (KPIs). Instead of aiming to "increase brand awareness," a data-driven marketer aims to "increase website traffic from organic search by 20% in Q3." This specificity makes success measurable.

Next, data allows for continuous optimization. A/B testing headlines, analyzing heatmaps to understand user behavior, and monitoring conversion rates on landing pages provide real-time feedback. This allows marketers to pivot and improve campaigns on the fly, rather than waiting for a post-mortem analysis.

Furthermore, data helps prove the value of marketing. By tracking metrics like Customer Acquisition Cost (CAC) and Return on Investment (ROI), marketers can demonstrate their direct impact on the bottom line. This not only justifies budget but also earns marketing a strategic seat at the decision-making table. In essence, data transforms marketing from an art into a science, enabling more predictable, efficient, and impactful results.`,
  },
];
