import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner";
import WhatsAppButton from '../components/WhatsAppButton'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: "Auras Foundation",
  description:
"Welcome to the Auras Foundation – a non-profit organization dedicated to driving positive change through initiatives in environment, education, and humanitarian efforts. Join us in building a more sustainable, informed, and compassionate world.",  keywords: [
    "auras foundation",
    "education ngo",
  ],
  authors: [{ name: "Auras Foundation" }],
  creator: "Auras Foundation",
  metadataBase: new URL("https://thechessclasses.com"),
  openGraph: {
    title: "Online Chess Coaching | Learn Chess with Experts",
    description:
      "Master the game of chess with online coaching from experienced trainers. Start learning today!",
    url: "https://thechessclasses.com",
    siteName: "Chess Coaching",
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
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
