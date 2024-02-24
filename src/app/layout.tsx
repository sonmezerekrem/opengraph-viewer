import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";

const wix = Wix_Madefor_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Graph Viewer",
  description: "View Open Graph Metadata of URL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={wix.className}>{children}</body>
    </html>
  );
}
