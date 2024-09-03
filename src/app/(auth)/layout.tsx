import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "../globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Login | Buy Me a Coffee",
  description: "Customers can support their favourite creators by donating coffees (donations) to them.",
};

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className = "h-full w-full">
      <body>
        <div>
          {children}
        </div>
        </body>
      </html>
  );
}
