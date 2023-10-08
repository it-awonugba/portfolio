import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isaac Awonugba (WebKing)",
  description: "A Frontend Developer, Software Developer, Fullstack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={`${inter.className} ${'bg-primary'}`}>
        <main className={`pt-4 px-6 m-auto md:px-8 lg:max-w-7xl`}>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
