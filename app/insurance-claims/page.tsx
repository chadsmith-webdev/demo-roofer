import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  XCircle,
  Shield,
  FileText,
  ClipboardCheck,
  Users,
  Hammer,
  ThumbsUp,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BUSINESS } from "@/lib/constants";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";

const INSURANCE_FAQS = [
  {
    question: "Will filing a claim raise my insurance premium?",
    answer:
      "In Arkansas, insurers cannot raise your premium solely because you filed a weather-related claim. Hail and wind are acts of nature — your policy is designed to cover them. If you have legitimate storm damage, filing a claim is the right thing to do.",
  },
  {
    question: "How long do I have to file an insurance claim after a storm?",
    answer:
      "Most Arkansas homeowner policies allow one year from the date of the storm to file a claim. However, we strongly recommend filing within 30 days. The sooner you file, the easier it is to document damage before it worsens.",
  },
  {
    question: "Do I have to pay my deductible?",
    answer:
      "Yes — your deductible is your financial responsibility under your policy. Any contractor who offers to waive or cover your deductible is violating Arkansas law. Ridge Line will never ask you to participate in deductible fraud.",
  },
  {
    question:
      "Can I choose my own roofing contractor, or does my insurance company pick one?",
    answer:
      "You have the legal right to choose your own contractor. Insurance companies may recommend preferred vendors, but you are never obligated to use them. Choose a contractor who works for you — not the insurance company.",
  },
  {
    question: "What if my claim is denied or underpaid?",
    answer:
      "If your claim is denied or the payout doesn't cover the full repair, we can help you file a supplement with additional documentation. We've successfully overturned hundreds of underpaid claims by providing detailed damage reports and meeting with adjusters on-site.",
  },
  {
    question: "How does Ridge Line help with the insurance process?",
    answer:
      "We handle everything except filing the initial claim (which you must do). We provide full damage documentation, meet your adjuster on the roof, submit supplement requests if needed, and coordinate the entire repair once approved. You don't have to manage anything.",
  },
];

export const metadata: Metadata = {
  title: "Insurance Claim Roof Repair | We Handle Everything",
  description:
    "Storm damage insurance claim help in Northwest Arkansas. Ridge Line Roofing handles adjuster meetings, documentation, and repairs. GAF Master Elite® Contractor serving Fayetteville, Bentonville, Rogers & NWA.",
  keywords: [
    "insurance claim roof repair NWA",
    "roofing insurance claim help Fayetteville AR",
    "storm damage insurance Northwest Arkansas",
    "roof insurance adjuster meeting",
    "hail damage insurance claim",
  ],
};

