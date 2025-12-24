import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gabriel Gebremedhn",
  url: "https://geb-8.github.io/",
  jobTitle: "Electrical Engineering Student",
  worksFor: {
    "@type": "Organization",
    name: "University of Alberta",
  },
  description:
    "Gabriel Gebremedhin is a third-year Electrical Engineering student specializing in embedded systems, firmware development, and hardware-software integration.",
};

export const metadata: Metadata = {
  title: "Gabriel Gebremedhn | Electrical Engineering Portfolio",
  description:
    "Portfolio of Gabriel Gebremedhn — Electrical Engineering student specializing in embedded systems, firmware development, and hardware-software integration.",
  keywords: [
    "Gabriel Gebremedhn",
    "Electrical Engineering Portfolio",
    "Embedded Systems",
    "Firmware",
    "Microcontrollers",
    "ATmega",
    "ARM",
    "University of Alberta",
  ],
  metadataBase: new URL("https://geb-8.github.io/"),
  alternates: {
    canonical: "https://geb-8.github.io/",
  },
  openGraph: {
    type: "website",
    url: "https://geb-8.github.io/",
    title: "Gabriel Gebremedhn | Electrical Engineering Portfolio",
    description:
      "Portfolio of Gabriel Gebremedhn — Electrical Engineering student specializing in embedded systems, firmware development, and hardware-software integration.",
    siteName: "Gabriel Gebremedhn",
    locale: "en_CA",
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Gabriel Portfolio",
  },
  icons: {
    icon: [],
    apple: [],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased grid-background`}
      >
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
