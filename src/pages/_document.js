import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Udaan Information Services LLP",
    "url": "https://www.udaanllp.com",
    "logo": "https://www.udaanllp.com/logo.jpeg",
    "description": "Offshore accounting talent and technology-driven finance solutions for global businesses. 100+ clients served since 2016.",
    "foundingDate": "2016",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": 50 },
    "areaServed": ["UK", "US", "Australia", "India", "Canada"],
    "serviceType": [
      "Offshore Accounting",
      "Bookkeeping Outsourcing",
      "Payroll Outsourcing",
      "Tax Compliance",
      "CFO Advisory"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@udaanllp.com",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/udaan-information-services"
    ]
  };

  return (
    <Html lang="en">
      <Head>
        {/* ❌ REMOVED <title> - fixes warning */}
        
        {/* Primary Meta */}
        <meta name="description" content="Scale your finance team with offshore talent and tech-driven accounting. 50% cost savings, full compliance. Trusted by 100+ clients since 2016. Book a free consultation." />
        <meta name="keywords" content="offshore accounting, finance outsourcing India, accounting talent, QuickBooks Xero experts, bookkeeping outsourcing, payroll outsourcing, tax compliance" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Udaan Information Services LLP" />
        <link rel="canonical" href="https://www.udaanllp.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.udaanllp.com" />
        <meta property="og:title" content="Udaan: Offshore Accounting Talent for Global Scale" />
        <meta property="og:description" content="Scale your finance team with offshore talent. 50% cost savings, full compliance. 100+ global clients since 2016." />
        <meta property="og:image" content="https://www.udaanllp.com/og-image.jpg" />
        <meta property="og:site_name" content="Udaan Information Services LLP" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Udaan: Offshore Accounting Talent for Global Scale" />
        <meta name="twitter:description" content="50% cost savings with offshore accounting talent. 100+ clients. Book free consult." />
        <meta name="twitter:image" content="https://www.udaanllp.com/og-image.jpg" />

        {/* Favicon & PWA */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a8a" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
