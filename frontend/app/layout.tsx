import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { ToastProvider } from "@/components/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codiq Solutions | Premium Web & Mobile App Development Agency",
  description:
    "Codiq Solutions is a leading software development agency specializing in next-gen web platforms, mobile applications, and AI-powered systems. Based in India, serving clients worldwide.",
  keywords: [
    "Software Development Company",
    "Custom Software Development",
    "Web Development Agency",
    "Mobile App Development",
    "AI Solutions",
    "Digital Marketing Services",
    "Codiq Solutions",
    "Full Stack Development",
    "Next.js Development",
    "UI/UX Design",
  ],
  authors: [{ name: "Codiq Solutions" }],
  creator: "Codiq Solutions",
  publisher: "Codiq Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://codiqsolutions.com"), // Replace with actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Codiq Solutions | Premium Web & Mobile App Development",
    description: "Building high-performance digital products that scale.",
    url: "https://codiqsolutions.com",
    siteName: "Codiq Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codiq Solutions | Premium Web & Mobile App Development",
    description: "Building high-performance digital products that scale.",
    creator: "@codiqsolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Codiq Solutions",
  image: "https://codiqsolutions.com/logo.png", // Replace with actual logo URL
  "@id": "https://codiqsolutions.com",
  url: "https://codiqsolutions.com",
  telephone: "+91-XXXXXXXXXX", // Replace with actual phone
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address",
    addressLocality: "Your City",
    addressRegion: "State",
    postalCode: "XXXXXX",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 0,
    longitude: 0,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://facebook.com/codiqsolutions",
    "https://twitter.com/codiqsolutions",
    "https://linkedin.com/company/codiqsolutions",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <ToastProvider>
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}

