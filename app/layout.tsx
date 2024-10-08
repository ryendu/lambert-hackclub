import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LHDock } from "@/components/dock";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lambert Hack Club",
  description: "We are teen hackers from Lambert High School. Come join us!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen relative flex justify-center items-center">
          {children}
          <LHDock className="bottom-10 fixed left-1/2 transform -translate-x-1/2 z-50 bg-white opacity-90 backdrop-blur-3xl shadow-2xl" />{" "}
        </div>
      </body>
    </html>
  );
}
