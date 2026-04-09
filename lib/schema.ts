import { BUSINESS } from "./constants";

export function localBusinessSchema(pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${BUSINESS.url}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description:
      "Ridge Line Roofing provides expert residential roofing services across Northwest Arkansas. Specializing in storm damage repair, full roof replacements, and insurance claim assistance. GAF Master Elite® Contractor serving Fayetteville, Bentonville, Rogers, Springdale, and surrounding NWA communities since 2011.",
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: "2011",
    image: `${BUSINESS.url}/images/ridge-line-roofing-team.jpg`,
    logo: `${BUSINESS.url}/images/ridge-line-logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagram,
      BUSINESS.social.google,
      BUSINESS.social.yelp,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Storm Damage Roof Repair",
            description:
              "Emergency and scheduled storm damage roof repairs for hail, wind, and tornado damage across Northwest Arkansas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Roof Replacement",
            description:
              "Complete residential roof replacement with premium shingles, including GAF Timberline HDZ and Owens Corning Duration series.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Insurance Claim Assistance",
            description:
              "Full-service insurance claim support — from documentation and adjuster meetings to approved repairs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Inspection",
            description:
              "Comprehensive 21-point roof inspections for homebuyers, storm damage assessment, and annual maintenance.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "580",
      reviewCount: "412",
    },
    ...(pageUrl ? { mainEntityOfPage: pageUrl } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS.url}/#website`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BUSINESS.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceAreaSchema(cityName: string, countyName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${BUSINESS.url}/#organization`,
    name: `${BUSINESS.name} — ${cityName}, AR`,
    description: `Professional roofing contractor serving ${cityName}, ${countyName} County, AR. Storm damage repair, full roof replacements, and insurance claim assistance. GAF Master Elite® Contractor.`,
    url: `${BUSINESS.url}/service-areas/${cityName.toLowerCase().replace(/\s+/g, "-")}`,
    telephone: BUSINESS.phone,
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${countyName} County, Arkansas`,
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
  };
}

export function reviewSchema(
  reviews: Array<{
    name: string;
    rating: number;
    text: string;
    date: string;
  }>,
) {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewBody: review.text,
    datePublished: review.date,
    itemReviewed: {
      "@type": "RoofingContractor",
      name: BUSINESS.name,
    },
  }));
}
