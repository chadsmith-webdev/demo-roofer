import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  ScaleOnHover,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "Service Areas | Roofing Across Northwest Arkansas",
  description:
    "Ridge Line Roofing serves Fayetteville, Bentonville, Rogers, Springdale, and 17+ communities across NWA. Find your local roofing contractor. Call (479) 334-9271.",
  keywords: [
    "roofing contractor NWA",
    "roofer Fayetteville AR",
    "roofer Bentonville AR",
    "roofer Rogers AR",
    "roofer Springdale AR",
    "Northwest Arkansas roofing",
  ],
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              { name: "Service Areas", url: `${BUSINESS.url}/service-areas` },
            ]),
          ),
        }}
      />

      {/* HERO */}
      <section className='border-b border-border/40 py-16 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <Badge variant='secondary' className='mb-4'>
              <MapPin className='text-primary' data-icon='inline-start' />
              21 Communities Served
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className='font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl'>
              Roofing Services Across
              <br />
              <span className='text-primary'>Northwest Arkansas</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className='mt-6 max-w-2xl text-lg text-muted-foreground'>
              From our home base in Fayetteville, we serve every city and
              community within a 35-mile radius. Same quality, same warranties,
              same commitment — no matter where you are in NWA.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ALL SERVICE AREAS */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <StaggerChildren className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {SERVICE_AREAS.map((area) => (
              <StaggerItem key={area.slug}>
                <ScaleOnHover>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className='group block'
                  >
                    <Card className='transition-colors hover:border-primary/30'>
                      <CardContent className='flex items-center justify-between p-5'>
                        <div className='flex items-center gap-3'>
                          <div className='flex size-10 items-center justify-center rounded-lg bg-primary/10'>
                            <MapPin className='size-5 text-primary' />
                          </div>
                          <div>
                            <h3 className='font-heading font-semibold'>
                              {area.name}, AR
                            </h3>
                            <p className='text-xs text-muted-foreground'>
                              {area.county} County · {area.distance} from HQ
                            </p>
                          </div>
                        </div>
                        <ArrowRight className='size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary' />
                      </CardContent>
                    </Card>
                  </Link>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className='border-t border-border/40 bg-ridge-darker py-16'>
        <div className='mx-auto max-w-3xl px-4 text-center'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
              Don&apos;t see your area?
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-muted-foreground'>
              We may still serve your community. Give us a call and we&apos;ll
              let you know.
            </p>
            <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
              <Button size='lg' asChild>
                <Link href='/contact'>
                  Contact Us <ArrowRight data-icon='inline-end' />
                </Link>
              </Button>
              <a
                href={BUSINESS.phoneHref}
                className='flex items-center gap-2 font-bold text-primary'
              >
                <Phone /> {BUSINESS.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
