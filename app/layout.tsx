import React from 'react';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Dev Portfolio",
  description: "Portfolio/Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

/* Header/Footer



import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Dev Portfolio",
  description: "Portfolio/Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© 2024 My Portfolio</p>
        </footer>
      </body>
    </html>
  );
}

*/
