import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amdadul Haque | Full Stack Engineer",
  description: "Dhaka, Bangladesh based full stack engineer, passionate to build high-end software solutions. Specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: "full stack developer, web developer, react developer, next.js, node.js, bangladesh, dhaka, software engineer",
  authors: [{ name: "Amdadul Haque" }],
  openGraph: {
    title: "Amdadul Haque | Full Stack Engineer",
    description: "Dhaka, Bangladesh based full stack engineer, passionate to build high-end software solutions.",
    url: "https://amdadul-haque.com",
    siteName: "Amdadul Haque Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amdadul Haque | Full Stack Engineer",
    description: "Dhaka, Bangladesh based full stack engineer, passionate to build high-end software solutions.",
    creator: "@amdadul_haque",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className="bg-black text-white font-body antialiased"
        style={{
          fontFamily: "'Manrope', sans-serif",
          "--font-heading": "'Bebas Neue', cursive",
        }}
      >
        {children}
      </body>
    </html>
  );
}
