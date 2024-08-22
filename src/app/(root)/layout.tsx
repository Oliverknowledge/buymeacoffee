
import type { Metadata } from "next";
import { Sora} from "next/font/google"

import "../globals.css";
import NavBar from "@/components/NavBar";


const sora = Sora({ subsets: ['latin'] });


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
      <body style = {{'--font-sora': sora.style.fontFamily}  as React.CSSProperties}>
        <main>
        <NavBar/>
        
        {children}
        </main></body>
    </html>
  );
}
