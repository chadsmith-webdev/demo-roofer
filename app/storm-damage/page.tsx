import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Clock,
  Shield,
  Camera,
  FileText,
  CloudRain,
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
  ScaleOnHover,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "Storm Damage Roof Repair | 24-Hour Emergency Response",
  description:
    "Hail, wind, or tornado damage? Ridge Line Roofing responds within 24 hours across Northwest Arkansas. Emergency tarping, insurance documentation, and full repairs. Call (479) 334-9271 now.",
  keywords: [
    "storm damage roof repair Fayetteville AR",
    "hail damage roofer NWA",
    "emergency roof repair Northwest Arkansas",
    "wind damage roof",
    "tornado roof repair",
  ],
};

export default function StormDamagePage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              { name: "Storm Damage", url: `${BUSINESS.url}/storm-damage` },
            ]),
          ),
        }}
      />

      {/* HERO — URGENT */}
      <section className='relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--ridge-red)_0%,_transparent_70%)] opacity-[0.05]' />
        <div className='relative mx-auto max-w-7xl px-4 py-16 sm:py-24'>
          <FadeIn>
            <Badge
              variant='secondary'
              className='mb-4 border-primary/30 bg-primary/10'
            >
              <Zap className='text-primary' data-icon='inline-start' />
              24/7 Emergency Storm Response
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className='font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl'>
              Roof Damaged by a Storm?
              <br />
              <span className='text-primary'>We&apos;re On Our Way.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className='mt-6 max-w-2xl text-lg text-muted-foreground'>
              Northwest Arkansas sees some of the worst hail and wind in the
              country. When your roof takes a hit, you need a contractor who
              answers the phone, shows up fast, and knows how to work with your
              insurance company. That&apos;s us.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Button size='lg' asChild>
                <a href={BUSINESS.emergencyPhoneHref}>
                  <Phone data-icon='inline-start' />
                  Call Now: {BUSINESS.emergencyPhone}
                </a>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <Link href='/contact'>
                  Request Emergency Inspection
                  <ArrowRight data-icon='inline-end' />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHAT TO DO RIGHT NOW */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
              What to Do Right After Storm Damage
            </h2>
            <p className='mt-4 max-w-2xl text-muted-foreground'>
              Don&apos;t climb on your roof. Follow these steps to protect
              yourself and your claim.
            </p>
          </FadeIn>

          <StaggerChildren className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                icon: AlertTriangle,
                title: "1. Stay Safe",
                text: "Don't go on the roof. If water is coming in, place buckets and move valuables away from the leak.",
              },
              {
                icon: Camera,
                title: "2. Document Everything",
                text: "Take photos and videos of damage from the ground. Include damaged siding, gutters, windows, and yard debris.",
              },
              {
                icon: FileText,
                title: "3. Contact Your Insurance",
                text: "File a claim as soon as possible. Note your claim number, adjuster name, and expected timeline.",
              },
              {
                icon: Phone,
                title: "4. Call Ridge Line",
                text: "We'll schedule a free inspection within 24 hours. We meet with your adjuster and handle the documentation.",
              },
              {
                icon: Shield,
                title: "5. Emergency Tarping",
                text: "If needed, we can tarp your roof the same day to prevent further water damage until full repairs begin.",
              },
              {
                icon: Clock,
                title: "6. Repair Timeline",
                text: "Most storm repairs are completed within 1–2 weeks of insurance approval. We keep you updated every step.",
              },
            ].map((step) => (
              <StaggerItem key={step.title}>
                <Card className='h-full'>
                  <CardContent className='p-6'>
                    <step.icon className='size-8 text-primary' />
                    <h3 className='mt-4 font-heading text-lg font-semibold'>
                      {step.title}
                    </h3>
                    <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                      {step.text}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* TYPES OF STORM DAMAGE */}
      <section className='border-y border-border/40 bg-ridge-darker py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
              Types of Storm Damage We Repair
            </h2>
          </FadeIn>

          <div className='mt-12 grid gap-8 lg:grid-cols-2'>
            {[
              {
                title: "Hail Damage",
                description:
                  "Hail is the #1 cause of roof damage in NWA. Even marble-sized hail can crack shingles, expose the underlayment, and lead to leaks within months. We document every impact point for your insurance claim.",
                signs: [
                  "Dented gutters or downspouts",
                  "Circular cracking on shingles",
                  "Missing granules (dark spots)",
                  "Dents in metal flashing or vents",
                ],
              },
              {
                title: "Wind Damage",
                description:
                  "Straight-line winds and tornadic activity can lift, crease, or completely remove shingles. Wind damage often starts at edges and ridges — the areas most exposed to uplift forces.",
                signs: [
                  "Missing or lifted shingles",
                  "Exposed underlayment or decking",
                  "Ridge cap damage",
                  "Debris impact marks",
                ],
              },
              {
                title: "Fallen Tree & Debris Damage",
                description:
                  "Branches and trees can puncture the roof deck, crush the structure, or drag shingles off on their way down. These situations often require emergency tarping and structural assessment.",
                signs: [
                  "Visible holes or punctures",
                  "Sagging roof sections",
                  "Broken rafters or trusses",
                  "Interior water intrusion",
                ],
              },
              {
                title: "Water & Leak Damage",
                description:
                  "Sometimes the damage isn't obvious from outside. Water finds its way through compromised flashing, cracked pipe boots, or damaged valleys — and by the time you see a ceiling stain, it's been leaking for a while.",
                signs: [
                  "Ceiling stains or bubbling paint",
                  "Musty odor in attic",
                  "Wet insulation",
                  "Mold growth on decking",
                ],
              },
            ].map((type) => (
              <FadeIn key={type.title}>
                <Card>
                  <CardContent className='p-8'>
                    <h3 className='font-heading text-xl font-bold'>
                      {type.title}
                    </h3>
                    <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>
                      {type.description}
                    </p>
                    <div className='mt-4'>
                      <p className='text-sm font-semibold text-foreground'>
                        Warning signs:
                      </p>
                      <ul className='mt-2 space-y-1.5'>
                        {type.signs.map((sign) => (
                          <li
                            key={sign}
                            className='flex items-start gap-2 text-sm text-muted-foreground'
                          >
                            <CheckCircle className='mt-0.5 size-4 shrink-0 text-primary' />
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORM DAMAGE PROCESS */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl text-center'>
              Our Storm Damage Process
            </h2>
            <p className='mx-auto mt-4 max-w-2xl text-center text-muted-foreground'>
              From your first call to the final inspection — here&apos;s exactly
              what happens when you work with Ridge Line after a storm.
            </p>
          </FadeIn>

          <StaggerChildren className='mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            {[
              {
                step: "01",
                title: "Free Inspection",
                text: "We inspect your roof within 24 hours, document all damage with photos and measurements, and provide a detailed report.",
              },
              {
                step: "02",
                title: "Insurance Filing",
                text: "We help you file the claim, provide all required documentation, and schedule the adjuster meeting.",
              },
              {
                step: "03",
                title: "Adjuster Meeting",
                text: "We meet your adjuster on-site, walk the roof together, and ensure every point of damage is accounted for.",
              },
              {
                step: "04",
                title: "Repair & Restore",
                text: "Once approved, our crew completes the repair or replacement. We handle permits, materials, and final cleanup.",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className='text-center'>
                  <div className='mx-auto flex size-16 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10'>
                    <span className='font-heading text-xl font-bold text-primary'>
                      {item.step}
                    </span>
                  </div>
                  <h3 className='mt-4 font-heading text-lg font-semibold'>
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

      {/* BOTTOM CTA */}
      <section className='border-t border-border/40 bg-primary py-16'>
        <div className='mx-auto max-w-4xl px-4 text-center'>
          <FadeIn>
            <CloudRain className='mx-auto size-12 text-primary-foreground/80' />
            <h2 className='mt-4 font-heading text-3xl font-bold text-primary-foreground sm:text-4xl'>
              Don&apos;t wait. Storm damage gets worse with time.
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-primary-foreground/80'>
              Every day you wait, water has another chance to get in. Call us
              now for a free emergency inspection — we answer 24/7 during storm
              season.
            </p>
            <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
              <a
                href={BUSINESS.emergencyPhoneHref}
                className='rounded-md bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90'
              >
                Call {BUSINESS.emergencyPhone}
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
