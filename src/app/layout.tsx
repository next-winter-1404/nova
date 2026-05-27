import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/src/components/common/Navbar";
import Footer from "../components/footer/page";
import { ThemeProvider } from "../components/common/themeProvider/ThemeProvider";
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: "Delta",
  description: "Easy to find!",
};

const vazir = localFont({
  src:[
    {
      path:"../../public/fonts/Vazir-Black.ttf"
    },
    {
      path:"../../public/fonts/Vazir-Bold.ttf"
    },
    {
      path:"../../public/fonts/Vazir-Light.ttf"
    },
    {
      path:"../../public/fonts/Vazir-Medium.ttf"
    },
  ],
  variable: '--font-vazir'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${vazir.variable} h-full antialiased`} >
      <body className="min-h-full flex flex-col " suppressHydrationWarning>
        <ThemeProvider>
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
