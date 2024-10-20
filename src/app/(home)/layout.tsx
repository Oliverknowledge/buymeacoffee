import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "../globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dashboard | Buy Me A Coffee",
  description: "Dashboard allows creators to manage their profile",
}

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className = "bg-[#f0f2f5] h-full w-full overflow-hidden">
      <body className = "h-full w-full">
        
          {children}
        
      </body>
      </html>
  );
}
