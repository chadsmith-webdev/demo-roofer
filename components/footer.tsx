import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Shield, ExternalLink } from "lucide-react";
import { BUSINESS, SERVICE_AREAS, NAV_LINKS } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const mainAreas = SERVICE_AREAS.slice(0, 8);

  return (
    <footer className='border-t border-border/40 bg-ridge-darker'>
      {/* CTA banner */}
      <div className='bg-primary'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row'>
          <div>
            <h2 className='text-2xl font-bold text-primary-foreground'>
              Ready to protect your home?
            </h2>
            <p className='text-primary-foreground/80'>
              Free inspections. Honest estimates. No pressure.
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <Link
              href='/contact'
              className='rounded-md bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90'
            >
              Get Your Free Estimate
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className='rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10'
            >
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className='mx-auto max-w-7xl px-4 py-16'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
          {/* Company info */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <div className='flex size-9 items-center justify-center rounded-md bg-primary'>
                <span className='text-base font-black text-primary-foreground'>
                  R
                </span>
              </div>
              <div className='flex flex-col leading-none'>
                <span className='font-bold text-foreground'>Ridge Line</span>
                <span className='text-xs font-medium uppercase tracking-widest text-muted-foreground'>
                  Roofing
                </span>
              </div>
            </div>
            <p className='text-sm leading-relaxed text-muted-foreground'>
              Family-owned roofing contractor serving Northwest Arkansas since
              2011. GAF Master Elite® Certified with over 2,800 roofs completed.
            </p>
            <div className='flex items-center gap-3'>
              <a
                href={BUSINESS.social.facebook}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
                className='rounded-md bg-secondary p-2 text-muted-foreground transition-colors hover:text-foreground'
              >
                <ExternalLink />
              </a>
              <a
                href={BUSINESS.social.instagram}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
                className='rounded-md bg-secondary p-2 text-muted-foreground transition-colors hover:text-foreground'
              >
                <ExternalLink />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className='mb-4 text-sm font-semibold uppercase tracking-widest text-foreground'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              {NAV_LINKS.filter((l) => !("children" in l)).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href='/storm-damage'
                  className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                >
                  Storm Damage
                </Link>
              </li>
              <li>
                <Link
                  href='/insurance-claims'
                  className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                >
                  Insurance Claims
                </Link>
              </li>
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className='mb-4 text-sm font-semibold uppercase tracking-widest text-foreground'>
              Service Areas
            </h3>
            <ul className='space-y-2'>
              {mainAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                  >
                    {area.name}, AR
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href='/service-areas'
                  className='text-sm font-medium text-primary transition-colors hover:text-ridge-red-light'
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className='mb-4 text-sm font-semibold uppercase tracking-widest text-foreground'>
              Contact Us
            </h3>
            <ul className='space-y-3'>
              <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                <MapPin className='mt-0.5 shrink-0 text-primary' />
                {BUSINESS.address.full}
              </li>
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className='flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground'
                >
                  <Phone className='shrink-0 text-primary' />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className='flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground'
                >
                  <Mail className='shrink-0 text-primary' />
                  {BUSINESS.email}
                </a>
              </li>
              <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                <Clock className='mt-0.5 shrink-0 text-primary' />
                <div>
                  <p>Mon–Fri: {BUSINESS.hours.weekday}</p>
                  <p>Sat: {BUSINESS.hours.saturday}</p>
                  <p>Sun: {BUSINESS.hours.sunday}</p>
                </div>
              </li>
              <li className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Shield className='shrink-0 text-primary' />
                {BUSINESS.license}
              </li>
            </ul>
          </div>
        </div>

        <Separator className='my-8' />

        <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
          <p className='text-xs text-muted-foreground'>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
            <span className='mx-1'>·</span>
            Built by{" "}
            <a
              href='https://localsearchally.com'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex gap-0 hover:underline'
            >
              <span className='text-white'>Local&nbsp;Search</span>
              <span style={{ color: "#7bafd4" }}>&nbsp;Ally</span>
            </a>
          </p>
          <div className='flex gap-4 text-xs text-muted-foreground'>
            <Link
              href='/privacy'
              className='transition-colors hover:text-foreground'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms'
              className='transition-colors hover:text-foreground'
            >
              Terms of Service
            </Link>
            <Link
              href='/sitemap.xml'
              className='transition-colors hover:text-foreground'
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
