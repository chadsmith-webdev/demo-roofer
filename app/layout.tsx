import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BUSINESS } from "@/lib/constants";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: `${BUSINESS.name} | Trusted Roofing Contractor in Northwest Arkansas`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Ridge Line Roofing — GAF Master Elite® roofing contractor serving Fayetteville, Bentonville, Rogers, Springdale, and all of NWA since 2011. Storm damage repair, full replacements, insurance claims. Call (479) 334-9271.",
  keywords: [
    "roofing contractor Fayetteville AR",
    "storm damage roof repair NWA",
    "roof replacement Northwest Arkansas",
    "hail damage roofing",
    "insurance claim roofer",
    "GAF Master Elite contractor Arkansas",
    "Ridge Line Roofing",
  ],
  authors: [{ name: BUSINESS.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Trusted Roofing Contractor in Northwest Arkansas`,
    description:
      "GAF Master Elite® roofing contractor serving all of NWA since 2011. Storm damage, replacements, insurance claims.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | NWA Roofing`,
    description:
      "Trusted roofing contractor for Fayetteville, Bentonville, Rogers & all of Northwest Arkansas.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: BUSINESS.url },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${spaceGrotesk.variable} dark h-full antialiased`}
    >
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema(BUSINESS.url)),
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
      </head>
      <body className='min-h-full flex flex-col'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
