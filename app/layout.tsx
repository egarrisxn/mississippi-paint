import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mississippi Paint",
  description: "MS Paint with Nextjs.",
  applicationName: "Mississippi Paint",
  creator: "https://egxo.dev",
  referrer: "origin-when-cross-origin",
  keywords: ["typesctipt", "nextjs", "react", "tailwindcss", "shadcnui", "vercel"],
  openGraph: {
    title: "Mississippi Paint",
    description: "MS Paint with Nextjs.",
    url: "https://mississippi-paint.vercel.app",
    siteName: "Mississippi Paint",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mississippi Paint",
    description: "MS Paint with Nextjs.",
    creator: "@eg__xo",
    site: "@eg__xo",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Mississippi Paint" />
      </head>
      <body>{children}</body>
    </html>
  );
}
