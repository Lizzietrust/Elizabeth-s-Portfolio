import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Elizabeth Ohida - Frontend Developer Portfolio",
  description:
    "Professional frontend developer specializing in React, Next.js, and TypeScript. Creating exceptional user experiences with modern web technologies.",
  keywords: [
    "frontend developer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "web developer",
    "UI/UX developer",
    "javascript developer",
    "portfolio",
    "elizabeth ohida",
  ],
  authors: [{ name: "Elizabeth Ohida" }],
  creator: "Elizabeth Ohida",
  publisher: "Elizabeth Ohida",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://elizabeth-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Elizabeth Ohida - Frontend Developer Portfolio",
    description:
      "Professional frontend developer specializing in React, Next.js, and TypeScript. Creating exceptional user experiences with modern web technologies.",
    url: "https://elizabeth-portfolio.vercel.app",
    siteName: "Elizabeth Ohida Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elizabeth Ohida - Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elizabeth Ohida - Frontend Developer Portfolio",
    description:
      "Professional frontend developer specializing in React, Next.js, and TypeScript.",
    images: ["/og-image.png"],
    creator: "@elizabeth_ohida",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}
