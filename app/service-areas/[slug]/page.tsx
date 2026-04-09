import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Phone,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle2,
  Star,
  BadgeCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BUSINESS, SERVICE_AREAS, TESTIMONIALS } from "@/lib/constants";
import { serviceAreaSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  CountUp,
} from "@/components/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ---------- city-specific content helper ---------- */
function getCityContent(name: string, county: string) {
  return {
    headline: `Trusted Roofing Contractor in ${name}, AR`,
    intro: `Ridge Line Roofing proudly serves homeowners and businesses in ${name}, ${county} County. Whether you need a full roof replacement after a hailstorm, emergency tarping, or a routine inspection, our licensed crew delivers the same top-tier workmanship ${name} residents have relied on since 2015.`,
    services: [
      {
        title: "Storm Damage Repair",
        description: `Severe weather hits ${name} hard. We respond within 24 hours to assess damage, coordinate with your insurer, and get your roof restored fast.`,
        icon: Shield,
      },
      {
        title: "Roof Replacement",
        description: `Upgrade your ${name} home with GAF Timberline HDZ or Owens Corning Duration shingles — backed by manufacturer lifetime warranties.`,
        icon: BadgeCheck,
      },
      {
        title: "Roof Inspections",
        description: `Annual inspections catch minor issues before they become expensive repairs. Ideal for ${name} homes built before 2005.`,
        icon: CheckCircle2,
      },
      {
        title: "Emergency Tarping",
        description: `Active leak or tree strike in ${name}? We deploy same-day emergency tarps to prevent further interior damage.`,
        icon: Clock,
      },
    ],
    faqs: [
      {
        q: `How soon can you start a roofing project in ${name}?`,
        a: `Most ${name} projects begin within 5–7 business days of signing. Emergency storm repairs are prioritized same-day.`,
      },
      {
        q: `Do you handle insurance claims for ${name} homeowners?`,
        a: `Yes. We work directly with every major insurer operating in ${county} County — from filing the claim to final inspection.`,
      },
      {
        q: `What roofing materials do you recommend for ${name}?`,
        a: `For the ${name} climate and hail exposure, we recommend GAF Timberline HDZ or Owens Corning Duration shingles with impact-resistant ratings.`,
      },
      {
        q: `Are you licensed and insured to work in ${name}?`,
        a: `Absolutely. Ridge Line Roofing holds Arkansas Contractor License #${BUSINESS.license} and carries full liability and workers' compensation insurance.`,
      },
    ],
  };
}

/* ---------- static params ---------- */
export function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({ slug: area.slug }));
}

/* ---------- metadata ---------- */
type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `Roofing Contractor ${area.name}, AR | Storm Damage & Roof Replacement`,
    description: `Licensed roofing contractor serving ${area.name}, Arkansas. Storm damage repair, roof replacement, insurance claim assistance. Call (479) 334-9271 for a free estimate.`,
    keywords: [
      `roofer ${area.name} AR`,
      `roofing contractor ${area.name}`,
      `storm damage repair ${area.name}`,
      `roof replacement ${area.name} Arkansas`,
    ],
  };
}

