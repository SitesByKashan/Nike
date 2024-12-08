import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Nike Store",
  description: "Nike E-Commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/Nike.png" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
