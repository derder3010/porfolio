import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duy Tran | Fullstack Developer",
  description:
    "Personal portfolio of Duy Tran, a Fullstack Developer specializing in modern web applications with React, Next.js, and TypeScript.",
  keywords: [
    "fullstack developer",
    "web developer",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "node.js",
    "portfolio",
    "software engineer",
    "frontend developer",
    "backend developer",
    "responsive design",
    "web applications",
  ],
  authors: [{ name: "Duy Tran", url: "https://duytran.blog" }],
  creator: "Duy Tran",
  publisher: "Duy Tran",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://duytran.blog"), // Replace with your actual domain
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://duytran.blog",
    title: "Duy Tran | Fullstack Developer",
    description:
      "Personal portfolio of Duy Tran, a Fullstack Developer specializing in modern web applications.",
    siteName: "Duy Tran Portfolio",
    images: [
      {
        url: "https://duytran.blog/og-image.jpg", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "Duy Tran - Fullstack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duy Tran | Fullstack Developer",
    description:
      "Personal portfolio of Duy Tran, a Fullstack Developer specializing in modern web applications.",
    creator: "@duytrander", // Replace with your actual Twitter handle
    images: ["https://duytran.blog/twitter-image.jpg"], // Replace with your actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual verification code
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
