import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Wayne Miyata Surfboards",
  description: "Surfboards by Wayne Miyata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-500 bg-[url(/images/bg-tile.gif)] ">
        <div
          className={cn(
            "max-w-4xl mx-auto shadow-lg shadow-black border border-gray-300 border-t-0 border-b-0 bg-black",
            fontSans.variable
          )}
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
