"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top bar */}
      <div className='bg-ridge-darker border-b border-border/40'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm'>
          <div className='flex items-center gap-4'>
            <span className='flex items-center gap-1.5 text-muted-foreground'>
              <Shield className='text-primary' />
              {BUSINESS.license}
            </span>
            <span className='hidden items-center gap-1.5 text-muted-foreground sm:flex'>
              <Clock className='text-primary' />
              {BUSINESS.hours.emergency}
            </span>
          </div>
          <a
            href={BUSINESS.phoneHref}
            className='flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-ridge-red-light'
          >
            <Phone />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header className='sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2'>
            <div className='flex size-10 items-center justify-center rounded-md bg-primary'>
              <span className='text-lg font-black text-primary-foreground'>
                R
              </span>
            </div>
            <div className='flex flex-col leading-none'>
              <span className='text-lg font-bold tracking-tight text-foreground'>
                Ridge Line
              </span>
              <span className='text-xs font-medium uppercase tracking-widest text-muted-foreground'>
                Roofing
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className='hidden items-center gap-1 lg:flex'>
            {NAV_LINKS.map((link) =>
              "children" in link ? (
                <div
                  key={link.label}
                  className='relative'
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className='flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'>
                    {link.label}
                    <ChevronDown
                      className='transition-transform duration-200'
                      style={{
                        transform:
                          openDropdown === link.label
                            ? "rotate(180deg)"
                            : "rotate(0)",
                      }}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className='absolute left-0 top-full mt-1 w-56 rounded-lg border border-border bg-card p-2 shadow-xl'
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className='block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground'
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className='rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* CTA + mobile toggle */}
          <div className='flex items-center gap-3'>
            <Button asChild className='hidden sm:inline-flex'>
              <Link href='/contact'>Free Estimate</Link>
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className='rounded-md p-2 text-foreground lg:hidden'
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='overflow-hidden border-t border-border/40 lg:hidden'
            >
              <nav className='flex flex-col gap-1 px-4 py-4'>
                {NAV_LINKS.map((link) =>
                  "children" in link ? (
                    <div key={link.label}>
                      <span className='block px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground'>
                        {link.label}
                      </span>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className='block rounded-md px-6 py-2 text-sm text-foreground transition-colors hover:bg-secondary'
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className='block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary'
                    >
                      {link.label}
                    </Link>
                  ),
                )}
                <Button asChild className='mt-3'>
                  <Link href='/contact'>Get a Free Estimate</Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
