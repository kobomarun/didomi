import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Didomi Consortium - Empowering Education, Technology, Agriculture & Safety",
  description: "Four sectors. One vision. Endless possibilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
