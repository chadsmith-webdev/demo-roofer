import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Camera, MapPin } from "lucide-react";
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
  title: "Roofing Project Gallery | Before & After Photos",
  description:
    "Browse before and after photos of roofing projects by Ridge Line Roofing across Northwest Arkansas. Hail damage repairs, full replacements, and insurance claim work in Fayetteville, Rogers, Bentonville, and beyond.",
  keywords: [
    "roofing project gallery NWA",
    "before after roof photos",
    "roof replacement gallery Arkansas",
    "hail damage repair photos",
  ],
};

const projects = [
  {
    type: "Hail Damage Repair",
    location: "Fayetteville",
    description:
      "Full shingle replacement after April hailstorm. Insurance claim approved and completed in 5 days.",
  },
  {
    type: "Full Replacement",
    location: "Rogers",
    description:
      "20-year-old three-tab shingles replaced with GAF Timberline HDZ architectural shingles.",
  },
  {
    type: "Wind Damage",
    location: "Bentonville",
    description:
      "Severe wind lifted shingles across the north face. Emergency tarping followed by full section repair.",
  },
  {
    type: "Insurance Claim",
    location: "Springdale",
    description:
      "Initially denied claim overturned after our documentation and adjuster meeting. Full replacement covered.",
  },
  {
    type: "Full Replacement",
    location: "Bella Vista",
    description:
      "Complete tear-off and replacement with Owens Corning Duration series. 50-year manufacturer warranty.",
  },
  {
    type: "Storm Repair",
    location: "Prairie Grove",
    description:
      "Multiple leaks from spring storm system. Repaired flashing, replaced damaged decking, and new shingles.",
  },
  {
    type: "Roof Replacement",
    location: "Lowell",
    description:
      "Aging roof with multiple patch jobs replaced with a clean, modern GAF system. Financing approved same-day.",
  },
  {
    type: "Emergency Repair",
    location: "Tontitown",
    description:
      "Late-night storm call. Emergency tarp deployed next morning, permanent repair completed within 48 hours.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              { name: "Gallery", url: `${BUSINESS.url}/gallery` },
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
              <Camera className='text-primary' data-icon='inline-start' />
              {BUSINESS.stats.roofsCompleted} Projects Completed
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className='font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl'>
              Our Work Speaks
              <br />
              <span className='text-primary'>for Itself</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground'>
              Browse real projects from across Northwest Arkansas — storm damage
              repairs, full replacements, and everything in between.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── PROJECT GRID ─── */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <StaggerChildren className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {projects.map((project) => (
              <StaggerItem key={`${project.type}-${project.location}`}>
                <ScaleOnHover>
                  <Card className='group h-full overflow-hidden'>
                    <div className='relative aspect-[4/3] bg-ridge-gray'>
                      <div className='flex h-full flex-col items-center justify-center gap-3 p-4 text-center'>
                        <Camera className='size-10 text-primary/60' />
                        <p className='text-xs text-muted-foreground'>
                          Before &amp; After Photo
                        </p>
                      </div>
                      <div className='absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-background/40 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100'>
                        <p className='text-xs leading-relaxed text-muted-foreground'>
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <CardContent className='p-4'>
                      <h3 className='font-heading text-sm font-semibold'>
                        {project.type}
                      </h3>
                      <p className='mt-1 flex items-center gap-1 text-xs text-muted-foreground'>
                        <MapPin className='size-3' />
                        {project.location}, AR
                      </p>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className='border-t border-border/40 bg-gradient-to-b from-ridge-darker to-background py-20'>
        <div className='mx-auto max-w-3xl px-4 text-center'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
              Want your roof to look this good?
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-lg text-muted-foreground'>
              Schedule your free 21-point inspection and get a no-obligation
              estimate from our team.
            </p>
            <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
              <Button size='lg' asChild>
                <Link href='/contact'>
                  Get Your Free Estimate
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
