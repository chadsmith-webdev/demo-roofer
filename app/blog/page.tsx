import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, BookOpen, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BUSINESS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  ScaleOnHover,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "Roofing Tips & Resources | Ridge Line Blog",
  description:
    "Expert roofing tips, insurance claim guides, and maintenance advice from Ridge Line Roofing. Learn how to spot hail damage, file insurance claims, and know when to repair vs. replace your roof.",
  keywords: [
    "roofing tips",
    "hail damage guide",
    "roof insurance claim guide",
    "when to replace roof",
    "NWA roofing blog",
  ],
};

const posts = [
  {
    title: "How to Spot Hail Damage on Your Roof",
    slug: "how-to-spot-hail-damage",
    excerpt:
      "After a hailstorm, the damage isn't always obvious from the ground. Learn the telltale signs to look for — from dented gutters and cracked shingles to granule loss that accelerates aging.",
    date: "April 2026",
    category: "Storm Damage",
  },
  {
    title: "Filing a Roof Insurance Claim: A Step-by-Step Guide",
    slug: "filing-roof-insurance-claim-guide",
    excerpt:
      "The insurance claim process can feel overwhelming. We break it down into clear steps — from initial documentation to adjuster meetings to final approval — so you know exactly what to expect.",
    date: "March 2026",
    category: "Insurance",
  },
  {
    title: "When to Repair vs. Replace Your Roof",
    slug: "repair-vs-replace-roof",
    excerpt:
      "Not every issue requires a full replacement. Learn how to evaluate your roof's age, damage extent, and long-term costs to make the smartest decision for your home and budget.",
    date: "February 2026",
    category: "Maintenance",
  },
];

export default function BlogPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              { name: "Blog", url: `${BUSINESS.url}/blog` },
            ]),
          ),
        }}
      />

      {/* ─── HERO ─── */}
      <section className='relative overflow-hidden border-b border-border/40'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--ridge-red)_0%,_transparent_50%)] opacity-[0.07]' />
        <div className='absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,var(--background))]' />

        <div className='relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:pt-24 lg:pt-32'>
          <FadeIn>
            <Badge variant='secondary' className='mb-6'>
              <BookOpen className='text-primary' data-icon='inline-start' />
              Roofing Resources
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className='font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl'>
              Roofing Tips
              <br />
              <span className='text-primary'>&amp; Resources</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground'>
              Practical advice from the Ridge Line team to help you protect your
              home, navigate insurance claims, and make smart roofing decisions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── BLOG POSTS ─── */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <StaggerChildren className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <ScaleOnHover>
                  <Card className='group h-full overflow-hidden'>
                    {/* Placeholder Image */}
                    <div className='flex aspect-[16/9] flex-col items-center justify-center bg-ridge-gray p-6'>
                      <BookOpen className='size-10 text-primary/60' />
                      <p className='mt-2 text-xs text-muted-foreground'>
                        Article Cover Image
                      </p>
                    </div>
                    <CardContent className='flex flex-col p-6'>
                      <div className='flex items-center gap-2'>
                        <Badge variant='secondary' className='text-xs'>
                          {post.category}
                        </Badge>
                        <span className='flex items-center gap-1 text-xs text-muted-foreground'>
                          <Calendar className='size-3' />
                          {post.date}
                        </span>
                      </div>
                      <h2 className='mt-3 font-heading text-xl font-bold leading-tight'>
                        {post.title}
                      </h2>
                      <p className='mt-2 flex-1 text-sm leading-relaxed text-muted-foreground'>
                        {post.excerpt}
                      </p>
                      <span className='mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary'>
                        Read More
                        <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
                      </span>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── SUBSCRIBE ─── */}
      <section className='border-y border-border/40 bg-ridge-darker py-16'>
        <div className='mx-auto max-w-2xl px-4 text-center'>
          <FadeIn>
            <Mail className='mx-auto size-10 text-primary' />
            <h2 className='mt-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl'>
              Subscribe for Updates
            </h2>
            <p className='mx-auto mt-3 max-w-md text-muted-foreground'>
              Get roofing tips, storm season prep guides, and company news
              delivered to your inbox. No spam — just helpful stuff.
            </p>
            <form className='mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row'>
              <input
                type='email'
                placeholder='you@example.com'
                required
                className='flex h-10 flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              />
              <Button type='submit'>
                Subscribe
                <ArrowRight data-icon='inline-end' />
              </Button>
            </form>
            <p className='mt-3 text-xs text-muted-foreground'>
              We respect your privacy. Unsubscribe anytime.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className='bg-gradient-to-b from-ridge-darker to-background py-20'>
        <div className='mx-auto max-w-3xl px-4 text-center'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
              Have a roofing question?
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-lg text-muted-foreground'>
              Our team is happy to answer your questions — no obligation, no
              pressure. Reach out anytime.
            </p>
            <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
              <Button size='lg' asChild>
                <Link href='/contact'>
                  Contact Us
                  <ArrowRight data-icon='inline-end' />
                </Link>
              </Button>
              <span className='text-sm text-muted-foreground'>or call</span>
              <a
                href={BUSINESS.phoneHref}
                className='flex items-center gap-2 text-lg font-bold text-primary transition-colors hover:text-ridge-red-light'
              >
                <Phone />
                {BUSINESS.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
