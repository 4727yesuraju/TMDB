import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Navbar from '@/components/Nabar'
import SearchBar from '@/components/SearchBar'
import Provider from './Provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB clone",
  description: "This is a moie Database clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Provider>
            <Header />
            <Navbar />
            <SearchBar />
            {children}
          </Provider>
        </body>
    </html>
  );
}