export default function InsuranceClaimsPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              {
                name: "Insurance Claims",
                url: `${BUSINESS.url}/insurance-claims`,
              },
            ]),
          ),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(INSURANCE_FAQS)),
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
              <Shield className='text-primary' data-icon='inline-start' />
              Full-Service Insurance Claim Support
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className='font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl'>
              We Handle Your Insurance Claim
              <br />
              <span className='text-primary'>So You Don&apos;t Have To.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className='mt-6 max-w-2xl text-lg text-muted-foreground'>
              Dealing with insurance after storm damage is stressful. Ridge Line
              manages the entire process — from documenting every shingle to
              meeting your adjuster on the roof. We&apos;ve handled over{" "}
              {BUSINESS.stats.roofsCompleted} roofs and know exactly what
              insurance companies need to approve your claim.
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
                  Free Claim Consultation
                  <ArrowRight data-icon='inline-end' />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* HOW YOUR INSURANCE CLAIM WORKS */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight text-center sm:text-4xl'>
              How Your Insurance Claim Works
            </h2>
            <p className='mx-auto mt-4 max-w-2xl text-center text-muted-foreground'>
              We guide you through every step — no guesswork, no runaround.
            </p>
          </FadeIn>

          <StaggerChildren className='mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5'>
            {[
              {
                step: "01",
                icon: FileText,
                title: "File Your Claim",
                text: "Contact your insurance company to open a claim. We can walk you through exactly what to say.",
              },
              {
                step: "02",
                icon: ClipboardCheck,
                title: "We Inspect",
                text: "Our team performs a detailed roof inspection and documents every point of damage with photos and measurements.",
              },
              {
                step: "03",
                icon: Users,
                title: "Meet the Adjuster",
                text: "We meet your insurance adjuster on-site, walk the roof together, and ensure nothing gets missed.",
              },
              {
                step: "04",
                icon: ThumbsUp,
                title: "Claim Approved",
                text: "Once approved, we review the scope of work with you and schedule the repair or replacement.",
              },
              {
                step: "05",
                icon: Hammer,
                title: "Repairs Complete",
                text: "Our crew completes the work, we handle final inspections, and you enjoy a fully restored roof.",
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

      {/* WHAT YOUR POLICY COVERS */}
      <section className='border-y border-border/40 bg-ridge-darker py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
              What Your Homeowner&apos;s Policy Typically Covers
            </h2>
            <p className='mt-4 max-w-2xl text-muted-foreground'>
              Most standard homeowner&apos;s policies cover sudden, accidental
              damage from weather events. Here&apos;s the breakdown.
            </p>
          </FadeIn>

          <div className='mt-12 grid gap-8 lg:grid-cols-2'>
            <FadeIn>
              <Card>
                <CardContent className='p-8'>
                  <div className='flex items-center gap-3'>
                    <CheckCircle className='size-6 text-green-500' />
                    <h3 className='font-heading text-xl font-bold'>
                      Usually Covered
                    </h3>
                  </div>
                  <ul className='mt-6 space-y-3'>
                    {[
                      "Hail damage to shingles, gutters, and vents",
                      "Wind damage — missing, lifted, or creased shingles",
                      "Tornado and severe storm damage",
                      "Fallen trees and large debris impacts",
                      "Water damage from storm-created openings",
                      "Ice dam damage (in applicable policies)",
                      "Lightning strike damage",
                    ].map((item) => (
                      <li
                        key={item}
                        className='flex items-start gap-3 text-sm text-muted-foreground'
                      >
                        <CheckCircle className='mt-0.5 size-4 shrink-0 text-green-500' />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card>
                <CardContent className='p-8'>
                  <div className='flex items-center gap-3'>
                    <XCircle className='size-6 text-destructive' />
                    <h3 className='font-heading text-xl font-bold'>
                      Typically NOT Covered
                    </h3>
                  </div>
                  <ul className='mt-6 space-y-3'>
                    {[
                      "Normal wear and tear over time",
                      "Lack of maintenance or neglect",
                      "Cosmetic-only damage with no functional impact",
                      "Pre-existing damage before the storm event",
                      "Roofs past their expected lifespan (age exclusions)",
                      "Damage from pests, mold, or rot",
                      "Improper prior installation or repairs",
                    ].map((item) => (
                      <li
                        key={item}
                        className='flex items-start gap-3 text-sm text-muted-foreground'
                      >
                        <XCircle className='mt-0.5 size-4 shrink-0 text-destructive' />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MYTHS VS FACTS */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight text-center sm:text-4xl'>
              Insurance Claim Myths vs. Facts
            </h2>
            <p className='mx-auto mt-4 max-w-2xl text-center text-muted-foreground'>
              Don&apos;t let bad advice cost you a new roof. Here&apos;s the
              truth.
            </p>
          </FadeIn>

          <StaggerChildren className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                myth: "Filing a claim will raise my rates.",
                fact: "Arkansas law prohibits insurers from raising premiums solely due to weather-related claims. Your rates are based on regional risk, not individual claims.",
              },
              {
                myth: "My insurance company will send a roofer.",
                fact: "You choose your own contractor — always. Insurance companies may suggest preferred vendors, but you have full control over who repairs your roof.",
              },
              {
                myth: "A good contractor will cover my deductible.",
                fact: "That's insurance fraud in Arkansas. Any contractor who offers to waive your deductible is breaking the law and putting your claim at risk.",
              },
              {
                myth: "If there's no leak, there's no damage.",
                fact: "Hail and wind damage can compromise your roof without causing an immediate leak. Cracked shingles and missing granules lead to failure over time.",
              },
              {
                myth: "I should wait to file until I see a leak.",
                fact: "Waiting allows damage to worsen and can jeopardize your claim. File within 30 days while evidence is fresh and damage is clearly storm-related.",
              },
              {
                myth: "The insurance payout is what the repair costs.",
                fact: "Initial payouts are often underpaid. A supplement with proper documentation can recover the full cost. That's where having an experienced contractor matters.",
              },
            ].map((item) => (
              <StaggerItem key={item.myth}>
                <Card className='h-full'>
                  <CardContent className='p-6'>
                    <div className='flex items-start gap-2'>
                      <AlertTriangle className='mt-0.5 size-5 shrink-0 text-destructive' />
                      <div>
                        <p className='text-sm font-semibold text-destructive'>
                          Myth
                        </p>
                        <p className='mt-1 text-sm text-muted-foreground'>
                          &ldquo;{item.myth}&rdquo;
                        </p>
                      </div>
                    </div>
                    <div className='mt-4 flex items-start gap-2'>
                      <CheckCircle className='mt-0.5 size-5 shrink-0 text-green-500' />
                      <div>
                        <p className='text-sm font-semibold text-green-500'>
                          Fact
                        </p>
                        <p className='mt-1 text-sm text-muted-foreground'>
                          {item.fact}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ */}
      <section className='border-y border-border/40 bg-ridge-darker py-20'>
        <div className='mx-auto max-w-3xl px-4'>
          <FadeIn>
            <div className='flex items-center justify-center gap-2'>
              <HelpCircle className='size-6 text-primary' />
              <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
                Insurance Claim FAQs
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Accordion type='single' collapsible className='mt-10'>
              {INSURANCE_FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className='text-left text-base font-semibold'>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className='text-sm leading-relaxed text-muted-foreground'>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className='border-t border-border/40 bg-primary py-16'>
        <div className='mx-auto max-w-4xl px-4 text-center'>
          <FadeIn>
            <Shield className='mx-auto size-12 text-primary-foreground/80' />
            <h2 className='mt-4 font-heading text-3xl font-bold text-primary-foreground sm:text-4xl'>
              Don&apos;t navigate your insurance claim alone.
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-primary-foreground/80'>
              We&apos;ve helped hundreds of NWA homeowners get their claims
              approved — and their roofs restored. Call us for a free
              consultation.
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
                Schedule a Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
