import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mississippi Paint",
  description: "MS Paint with Nextjs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
