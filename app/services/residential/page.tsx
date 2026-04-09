import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Shield,
  Home,
  Search,
  ClipboardList,
  Palette,
  Trash2,
  Hammer,
  Eye,
  Award,
  AlertTriangle,
  Wrench,
  ArrowUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BUSINESS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Residential Roofing Services | Fayetteville & NWA",
  description:
    "Expert residential roofing in Northwest Arkansas. GAF Timberline HDZ, Owens Corning Duration, CertainTeed Landmark shingles. Full replacements, repairs, and inspections. Serving Fayetteville, Bentonville, Rogers & NWA since 2011.",
  keywords: [
    "residential roofing Fayetteville AR",
    "roof replacement NWA",
    "shingle roof Northwest Arkansas",
    "GAF Timberline HDZ installer",
    "Owens Corning roofer NWA",
  ],
};

export default function ResidentialRoofingPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              { name: "Services", url: `${BUSINESS.url}/services` },
              {
                name: "Residential Roofing",
                url: `${BUSINESS.url}/services/residential`,
              },
            ]),
          ),
        }}
      />

      {/* HERO */}
      <section className='relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--ridge-red)_0%,_transparent_70%)] opacity-[0.05]' />
        <div className='relative mx-auto max-w-7xl px-4 py-16 sm:py-24'>
          <FadeIn>
            <Badge
              variant='secondary'
              className='mb-4 border-primary/30 bg-primary/10'
            >
              <Home className='text-primary' data-icon='inline-start' />
              Residential Roofing Experts
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className='font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl'>
              Your Home Deserves a Roof
              <br />
              <span className='text-primary'>Built to Last.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className='mt-6 max-w-2xl text-lg text-muted-foreground'>
              Northwest Arkansas weather doesn&apos;t go easy on roofs.
              That&apos;s why we install only premium shingle systems from GAF,
              Owens Corning, and CertainTeed — backed by manufacturer warranties
              up to {BUSINESS.stats.warrantyYears} years. As a{" "}
              {BUSINESS.certifications[0]}, we deliver quality that&apos;s
              certified, not just claimed.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Button size='lg' asChild>
                <a href={BUSINESS.phoneHref}>
                  <Phone data-icon='inline-start' />
                  Call: {BUSINESS.phone}
                </a>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <Link href='/contact'>
                  Schedule Free Inspection
                  <ArrowRight data-icon='inline-end' />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SHINGLE PRODUCTS */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight text-center sm:text-4xl'>
              Premium Shingle Products We Install
            </h2>
            <p className='mx-auto mt-4 max-w-2xl text-center text-muted-foreground'>
              We only install shingles we&apos;d put on our own homes. Each
              product is chosen for NWA&apos;s specific wind, hail, and humidity
              conditions.
            </p>
          </FadeIn>

          <StaggerChildren className='mt-12 grid gap-8 lg:grid-cols-3'>
            <StaggerItem>
              <Card className='h-full'>
                <CardContent className='p-8'>
                  <Badge className='bg-primary/10 text-primary border-primary/30'>
                    Our #1 Pick
                  </Badge>
                  <h3 className='mt-4 font-heading text-2xl font-bold'>
                    GAF Timberline HDZ®
                  </h3>
                  <p className='mt-1 text-sm font-medium text-primary'>
                    America&apos;s #1 Selling Shingle
                  </p>
                  <p className='mt-4 text-sm leading-relaxed text-muted-foreground'>
                    The gold standard in architectural shingles. LayerLock™
                    technology provides a mechanical bond that delivers 130 MPH
                    wind warranty without hand-sealing. StrikeZone™ nailing area
                    makes installation faster and more consistent.
                  </p>
                  <ul className='mt-6 space-y-2'>
                    {[
                      "130 MPH wind resistance warranty",
                      "Class A fire rating",
                      "LayerLock™ technology",
                      "Lifetime limited warranty",
                      "50-year non-prorated period",
                      "Wide range of color options",
                    ].map((feat) => (
                      <li
                        key={feat}
                        className='flex items-center gap-2 text-sm text-muted-foreground'
                      >
                        <CheckCircle className='size-4 shrink-0 text-primary' />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className='h-full'>
                <CardContent className='p-8'>
                  <Badge variant='secondary'>Premium Option</Badge>
                  <h3 className='mt-4 font-heading text-2xl font-bold'>
                    Owens Corning Duration®
                  </h3>
                  <p className='mt-1 text-sm font-medium text-primary'>
                    SureNail® Technology
                  </p>
                  <p className='mt-4 text-sm leading-relaxed text-muted-foreground'>
                    Engineered with the patented SureNail® Technology strip — a
                    tough, engineered woven-fabric nailing strip built into the
                    shingle. This provides outstanding grip and 130 MPH wind
                    rating with only 4 nails.
                  </p>
                  <ul className='mt-6 space-y-2'>
                    {[
                      "130 MPH wind resistance",
                      "SureNail® Technology strip",
                      "Class 4 impact resistance (FLEX)",
                      "Lifetime limited warranty",
                      "TruDefinition® color depth",
                      "Streakguard™ algae resistance",
                    ].map((feat) => (
                      <li
                        key={feat}
                        className='flex items-center gap-2 text-sm text-muted-foreground'
                      >
                        <CheckCircle className='size-4 shrink-0 text-primary' />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className='h-full'>
                <CardContent className='p-8'>
                  <Badge variant='secondary'>Value Choice</Badge>
                  <h3 className='mt-4 font-heading text-2xl font-bold'>
                    CertainTeed Landmark®
                  </h3>
                  <p className='mt-1 text-sm font-medium text-primary'>
                    Dual-Layered Performance
                  </p>
                  <p className='mt-4 text-sm leading-relaxed text-muted-foreground'>
                    A dual-layered, fiber glass-based shingle that offers the
                    appearance of wood shake at an accessible price point.
                    NailTrak™ nailing line ensures accurate, efficient
                    installation every time.
                  </p>
                  <ul className='mt-6 space-y-2'>
                    {[
                      "110 MPH wind warranty",
                      "Class A fire rating",
                      "NailTrak™ nailing line",
                      "Lifetime limited warranty",
                      "StreakFighter® algae resistance",
                      "Max Def™ color technology",
                    ].map((feat) => (
                      <li
                        key={feat}
                        className='flex items-center gap-2 text-sm text-muted-foreground'
                      >
                        <CheckCircle className='size-4 shrink-0 text-primary' />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className='border-y border-border/40 bg-ridge-darker py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight text-center sm:text-4xl'>
              Our 6-Step Roofing Process
            </h2>
            <p className='mx-auto mt-4 max-w-2xl text-center text-muted-foreground'>
              From your first call to the final walkthrough — we keep it
              transparent, professional, and on schedule.
            </p>
          </FadeIn>

          <StaggerChildren className='mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                step: "01",
                icon: Search,
                title: "Inspection",
                text: "Comprehensive 21-point roof inspection. We check decking, underlayment, flashing, vents, gutters, and every shingle. You get a detailed report with photos.",
              },
              {
                step: "02",
                icon: ClipboardList,
                title: "Estimate",
                text: "An itemized, transparent estimate with no hidden fees. We break down material, labor, and any structural work so you know exactly where every dollar goes.",
              },
              {
                step: "03",
                icon: Palette,
                title: "Material Selection",
                text: "Choose your shingle brand, line, and color. We bring samples to your home so you can see how they look against your siding, trim, and landscape.",
              },
              {
                step: "04",
                icon: Trash2,
                title: "Tear-Off",
                text: "Complete removal of old shingles and underlayment down to the decking. We inspect the wood sheathing for rot or damage and replace any compromised sections.",
              },
              {
                step: "05",
                icon: Hammer,
                title: "Installation",
                text: "Ice & water shield in valleys and eaves, synthetic underlayment, starter strips, shingles, ridge caps, and new pipe boots. Installed to manufacturer spec.",
              },
              {
                step: "06",
                icon: Eye,
                title: "Final Walkthrough",
                text: "We walk you through the completed roof, clean up every nail and piece of debris, and activate your manufacturer warranty. Your project isn't done until you're satisfied.",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className='text-center'>
                  <div className='mx-auto flex size-16 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10'>
                    <item.icon className='size-7 text-primary' />
                  </div>
                  <span className='mt-3 inline-block font-heading text-xs font-bold uppercase tracking-wider text-primary'>
                    Step {item.step}
                  </span>
                  <h3 className='mt-1 font-heading text-lg font-semibold'>
                    {item.title}
                  </h3>
                  <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* REPAIR VS REPLACE */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <div className='flex items-center justify-center gap-2'>
              <ArrowUpDown className='size-6 text-primary' />
              <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
                Repair or Replace?
              </h2>
            </div>
            <p className='mx-auto mt-4 max-w-2xl text-center text-muted-foreground'>
              Not every issue needs a full replacement. Here&apos;s how we help
              you make the right call.
            </p>
          </FadeIn>

          <div className='mt-12 grid gap-8 lg:grid-cols-2'>
            <FadeIn>
              <Card className='h-full'>
                <CardContent className='p-8'>
                  <div className='flex items-center gap-3'>
                    <Wrench className='size-6 text-primary' />
                    <h3 className='font-heading text-xl font-bold'>
                      Repair Makes Sense When…
                    </h3>
                  </div>
                  <ul className='mt-6 space-y-3'>
                    {[
                      "Damage is isolated to one area (a few missing shingles, a single leak)",
                      "Your roof is under 10 years old and otherwise in good condition",
                      "A small section was damaged by a fallen branch or debris",
                      "Flashing around a vent or chimney needs to be resealed",
                      "You're planning to sell in 1–2 years and need targeted fixes",
                    ].map((item) => (
                      <li
                        key={item}
                        className='flex items-start gap-3 text-sm text-muted-foreground'
                      >
                        <CheckCircle className='mt-0.5 size-4 shrink-0 text-primary' />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className='mt-6 text-sm leading-relaxed text-muted-foreground'>
                    <strong className='text-foreground'>Typical cost:</strong>{" "}
                    $350 – $1,500 depending on scope. Most repairs are completed
                    in a single day.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className='h-full'>
                <CardContent className='p-8'>
                  <div className='flex items-center gap-3'>
                    <Shield className='size-6 text-primary' />
                    <h3 className='font-heading text-xl font-bold'>
                      Replacement Makes Sense When…
                    </h3>
                  </div>
                  <ul className='mt-6 space-y-3'>
                    {[
                      "Your roof is 15–20+ years old and showing widespread wear",
                      "Multiple leaks or damage across several areas",
                      "Significant storm damage documented by inspection",
                      "Decking or structural issues are found underneath",
                      "Granule loss is widespread (dark streaks in gutters)",
                      "You're investing in your home for the long term",
                    ].map((item) => (
                      <li
                        key={item}
                        className='flex items-start gap-3 text-sm text-muted-foreground'
                      >
                        <AlertTriangle className='mt-0.5 size-4 shrink-0 text-primary' />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className='mt-6 text-sm leading-relaxed text-muted-foreground'>
                    <strong className='text-foreground'>Typical cost:</strong>{" "}
                    $8,500 – $25,000+ depending on size, materials, and
                    structural needs. Most replacements take 1–3 days.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY RIDGE LINE */}
      <section className='border-y border-border/40 bg-ridge-darker py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight text-center sm:text-4xl'>
              Why NWA Homeowners Choose Ridge Line
            </h2>
          </FadeIn>

          <StaggerChildren className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {[
              {
                icon: Award,
                title: BUSINESS.certifications[0],
                text: "Top 2% of all GAF contractors nationwide. Unlocks the best warranty coverage available.",
              },
              {
                icon: Shield,
                title: `${BUSINESS.stats.warrantyYears}-Year Warranty`,
                text: "Our manufacturer-backed warranties protect your investment for decades — not just a few years.",
              },
              {
                icon: Home,
                title: `${BUSINESS.stats.roofsCompleted} Roofs`,
                text: "We've completed over 2,800 residential roofing projects across Northwest Arkansas since 2011.",
              },
              {
                icon: CheckCircle,
                title: `${BUSINESS.stats.fiveStarReviews} 5-Star Reviews`,
                text: "Our reputation is built on every roof we install. See what your neighbors are saying about us.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className='h-full'>
                  <CardContent className='p-6 text-center'>
                    <item.icon className='mx-auto size-8 text-primary' />
                    <h3 className='mt-3 font-heading text-sm font-bold'>
                      {item.title}
                    </h3>
                    <p className='mt-2 text-sm text-muted-foreground'>
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className='border-t border-border/40 bg-primary py-16'>
        <div className='mx-auto max-w-4xl px-4 text-center'>
          <FadeIn>
            <Home className='mx-auto size-12 text-primary-foreground/80' />
            <h2 className='mt-4 font-heading text-3xl font-bold text-primary-foreground sm:text-4xl'>
              Ready to protect your biggest investment?
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-primary-foreground/80'>
              Schedule a free inspection and get a transparent, no-pressure
              estimate for your residential roofing project.
            </p>
            <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
              <a
                href={BUSINESS.phoneHref}
                className='rounded-md bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90'
              >
                Call {BUSINESS.phone}
              </a>
              <Link
                href='/contact'
                className='rounded-md border border-primary-foreground/30 px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10'
              >
                Schedule Online
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
