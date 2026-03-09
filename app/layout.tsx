import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quantily AI | Digital Intelligence & Solutions",
  description: "Advanced digital solutions: Website Development, Digital Marketing, Automations, AI Marketing, and Social Media Management. Quantily AI transforms brands with bespoke digital experiences.",
  keywords: "digital marketing, web development, AI marketing, automation, social media",
  icons: {
    icon: "/quantily-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
