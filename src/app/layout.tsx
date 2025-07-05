import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConnectionStatus from "@/components/ConnectionStatus/ConnectionStatus";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "H Portfolio",
  description:
    "As a Front-end Developer, I have a strong foundation in front-end development and a passion for creating exceptional user experiences. I am committed to continuous improvement and eager to contribute to a dynamic team and make a positive impact in the world of web development.",
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
        <Toaster />
        <ConnectionStatus />
        {children}
      </body>
    </html>
  );
}
