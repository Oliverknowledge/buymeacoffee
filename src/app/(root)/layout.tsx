
import type { Metadata } from "next";
import { Inter as FontSans} from "next/font/google"

import "../globals.css";
import NavBar from "@/components/NavBar";



const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Buy Me a Coffee",
  description: "Customers can support their favourite creators by donating coffees (donations) to them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
    <html lang="en">
      <body className={fontSans.className}>
        <main>
        <NavBar/>
        
        {children}
        </main></body>
    </html>
  );
}
