import type { Metadata } from "next";
import "./globals.css";


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
        <title>Amdadul Haque | Full Stack Engineer</title>
      </head>
      <body
        className={`bg-black text-white-c7 font-body`}
      >
        {children}
      </body>
    </html>
  );
}
