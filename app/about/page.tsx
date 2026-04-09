import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Award,
  Heart,
  Users,
  Hammer,
  Shield,
  Star,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BUSINESS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  CountUp,
  ScaleOnHover,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "About Ridge Line Roofing | Family-Owned Since 2011",
  description:
    "Ridge Line Roofing is a family-owned roofing company founded in 2011 by Jake and Emily Hargrove. GAF Master Elite® Contractor serving Northwest Arkansas with integrity, craftsmanship, and community values.",
  keywords: [
    "about Ridge Line Roofing",
    "family-owned roofer NWA",
    "Fayetteville AR roofing company",
    "GAF Master Elite contractor Arkansas",
  ],
};

const team = [
  {
    name: "Jake Hargrove",
    title: "Owner / Lead Estimator",
    bio: "Founded Ridge Line in 2011 with a truck, a ladder, and a commitment to doing things right. Jake personally oversees every estimate and major project.",
  },
  {
    name: "Emily Hargrove",
    title: "Operations Director",
    bio: "Emily keeps the business running — scheduling, customer communication, and making sure every homeowner feels taken care of from first call to final walkthrough.",
  },
  {
    name: "Marcus Webb",
    title: "Production Manager",
    bio: "With 15+ years in commercial and residential roofing, Marcus ensures every crew meets Ridge Line's quality standards on every single job.",
  },
  {
    name: "Dustin Reeves",
    title: "Insurance Claims Specialist",
    bio: "Dustin has navigated hundreds of insurance claims for NWA homeowners, getting full approvals and making the process as painless as possible.",
  },
];

