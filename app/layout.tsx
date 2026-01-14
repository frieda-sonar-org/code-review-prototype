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
  title: "SonarQube Cloud",
  description: "Code Review Platform",
  icons: {
    icon: [
      { url: '/favico.png' },
      { url: '/favico.png', sizes: '32x32', type: 'image/png' },
      { url: '/favico.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favico.png',
    apple: '/favico.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
