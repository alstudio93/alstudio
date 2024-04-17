import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})
 
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "ALStudio",
  description: "ALStudio is a web design and development studio that specializes in building modern, responsive websites and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="home" className={` scroll-m-52 ${montserrat.variable} ${nunito.variable}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