/* ---------- page ---------- */
export default async function ServiceAreaCityPage({ params }: PageProps) {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  const content = getCityContent(area.name, area.county);
  const testimonial =
    TESTIMONIALS[Math.floor(area.name.length % TESTIMONIALS.length)];

  return (
    <>
      {/* Schema */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceAreaSchema(
              area.name,
              `${BUSINESS.url}/service-areas/${area.slug}`,
            ),
          ),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              { name: "Service Areas", url: `${BUSINESS.url}/service-areas` },
              {
                name: `${area.name}, AR`,
                url: `${BUSINESS.url}/service-areas/${area.slug}`,
              },
            ]),
          ),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema(
              content.faqs.map((f) => ({ question: f.q, answer: f.a })),
            ),
          ),
        }}
      />

      {/* HERO */}
      <section className='border-b border-border/40 py-16 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <div className='flex flex-wrap items-center gap-2'>
              <Badge variant='secondary'>
                <MapPin className='text-primary' data-icon='inline-start' />
                {area.name}, AR
              </Badge>
              <Badge variant='outline'>{area.county} County</Badge>
              <Badge variant='outline'>{area.distance} from HQ</Badge>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className='mt-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl'>
              {content.headline.split(area.name)[0]}
              <span className='text-primary'>{area.name}</span>
              {content.headline.split(area.name)[1]}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className='mt-6 max-w-2xl text-lg text-muted-foreground'>
              {content.intro}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Button size='lg' asChild>
                <Link href='/contact'>
                  Get a Free Estimate <ArrowRight data-icon='inline-end' />
                </Link>
              </Button>
              <Button variant='outline' size='lg' asChild>
                <a href={BUSINESS.phoneHref}>
                  <Phone data-icon='inline-start' /> {BUSINESS.phone}
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATS */}
      <section className='border-b border-border/40 bg-ridge-darker py-12'>
        <div className='mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-12 px-4 text-center'>
          {[
            { value: 2800, suffix: "+", label: "Roofs Completed" },
            {
              value: BUSINESS.stats.yearsInBusiness,
              label: "Years Experience",
            },
            { value: 100, suffix: "%", label: "Satisfaction Rate" },
            { value: 21, label: "Communities Served" },
          ].map((stat) => (
            <div key={stat.label}>
              <span className='font-heading text-3xl font-bold text-primary'>
                <CountUp target={stat.value} suffix={stat.suffix || "+"} />
              </span>
              <p className='mt-1 text-sm text-muted-foreground'>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
              Roofing Services in{" "}
              <span className='text-primary'>{area.name}</span>
            </h2>
            <p className='mt-3 max-w-2xl text-muted-foreground'>
              We bring the full range of Ridge Line services to {area.name}{" "}
              homeowners.
            </p>
          </FadeIn>

          <StaggerChildren className='mt-12 grid gap-6 sm:grid-cols-2'>
            {content.services.map((svc) => (
              <StaggerItem key={svc.title}>
                <Card className='h-full'>
                  <CardContent className='flex gap-4 p-6'>
                    <div className='flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
                      <svc.icon className='size-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-heading text-lg font-semibold'>
                        {svc.title}
                      </h3>
                      <p className='mt-1 text-sm text-muted-foreground'>
                        {svc.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className='border-y border-border/40 bg-ridge-darker py-16'>
        <div className='mx-auto max-w-3xl px-4 text-center'>
          <FadeIn>
            <div className='flex items-center justify-center gap-1'>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className='size-5 fill-primary text-primary' />
              ))}
            </div>
            <blockquote className='mt-6 text-lg italic text-foreground/90'>
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>
            <p className='mt-4 font-semibold'>{testimonial.name}</p>
            <p className='text-sm text-muted-foreground'>
              {testimonial.location}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-20'>
        <div className='mx-auto max-w-3xl px-4'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight'>
              Frequently Asked Questions — {area.name}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Accordion type='single' collapsible className='mt-8'>
              {content.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className='text-left text-base'>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className='text-muted-foreground'>
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className='border-t border-border/40 bg-primary py-16 text-primary-foreground'>
        <div className='mx-auto max-w-3xl px-4 text-center'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold sm:text-4xl'>
              Ready to Protect Your {area.name} Home?
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-primary-foreground/80'>
              Schedule a free roof inspection today. No pressure, no hidden fees
              — just honest answers from a local team you can trust.
            </p>
            <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
              <Button size='lg' variant='secondary' asChild>
                <Link href='/contact'>
                  Schedule Free Inspection <ArrowRight data-icon='inline-end' />
                </Link>
              </Button>
              <a
                href={BUSINESS.phoneHref}
                className='flex items-center gap-2 font-bold text-primary-foreground'
              >
                <Phone /> {BUSINESS.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className='py-16'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <h2 className='font-heading text-2xl font-bold'>
              Nearby Service Areas
            </h2>
          </FadeIn>
          <div className='mt-6 flex flex-wrap gap-2'>
            {SERVICE_AREAS.filter((a) => a.slug !== area.slug)
              .slice(0, 10)
              .map((nearby) => (
                <Link key={nearby.slug} href={`/service-areas/${nearby.slug}`}>
                  <Badge
                    variant='outline'
                    className='cursor-pointer transition-colors hover:bg-primary/10 hover:text-primary'
                  >
                    {nearby.name}, AR
                  </Badge>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
