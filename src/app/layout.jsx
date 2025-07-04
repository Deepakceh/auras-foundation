import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";
import { HandCoins } from 'lucide-react';
import Loader from "@/components/Loader"; // Your loader component

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: "Auras Foundation",
  description:
    "Auras Foundation is a non-profit organization working to uplift underprivileged communities through initiatives in education, environmental sustainability, women empowerment, livelihood support, and healthcare.",
  keywords: [
    "Auras Foundation",
    "NGO India",
    "education NGO",
    "environment NGO",
    "women empowerment",
    "livelihood support",
    "healthcare NGO",
    "non-profit organization",
  ],
  authors: [{ name: "Auras Foundation" }],
  creator: "Auras Foundation",
  metadataBase: new URL("https://aurasfoundation.com"),
  openGraph: {
    title: "Auras Foundation | Together for a Better Tomorrow",
    description:
      "Support Auras Foundation – an NGO committed to education, environment, women empowerment, and health. Join us in creating meaningful change.",
    url: "https://aurasfoundation.com",
    siteName: "Auras Foundation",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {

  return (
    <html lang="en" className={poppins.className}>
      <Head />
      <body className="bg-white text-black antialiased">
        <Loader>
          <Navbar />
          <main className="pt-14">{children}</main>
          <Link
            href='/donate'
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 bg-green-700 hover:bg-green-800 text-white p-3 rounded-full shadow-lg transition-all  block md:hidden"
          >
            <HandCoins className="w-6 h-6" />
          </Link>
          <Footer />
          <Toaster position="top-center" richColors />
        </Loader>
      </body>
    </html>
  );
}
