const SITE_URL = "https://kepthomemaintenance.com";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "KEPT",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon-96x96.png`,
      },
      description:
        "KEPT is a subscription-based home maintenance service built by design-build professionals. Preventative care, service coordination, and long-term property planning — all in one trusted system.",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "KEPT",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "KEPT Home Maintenance",
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: "Home Maintenance",
      description:
        "Builder-backed home maintenance covering essential repairs, seasonal upkeep, enhancement projects, and historic preservation — coordinated through the KEPT app.",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "KEPT Membership Plans",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Standard Membership",
            description:
              "On-demand repairs, vendor coordination, quality assurance, and access to vetted licensed and insured vendors.",
            price: "99",
            priceCurrency: "USD",
            eligibleDuration: {
              "@type": "QuantitativeValue",
              value: 1,
              unitCode: "MON",
            },
          },
          {
            "@type": "Offer",
            name: "Maintenance Membership",
            description:
              "Everything in Standard plus recurring maintenance, a modern service management platform, and a personalized maintenance plan.",
            price: "249",
            priceCurrency: "USD",
            eligibleDuration: {
              "@type": "QuantitativeValue",
              value: 1,
              unitCode: "MON",
            },
          },
        ],
      },
    },
    {
      "@type": "MobileApplication",
      name: "KEPT App",
      operatingSystem: "iOS, Android",
      applicationCategory: "UtilitiesApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
