import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Calculator,
  FileCheck,
  CreditCard,
  Hammer,
  HelpCircle,
  BadgePercent,
  Clock,
  Wallet,
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

const FINANCING_FAQS = [
  {
    question: "Do I need good credit to qualify for roof financing?",
    answer:
      "We work with multiple lending partners to accommodate a range of credit profiles. While the best rates go to borrowers with good-to-excellent credit, we often find options for homeowners with fair credit as well. We'll walk you through what you qualify for — no obligation.",
  },
  {
    question: "Is there a penalty for paying off my loan early?",
    answer:
      "No. None of our financing partners charge prepayment penalties. You can pay off your balance early without any additional fees, and you'll save on interest by doing so.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Most homeowners receive a decision within minutes of submitting their application. Once approved, we can begin scheduling your roof project right away.",
  },
  {
    question: "Can I finance the full cost of the roof, including labor?",
    answer:
      "Yes. Our financing covers the total project cost — materials, labor, permits, and cleanup. There are no hidden costs or out-of-pocket surprises beyond your approved monthly payment.",
  },
  {
    question: "What's the difference between 0% APR and low-rate financing?",
    answer:
      "Our 0% APR option has no interest for 12 months, but requires full repayment within that period. Low-rate options extend to 60 or 120 months with a small interest charge, keeping your monthly payments much lower over time.",
  },
  {
    question: "Can I combine financing with an insurance claim?",
    answer:
      "Absolutely. If your insurance covers part of the cost, you can finance the remaining balance — including your deductible. We help homeowners combine both options regularly.",
  },
];

const PAYMENT_EXAMPLES = [
  {
    amount: "$8,500",
    twelve: "$708/mo",
    sixty: "$159/mo",
    onetwenty: "$89/mo",
  },
  {
    amount: "$12,000",
    twelve: "$1,000/mo",
    sixty: "$224/mo",
    onetwenty: "$126/mo",
  },
  {
    amount: "$16,500",
    twelve: "$1,375/mo",
    sixty: "$308/mo",
    onetwenty: "$173/mo",
  },
  {
    amount: "$22,000",
    twelve: "$1,833/mo",
    sixty: "$411/mo",
    onetwenty: "$231/mo",
  },
  {
    amount: "$30,000",
    twelve: "$2,500/mo",
    sixty: "$560/mo",
    onetwenty: "$315/mo",
  },
];

export const metadata: Metadata = {
  title: "Roof Financing Options | Payments from $89/mo",
  description:
    "Affordable roof financing in Northwest Arkansas. 0% APR for 12 months, low monthly payments, and fast approval. Ridge Line Roofing makes roof replacement budget-friendly for Fayetteville, Bentonville, Rogers & NWA homeowners.",
  keywords: [
    "roof financing NWA",
    "roofing payment plan Fayetteville AR",
    "affordable roof replacement Northwest Arkansas",
    "0% APR roof financing",
    "monthly payment roof",
  ],
};

