import Link from "next/link";
import {
  Shield,
  Award,
  Clock,
  Phone,
  ArrowRight,
  Star,
  CheckCircle,
  MapPin,
  Zap,
  Home,
  FileText,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BUSINESS, SERVICE_AREAS, TESTIMONIALS } from "@/lib/constants";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  CountUp,
  ScaleOnHover,
} from "@/components/motion";

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className='relative overflow-hidden border-b border-border/40'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--ridge-red)_0%,_transparent_50%)] opacity-[0.07]' />
        <div className='absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,var(--background))]' />

        <div className='relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:pt-24 lg:pt-32'>
          <div className='grid items-center gap-12 lg:grid-cols-2'>
            <div>
              <FadeIn>
                <Badge variant='secondary' className='mb-6'>
                  <Shield className='text-primary' data-icon='inline-start' />
                  GAF Master Elite® Contractor — Top 2% Nationwide
                </Badge>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className='font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl'>
                  Northwest Arkansas&apos;
                  <br />
                  <span className='text-primary'>Most Trusted</span> Roofer
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className='mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground'>
                  Whether a storm just tore through your neighborhood or
                  you&apos;ve been planning a replacement for months — Ridge
                  Line Roofing delivers the same thing: expert craftsmanship
                  backed by a 50-year warranty.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                  <Button size='lg' asChild>
                    <Link href='/storm-damage'>
                      <Zap data-icon='inline-start' />
                      Storm Damage? Get Help Now
                    </Link>
                  </Button>
                  <Button size='lg' variant='outline' asChild>
                    <Link href='/contact'>
                      Schedule Free Inspection
                      <ArrowRight data-icon='inline-end' />
                    </Link>
                  </Button>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className='mt-8 flex items-center gap-4 text-sm text-muted-foreground'>
                  <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className='size-4 fill-primary text-primary'
                      />
                    ))}
                  </div>
                  <span>
                    <strong className='text-foreground'>4.9/5</strong> from{" "}
                    {BUSINESS.stats.fiveStarReviews} reviews
                  </span>
                </div>
              </FadeIn>
            </div>

            <FadeIn direction='right' delay={0.2}>
              <div className='relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/40 bg-ridge-gray'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent' />
                <div className='flex h-full flex-col items-center justify-center gap-4 p-8 text-center'>
                  <Home className='size-16 text-primary' />
                  <p className='text-sm text-muted-foreground'>
                    Hero image — dramatic NWA roofline at dusk
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className='border-b border-border/40 bg-ridge-darker py-8'>
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

      {/* ─── TWO-PATH CTA ─── */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <div className='text-center'>
              <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
                How can we help you?
              </h2>
              <p className='mx-auto mt-4 max-w-2xl text-muted-foreground'>
                Whether you need emergency storm repairs or you&apos;re ready
                for a planned upgrade, we&apos;ve got you covered.
              </p>
            </div>
          </FadeIn>

          <div className='mt-12 grid gap-6 md:grid-cols-2'>
            <FadeIn delay={0.1}>
              <ScaleOnHover>
                <Link href='/storm-damage' className='group block'>
                  <Card className='relative overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 to-transparent transition-colors hover:border-primary/60'>
                    <CardContent className='p-8'>
                      <div className='mb-4 inline-flex rounded-lg bg-primary/20 p-3'>
                        <Zap className='size-6 text-primary' />
                      </div>
                      <h3 className='font-heading text-2xl font-bold'>
                        My Roof Was Just Damaged
                      </h3>
                      <p className='mt-3 text-muted-foreground'>
                        Hail, wind, fallen trees — we respond within 24 hours.
                        Emergency tarping available. We handle your insurance
                        claim from start to finish.
                      </p>
                      <div className='mt-6 flex items-center gap-2 text-sm font-semibold text-primary'>
                        Get Emergency Help
                        <ArrowRight className='transition-transform group-hover:translate-x-1' />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScaleOnHover>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ScaleOnHover>
                <Link href='/contact' className='group block'>
                  <Card className='relative overflow-hidden transition-colors hover:border-foreground/20'>
                    <CardContent className='p-8'>
                      <div className='mb-4 inline-flex rounded-lg bg-secondary p-3'>
                        <Home className='size-6 text-foreground' />
                      </div>
                      <h3 className='font-heading text-2xl font-bold'>
                        I&apos;m Planning a Replacement
                      </h3>
                      <p className='mt-3 text-muted-foreground'>
                        Free 21-point inspection. Multiple shingle options.
                        Flexible financing with payments as low as $89/month. No
                        pressure — ever.
                      </p>
                      <div className='mt-6 flex items-center gap-2 text-sm font-semibold text-foreground'>
                        Schedule Free Inspection
                        <ArrowRight className='transition-transform group-hover:translate-x-1' />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScaleOnHover>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className='border-y border-border/40 bg-ridge-darker py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <div className='text-center'>
              <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
                Our Roofing Services
              </h2>
              <p className='mx-auto mt-4 max-w-2xl text-muted-foreground'>
                Comprehensive residential roofing — from emergency repairs to
                full system replacements with industry-leading materials.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {[
              {
                icon: Zap,
                title: "Storm Damage Repair",
                description:
                  "24-hour emergency response. Hail, wind, and tornado damage. Tarping and temporary repairs.",
                href: "/storm-damage",
              },
              {
                icon: Home,
                title: "Roof Replacement",
                description:
                  "Full system tear-off and replacement. GAF Timberline HDZ, Owens Corning Duration, and more.",
                href: "/services/residential",
              },
              {
                icon: FileText,
                title: "Insurance Claims",
                description:
                  "We handle the paperwork, meet with adjusters, and ensure your claim covers the full repair.",
                href: "/insurance-claims",
              },
              {
                icon: DollarSign,
                title: "Financing Options",
                description:
                  "0% financing available. Monthly payments from $89. No money down on approved credit.",
                href: "/financing",
              },
            ].map((service) => (
              <StaggerItem key={service.title}>
                <ScaleOnHover>
                  <Link href={service.href} className='group block h-full'>
                    <Card className='h-full transition-colors hover:border-primary/30'>
                      <CardContent className='p-6'>
                        <service.icon className='size-8 text-primary' />
                        <h3 className='mt-4 font-heading text-lg font-semibold'>
                          {service.title}
                        </h3>
                        <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                          {service.description}
                        </p>
                        <span className='mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary'>
                          Learn More
                          <ArrowRight className='transition-transform group-hover:translate-x-1' />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── WHY RIDGE LINE ─── */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <div className='grid items-center gap-12 lg:grid-cols-2'>
            <FadeIn direction='left'>
              <div>
                <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
                  Why NWA homeowners choose Ridge Line
                </h2>
                <p className='mt-4 text-muted-foreground'>
                  We&apos;re not the cheapest roofer in town. But when it&apos;s
                  your home on the line, you want the contractor who shows up on
                  time, does the work right, and stands behind it for decades.
                </p>
                <ul className='mt-8 space-y-4'>
                  {[
                    "GAF Master Elite® — top 2% of roofers nationwide",
                    "Full manufacturer warranties up to 50 years",
                    "Local, family-owned since 2011",
                    "Licensed, bonded, and fully insured",
                    "24/7 emergency storm response",
                    "Free 21-point roof inspections",
                  ].map((item) => (
                    <li
                      key={item}
                      className='flex items-start gap-3 text-sm text-muted-foreground'
                    >
                      <CheckCircle className='mt-0.5 size-5 shrink-0 text-primary' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction='right' delay={0.1}>
              <div className='grid grid-cols-2 gap-4'>
                {BUSINESS.certifications.slice(0, 4).map((cert) => (
                  <Card key={cert}>
                    <CardContent className='flex flex-col items-center justify-center p-6 text-center'>
                      <Award className='size-10 text-primary' />
                      <p className='mt-3 text-xs font-medium leading-tight text-muted-foreground'>
                        {cert}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className='border-y border-border/40 bg-ridge-darker py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <div className='text-center'>
              <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
                What our customers say
              </h2>
              <p className='mx-auto mt-4 max-w-2xl text-muted-foreground'>
                Real reviews from NWA homeowners. No cherry-picking — these are
                the words our neighbors use to describe working with us.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {TESTIMONIALS.slice(0, 3).map((review) => (
              <StaggerItem key={review.name}>
                <Card className='h-full'>
                  <CardContent className='p-6'>
                    <div className='flex gap-0.5'>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className='size-4 fill-primary text-primary'
                        />
                      ))}
                    </div>
                    <p className='mt-4 text-sm leading-relaxed text-muted-foreground'>
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className='mt-4 border-t border-border pt-4'>
                      <p className='text-sm font-semibold'>{review.name}</p>
                      <p className='text-xs text-muted-foreground'>
                        {review.location} — {review.service}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.3}>
            <div className='mt-8 text-center'>
              <Button variant='outline' asChild>
                <Link href='/testimonials'>
                  Read All Reviews <ArrowRight data-icon='inline-end' />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-4'>
          <FadeIn>
            <div className='text-center'>
              <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
                Serving All of Northwest Arkansas
              </h2>
              <p className='mx-auto mt-4 max-w-2xl text-muted-foreground'>
                From Bella Vista to West Fork, Siloam Springs to Elkins — if
                you&apos;re in NWA, we&apos;re your roofer.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className='mt-12 flex flex-wrap justify-center gap-2'>
            {SERVICE_AREAS.map((area) => (
              <StaggerItem key={area.slug}>
                <Link href={`/service-areas/${area.slug}`}>
                  <Badge
                    variant='secondary'
                    className='cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground'
                  >
                    <MapPin data-icon='inline-start' />
                    {area.name}
                  </Badge>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className='border-t border-border/40 bg-gradient-to-b from-ridge-darker to-background py-20'>
        <div className='mx-auto max-w-3xl px-4 text-center'>
          <FadeIn>
            <h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
              Your roof protects everything underneath it.
            </h2>
            <p className='mx-auto mt-4 max-w-xl text-lg text-muted-foreground'>
              Don&apos;t wait for the next storm to find out there&apos;s a
              problem. Schedule your free 21-point inspection today.
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
