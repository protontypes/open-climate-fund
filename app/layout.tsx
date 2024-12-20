import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenClimate.fund",
  description: "Building an open science funding revolution for open source climate action",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="OCF" />
        <link rel="manifest" href="site.webmanifest" />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="0cbaaa61-be76-4338-8f17-8e9db91a1a85"
        />
                <meta property="og:title" content="OpenClimate.fund" />
        <meta
          property="og:description"
          content="Building an open science funding revolution for open source climate action."
        />
        <meta
          property="og:image"
          content="preview_image.jpeg"
        />
        <meta property="og:url" content="https://openclimate.fund" />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}