export default function FinancingPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              { name: "Financing", url: `${BUSINESS.url}/financing` },
            ]),
          ),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(FINANCING_FAQS)),
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
              <DollarSign className='text-primary' data-icon='inline-start' />
              Flexible Financing Available
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className='font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl'>
              A New Roof Shouldn&apos;t
              <br />
              <span className='text-primary'>Break the Bank.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className='mt-6 max-w-2xl text-lg text-muted-foreground'>
              We partner with top lending providers to offer roof financing that
              fits your budget. From 0% APR plans to extended low-rate options,
              we&apos;ll help you protect your home without financial stress.
              Approval takes minutes.
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
                  Get a Free Quote
                  <ArrowRight data-icon='inline-end' />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FINANCING PLANS */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight text-center sm:text-4xl'>
              Choose Your Payment Plan
            </h2>
            <p className='mx-auto mt-4 max-w-2xl text-center text-muted-foreground'>
              Three flexible options designed around real homeowner budgets.
            </p>
          </FadeIn>

          <StaggerChildren className='mt-12 grid gap-8 lg:grid-cols-3'>
            <StaggerItem>
              <Card className='relative h-full'>
                <CardContent className='p-8'>
                  <BadgePercent className='size-10 text-primary' />
                  <h3 className='mt-4 font-heading text-2xl font-bold'>
                    0% APR
                  </h3>
                  <p className='text-sm font-medium text-primary'>
                    12-Month Plan
                  </p>
                  <p className='mt-4 text-sm leading-relaxed text-muted-foreground'>
                    Pay zero interest when you pay in full within 12 months.
                    Ideal for homeowners who want to avoid any interest charges
                    and can handle higher monthly payments.
                  </p>
                  <ul className='mt-6 space-y-2'>
                    {[
                      "No interest for 12 months",
                      "No prepayment penalty",
                      "Quick approval process",
                      "Best for smaller projects",
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
              <Card className='relative h-full border-primary/50'>
                <div className='absolute -top-3 left-1/2 -translate-x-1/2'>
                  <Badge className='bg-primary text-primary-foreground'>
                    Most Popular
                  </Badge>
                </div>
                <CardContent className='p-8'>
                  <Wallet className='size-10 text-primary' />
                  <h3 className='mt-4 font-heading text-2xl font-bold'>
                    Low Rate
                  </h3>
                  <p className='text-sm font-medium text-primary'>
                    60-Month Plan
                  </p>
                  <p className='mt-4 text-sm leading-relaxed text-muted-foreground'>
                    Affordable monthly payments spread over 5 years with a
                    competitive fixed interest rate. The most popular option for
                    full roof replacements.
                  </p>
                  <ul className='mt-6 space-y-2'>
                    {[
                      "Fixed rate from 6.99% APR",
                      "Predictable monthly payments",
                      "No prepayment penalty",
                      "Best for full replacements",
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
              <Card className='relative h-full'>
                <CardContent className='p-8'>
                  <Clock className='size-10 text-primary' />
                  <h3 className='mt-4 font-heading text-2xl font-bold'>
                    Extended
                  </h3>
                  <p className='text-sm font-medium text-primary'>
                    120-Month Plan
                  </p>
                  <p className='mt-4 text-sm leading-relaxed text-muted-foreground'>
                    The lowest possible monthly payment with a 10-year term.
                    Designed for homeowners who need maximum flexibility in
                    their monthly budget.
                  </p>
                  <ul className='mt-6 space-y-2'>
                    {[
                      "Lowest monthly payments",
                      "Fixed rate from 8.99% APR",
                      "No prepayment penalty",
                      "Best for budget flexibility",
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

      {/* HOW FINANCING WORKS */}
      <section className='border-y border-border/40 bg-ridge-darker py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight text-center sm:text-4xl'>
              How Financing Works
            </h2>
            <p className='mx-auto mt-4 max-w-2xl text-center text-muted-foreground'>
              From application to installation — it&apos;s simpler than you
              think.
            </p>
          </FadeIn>

          <StaggerChildren className='mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            {[
              {
                step: "01",
                icon: Calculator,
                title: "Get Your Quote",
                text: "We inspect your roof and provide a detailed estimate for the work needed. No hidden fees — the quote is the price.",
              },
              {
                step: "02",
                icon: FileCheck,
                title: "Apply in Minutes",
                text: "Fill out a short application. Most homeowners are approved within minutes with no impact on your credit score for pre-qualification.",
              },
              {
                step: "03",
                icon: CreditCard,
                title: "Choose Your Plan",
                text: "Select the payment plan that fits your budget. We'll walk through each option so there are no surprises.",
              },
              {
                step: "04",
                icon: Hammer,
                title: "We Get to Work",
                text: "Once approved, we schedule and complete your roof project. You make your first payment the following month.",
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

      {/* MONTHLY PAYMENT EXAMPLES */}
      <section className='py-20'>
        <div className='mx-auto max-w-4xl px-4'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight text-center sm:text-4xl'>
              Monthly Payment Examples
            </h2>
            <p className='mx-auto mt-4 max-w-2xl text-center text-muted-foreground'>
              Estimated monthly payments based on project size. Actual rates
              depend on credit approval.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className='mt-10 overflow-x-auto'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='border-b border-border'>
                    <th className='px-4 py-3 text-left font-heading font-semibold'>
                      Project Cost
                    </th>
                    <th className='px-4 py-3 text-center font-heading font-semibold'>
                      12-mo (0% APR)
                    </th>
                    <th className='px-4 py-3 text-center font-heading font-semibold'>
                      60-mo (6.99%)
                    </th>
                    <th className='px-4 py-3 text-center font-heading font-semibold'>
                      120-mo (8.99%)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PAYMENT_EXAMPLES.map((row) => (
                    <tr key={row.amount} className='border-b border-border/50'>
                      <td className='px-4 py-3 font-semibold'>{row.amount}</td>
                      <td className='px-4 py-3 text-center text-muted-foreground'>
                        {row.twelve}
                      </td>
                      <td className='px-4 py-3 text-center text-muted-foreground'>
                        {row.sixty}
                      </td>
                      <td className='px-4 py-3 text-center font-semibold text-primary'>
                        {row.onetwenty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className='mt-4 text-xs text-muted-foreground text-center'>
              *Rates and payments shown are estimates for illustration purposes.
              Actual terms depend on credit approval, loan amount, and lender.
              Subject to change.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className='border-y border-border/40 bg-ridge-darker py-20'>
        <div className='mx-auto max-w-3xl px-4'>
          <FadeIn>
            <div className='flex items-center justify-center gap-2'>
              <HelpCircle className='size-6 text-primary' />
              <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
                Financing FAQs
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Accordion type='single' collapsible className='mt-10'>
              {FINANCING_FAQS.map((faq, i) => (
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
            <DollarSign className='mx-auto size-12 text-primary-foreground/80' />
            <h2 className='mt-4 font-heading text-3xl font-bold text-primary-foreground sm:text-4xl'>
              Your new roof is more affordable than you think.
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-primary-foreground/80'>
              Get a free quote and see your financing options today. No
              obligation, no pressure — just honest numbers.
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
                Get a Free Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