const communityItems = [
  {
    icon: Heart,
    title: "NWA Youth Sports Sponsor",
    description:
      "Proud sponsor of youth baseball, soccer, and basketball leagues across Washington and Benton counties.",
  },
  {
    icon: Hammer,
    title: "Habitat for Humanity Builds",
    description:
      "Our crew volunteers annually with NWA Habitat for Humanity, helping build safe homes for families in need.",
  },
  {
    icon: Shield,
    title: "Storm Relief Volunteers",
    description:
      "When storms hit our neighbors hard, we show up — tarping roofs, clearing debris, and connecting families with resources.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              { name: "About", url: `${BUSINESS.url}/about` },
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
              <Users className='text-primary' data-icon='inline-start' />
              Family-Owned &amp; Operated Since 2011
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className='font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl'>
              Built on Integrity.
              <br />
              <span className='text-primary'>Backed by Experience.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground'>
              Ridge Line Roofing isn&apos;t a franchise or a storm-chasing
              outfit. We&apos;re your neighbors — raising our families in the
              same communities we serve.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='grid items-center gap-12 lg:grid-cols-2'>
            <FadeIn direction='left'>
              <div>
                <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
                  Our Story
                </h2>
                <div className='mt-6 space-y-4 text-muted-foreground'>
                  <p>
                    In 2011, Jake and Emily Hargrove started Ridge Line Roofing
                    with nothing more than a two-man crew, a beat-up truck, and
                    a simple promise: treat every roof like it&apos;s your own.
                  </p>
                  <p>
                    What began as weekend side jobs for friends and family
                    quickly grew through word-of-mouth referrals. Neighbors told
                    neighbors. One job turned into ten, ten into a hundred.
                  </p>
                  <p>
                    Today, Ridge Line employs 40+ skilled professionals and has
                    completed over 2,800 roofing projects across Northwest
                    Arkansas. But the promise hasn&apos;t changed — honesty,
                    craftsmanship, and community come first. Always.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction='right' delay={0.1}>
              <Card className='overflow-hidden'>
                <CardContent className='p-0'>
                  <div className='flex aspect-[4/3] flex-col items-center justify-center bg-ridge-gray p-8 text-center'>
                    <Users className='size-16 text-primary' />
                    <p className='mt-4 text-sm text-muted-foreground'>
                      The Hargrove family &amp; Ridge Line team
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className='mt-12 grid gap-4 sm:grid-cols-3'>
              {[
                {
                  icon: CheckCircle,
                  title: "Honesty",
                  text: "Transparent pricing, no hidden fees, no pressure sales tactics. Ever.",
                },
                {
                  icon: Hammer,
                  title: "Craftsmanship",
                  text: "We don't cut corners. Every nail, every shingle, every flashing — done right.",
                },
                {
                  icon: Heart,
                  title: "Community",
                  text: "We live here, we work here, and we give back to the communities we serve.",
                },
              ].map((value) => (
                <Card key={value.title}>
                  <CardContent className='p-6 text-center'>
                    <value.icon className='mx-auto size-8 text-primary' />
                    <h3 className='mt-3 font-heading text-lg font-semibold'>
                      {value.title}
                    </h3>
                    <p className='mt-2 text-sm text-muted-foreground'>
                      {value.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className='border-y border-border/40 bg-ridge-darker py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <div className='text-center'>
              <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
                Meet the Team
              </h2>
              <p className='mx-auto mt-4 max-w-2xl text-muted-foreground'>
                The people behind every roof, every call, and every handshake.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <ScaleOnHover>
                  <Card className='h-full'>
                    <CardContent className='p-6'>
                      <div className='mx-auto flex size-20 items-center justify-center rounded-full bg-ridge-gray'>
                        <Users className='size-8 text-primary' />
                      </div>
                      <h3 className='mt-4 text-center font-heading text-lg font-semibold'>
                        {member.name}
                      </h3>
                      <p className='text-center text-sm text-primary'>
                        {member.title}
                      </p>
                      <p className='mt-3 text-center text-sm text-muted-foreground'>
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <div className='text-center'>
              <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
                Certifications &amp; Credentials
              </h2>
              <p className='mx-auto mt-4 max-w-2xl text-muted-foreground'>
                We&apos;ve earned the industry&apos;s top designations so you
                never have to question the quality of our work.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {BUSINESS.certifications.map((cert) => (
              <StaggerItem key={cert}>
                <Card>
                  <CardContent className='flex items-center gap-4 p-6'>
                    <Award className='size-10 shrink-0 text-primary' />
                    <p className='font-medium'>{cert}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── COMMUNITY ─── */}
      <section className='border-y border-border/40 bg-ridge-darker py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <div className='text-center'>
              <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
                Giving Back to NWA
              </h2>
              <p className='mx-auto mt-4 max-w-2xl text-muted-foreground'>
                We don&apos;t just work in this community — we invest in it.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className='mt-12 grid gap-6 md:grid-cols-3'>
            {communityItems.map((item) => (
              <StaggerItem key={item.title}>
                <Card className='h-full'>
                  <CardContent className='p-6 text-center'>
                    <item.icon className='mx-auto size-10 text-primary' />
                    <h3 className='mt-4 font-heading text-lg font-semibold'>
                      {item.title}
                    </h3>
                    <p className='mt-2 text-sm text-muted-foreground'>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className='py-12'>
        <div className='mx-auto max-w-7xl px-4'>
          <StaggerChildren className='grid grid-cols-2 gap-6 sm:grid-cols-4'>
            {[
              {
                value: BUSINESS.stats.yearsInBusiness,
                label: "Years in Business",
                suffix: "+",
              },
              { value: 2800, label: "Roofs Completed", suffix: "+" },
              { value: 580, label: "5-Star Reviews", suffix: "+" },
              {
                value: BUSINESS.stats.warrantyYears,
                label: "Year Warranty",
                suffix: "-Yr",
              },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className='text-center'>
                  <p className='font-heading text-3xl font-bold text-foreground sm:text-4xl'>
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className='mt-1 text-sm text-muted-foreground'>
                    {stat.label}
                  </p>
                </div>
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
              Ready to work with a roofer you can trust?
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-lg text-muted-foreground'>
              Schedule your free inspection and see why thousands of NWA
              homeowners choose Ridge Line.
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
