import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from 'next/font/local'
import NextAuthProvider from "@/provider/NextAuthProvider";


const poppins = Poppins(
  {
    weight: ["100", "200", "400", "500", "600", "800"]
  }
)


export const fontBangla = localFont({
  src: '../../src/fonts/mayaboti-normal.ttf'
  // weight: ''
})




export const metadata = {
  title: {
    default: "Hero Kidz",
    template: "%s | Hero Kidz",
  },
  description: "Hero Kidz - A modern platform for kids learning and growth.",
  keywords: ["kids", "learning", "education", "Hero Kidz"],
  authors: [{ name: "Hero Kidz Team" }],
  openGraph: {
    title: "Hero Kidz",
    description: "A modern platform for kids learning and growth.",
    url: "https://herokidzfrontend.vercel.app/",
    siteName: "Hero Kidz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz",
    description: "A modern platform for kids learning and growth.",
  },
};










export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>

    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
        >
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="py-25 md:w-11/12 mx-auto min-h-[calc(350px-100vh)] px-4">
        {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
        </NextAuthProvider>
  );
}
