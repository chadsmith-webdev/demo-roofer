import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Mail,
  MapPin,
  Clock,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BUSINESS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact Ridge Line Roofing | Free Estimates",
  description:
    "Contact Ridge Line Roofing for a free roof inspection or estimate. Call (479) 334-9271 or fill out our form. Serving Fayetteville, Bentonville, Rogers, Springdale, and all of NWA.",
  keywords: [
    "contact Ridge Line Roofing",
    "free roofing estimate NWA",
    "Fayetteville roofer contact",
    "roof inspection Northwest Arkansas",
  ],
};

function ContactForm() {
  "use client";
  // Note: This is a server component form using native HTML form handling.
  // For client-side validation, extract to a separate "use client" component.
  return (
    <form className='space-y-4'>
      <div className='grid gap-4 sm:grid-cols-2'>
        <div>
          <label htmlFor='name' className='mb-1.5 block text-sm font-medium'>
            Full Name *
          </label>
          <input
            type='text'
            id='name'
            name='name'
            required
            placeholder='Your full name'
            className='flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
          />
        </div>
        <div>
          <label htmlFor='email' className='mb-1.5 block text-sm font-medium'>
            Email *
          </label>
          <input
            type='email'
            id='email'
            name='email'
            required
            placeholder='you@example.com'
            className='flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
          />
        </div>
      </div>
      <div className='grid gap-4 sm:grid-cols-2'>
        <div>
          <label htmlFor='phone' className='mb-1.5 block text-sm font-medium'>
            Phone *
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            required
            placeholder='(479) 555-0123'
            className='flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
          />
        </div>
        <div>
          <label htmlFor='address' className='mb-1.5 block text-sm font-medium'>
            Property Address
          </label>
          <input
            type='text'
            id='address'
            name='address'
            placeholder='123 Main St, Fayetteville'
            className='flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
          />
        </div>
      </div>
      <div>
        <label htmlFor='service' className='mb-1.5 block text-sm font-medium'>
          Service Needed
        </label>
        <select
          id='service'
          name='service'
          className='flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
        >
          <option value=''>Select a service…</option>
          <option value='storm-damage'>Storm Damage Repair</option>
          <option value='replacement'>Full Roof Replacement</option>
          <option value='insurance-claim'>Insurance Claim Help</option>
          <option value='inspection'>Free Roof Inspection</option>
          <option value='repair'>General Repair</option>
          <option value='other'>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor='message' className='mb-1.5 block text-sm font-medium'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          rows={4}
          placeholder='Tell us about your roofing needs…'
          className='flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
        />
      </div>
      <Button type='submit' size='lg' className='w-full'>
        Send Message
        <ArrowRight data-icon='inline-end' />
      </Button>
      <p className='text-center text-xs text-muted-foreground'>
        We respond to all inquiries within 1 business day.
      </p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: BUSINESS.url },
              { name: "Contact", url: `${BUSINESS.url}/contact` },
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
              <Phone className='text-primary' data-icon='inline-start' />
              Free Estimates &amp; Inspections
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className='font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl'>
              Let&apos;s Talk About
              <br />
              <span className='text-primary'>Your Roof</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground'>
              Whether you need an emergency repair or a free inspection,
              we&apos;re here to help. Fill out the form or give us a call.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── FORM + INFO ─── */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='grid gap-12 lg:grid-cols-5'>
            {/* Form — takes 3 cols */}
            <FadeIn className='lg:col-span-3'>
              <Card>
                <CardContent className='p-6 sm:p-8'>
                  <h2 className='font-heading text-2xl font-bold'>
                    Request a Free Estimate
                  </h2>
                  <p className='mb-6 mt-2 text-sm text-muted-foreground'>
                    Fill out the form below and we&apos;ll get back to you
                    within 1 business day.
                  </p>
                  <ContactForm />
                </CardContent>
              </Card>
            </FadeIn>

            {/* Contact Info — takes 2 cols */}
            <FadeIn delay={0.2} className='space-y-6 lg:col-span-2'>
              <Card>
                <CardContent className='p-6'>
                  <h3 className='font-heading text-lg font-semibold'>
                    Contact Info
                  </h3>
                  <div className='mt-4 space-y-4'>
                    <div className='flex items-start gap-3'>
                      <MapPin className='mt-0.5 size-5 shrink-0 text-primary' />
                      <div>
                        <p className='text-sm font-medium'>Address</p>
                        <p className='text-sm text-muted-foreground'>
                          {BUSINESS.address.full}
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <Phone className='mt-0.5 size-5 shrink-0 text-primary' />
                      <div>
                        <p className='text-sm font-medium'>Phone</p>
                        <a
                          href={BUSINESS.phoneHref}
                          className='text-sm text-primary hover:underline'
                        >
                          {BUSINESS.phone}
                        </a>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <Mail className='mt-0.5 size-5 shrink-0 text-primary' />
                      <div>
                        <p className='text-sm font-medium'>Email</p>
                        <a
                          href={`mailto:${BUSINESS.email}`}
                          className='text-sm text-primary hover:underline'
                        >
                          {BUSINESS.email}
                        </a>
                      </div>
                    </div>
                    <div className='flex items-start gap-3'>
                      <Clock className='mt-0.5 size-5 shrink-0 text-primary' />
                      <div>
                        <p className='text-sm font-medium'>Hours</p>
                        <div className='space-y-0.5 text-sm text-muted-foreground'>
                          <p>Mon–Fri: {BUSINESS.hours.weekday}</p>
                          <p>Saturday: {BUSINESS.hours.saturday}</p>
                          <p>Sunday: {BUSINESS.hours.sunday}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className='overflow-hidden'>
                <div className='flex aspect-[4/3] flex-col items-center justify-center bg-ridge-gray p-8 text-center'>
                  <MapPin className='size-12 text-primary' />
                  <p className='mt-3 text-sm text-muted-foreground'>
                    Map — {BUSINESS.address.city}, {BUSINESS.address.state}
                  </p>
                </div>
              </Card>

              <div className='text-center text-sm text-muted-foreground'>
                <Link
                  href='/service-areas'
                  className='inline-flex items-center gap-1 text-primary hover:underline'
                >
                  <MapPin className='size-3.5' />
                  View all service areas
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── EMERGENCY BANNER ─── */}
      <section className='border-y border-border/40 bg-primary/10 py-12'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <div className='flex flex-col items-center gap-6 text-center md:flex-row md:text-left'>
              <div className='inline-flex rounded-lg bg-primary/20 p-4'>
                <AlertTriangle className='size-8 text-primary' />
              </div>
              <div className='flex-1'>
                <h2 className='font-heading text-2xl font-bold'>
                  Storm Damage Emergency?
                </h2>
                <p className='mt-1 text-muted-foreground'>
                  We offer 24/7 emergency storm response with same-day tarping.
                  Don&apos;t wait — call our emergency line now.
                </p>
              </div>
              <div className='flex flex-col gap-2 sm:flex-row'>
                <Button size='lg' asChild>
                  <a href={BUSINESS.emergencyPhoneHref}>
                    <Zap data-icon='inline-start' />
                    {BUSINESS.emergencyPhone}
                  </a>
                </Button>
                <Button size='lg' variant='outline' asChild>
                  <Link href='/storm-damage'>
                    Learn More
                    <ArrowRight data-icon='inline-end' />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className='bg-gradient-to-b from-ridge-darker to-background py-20'>
        <div className='mx-auto max-w-3xl px-4 text-center'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
              Prefer to talk to a real person?
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-lg text-muted-foreground'>
              Our team is available Monday through Saturday. Give us a call and
              we&apos;ll get you on the schedule.
            </p>
            <div className='mt-8'>
              <a
                href={BUSINESS.phoneHref}
                className='flex items-center justify-center gap-2 text-2xl font-bold text-primary transition-colors hover:text-ridge-red-light'
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
