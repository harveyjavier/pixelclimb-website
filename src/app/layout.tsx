import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const slkscrSans = localFont({
  src: "./fonts/slkscr-webfont.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pixel Climb",
  description: "Hyper casual web3 game powered by Solana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${slkscrSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
