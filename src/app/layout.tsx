import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'Papa Louie\'s Pizza | Authentic Wood-Fired Pies',
  description: 'Enjoy the best wood-fired pizza in the neighborhood. Fresh ingredients, family recipes, and fast delivery at Papa Louie\'s.',
  openGraph: {
    "title": "Papa Louie's Pizza",
    "description": "Authentic wood-fired pizza.",
    "siteName": "Papa Louie's Pizza",
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image"
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
