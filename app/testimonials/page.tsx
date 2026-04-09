import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BUSINESS, TESTIMONIALS } from "@/lib/constants";
import { breadcrumbSchema, reviewSchema } from "@/lib/schema";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  ScaleOnHover,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "Customer Reviews | 580+ Five-Star Ratings",
  description:
    "Read real reviews from NWA homeowners who trust Ridge Line Roofing. 580+ five-star ratings for storm damage repair, roof replacements, and insurance claim assistance.",
  keywords: [
    "Ridge Line Roofing reviews",
    "NWA roofer reviews",
    "Fayetteville roofing reviews",
    "best roofer Northwest Arkansas",
  ],
};

export default function TestimonialsPage() {
  const reviewsForSchema = TESTIMONIALS.map((t) => ({
    name: t.name,
    rating: t.rating,
    text: t.text,
    date: t.date,
  }));

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              { name: "Reviews", url: `${BUSINESS.url}/testimonials` },
            ]),
          ),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema(reviewsForSchema)),
        }}
      />

      {/* ─── HERO ─── */}
      <section className='relative overflow-hidden border-b border-border/40'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--ridge-red)_0%,_transparent_50%)] opacity-[0.07]' />
        <div className='absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,var(--background))]' />

        <div className='relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:pt-24 lg:pt-32'>
          <FadeIn>
            <Badge variant='secondary' className='mb-6'>
              <Star className='text-primary' data-icon='inline-start' />
              {BUSINESS.stats.fiveStarReviews} Five-Star Reviews
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className='font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl'>
              What Our Neighbors
              <br />
              <span className='text-primary'>Say About Us</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className='mt-6 flex items-center gap-4'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='size-6 fill-primary text-primary' />
                ))}
              </div>
              <div className='text-lg text-muted-foreground'>
                <strong className='text-foreground'>4.9/5</strong> average from{" "}
                {BUSINESS.stats.fiveStarReviews} verified reviews
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── REVIEWS GRID ─── */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <StaggerChildren className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {TESTIMONIALS.map((review) => (
              <StaggerItem key={review.name}>
                <ScaleOnHover>
                  <Card className='h-full'>
                    <CardContent className='flex h-full flex-col p-6'>
                      <div className='flex gap-0.5'>
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className='size-4 fill-primary text-primary'
                          />
                        ))}
                      </div>
                      <p className='mt-4 flex-1 text-sm leading-relaxed text-muted-foreground'>
                        &ldquo;{review.text}&rdquo;
                      </p>
                      <div className='mt-4 border-t border-border pt-4'>
                        <p className='text-sm font-semibold'>{review.name}</p>
                        <p className='text-xs text-muted-foreground'>
                          {review.location} — {review.service}
                        </p>
                        <p className='mt-1 text-xs text-muted-foreground/60'>
                          {new Date(review.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                          })}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── GOOGLE REVIEWS CALLOUT ─── */}
      <section className='border-y border-border/40 bg-ridge-darker py-12'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <div className='flex flex-col items-center gap-6 text-center md:flex-row md:text-left'>
              <div className='flex items-center gap-3'>
                <div className='flex gap-0.5'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='size-5 fill-primary text-primary'
                    />
                  ))}
                </div>
                <Badge variant='secondary'>Google Verified</Badge>
              </div>
              <div className='flex-1'>
                <p className='text-muted-foreground'>
                  We&apos;re proud of our{" "}
                  <strong className='text-foreground'>4.9-star rating</strong>{" "}
                  across {BUSINESS.stats.fiveStarReviews} reviews on Google.
                  Read more on our Google Business profile.
                </p>
              </div>
              <Button variant='outline' asChild>
                <a
                  href={BUSINESS.social.google}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  See Google Reviews
                  <ExternalLink data-icon='inline-end' />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className='bg-gradient-to-b from-ridge-darker to-background py-20'>
        <div className='mx-auto max-w-3xl px-4 text-center'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
              Ready to join our growing list of happy homeowners?
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-lg text-muted-foreground'>
              Schedule your free roof inspection today and see why NWA trusts
              Ridge Line.
            </p>
            <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
              <Button size='lg' asChild>
                <Link href='/contact'>
                  Get Your Free Inspection
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
