import './globals.css';
import c from "./RootLayout.module.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SearchComponent from "@/components/search-component/SearchComponent";
import NavComponent from "@/components/nav-component/NavComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cats Crazy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={c.body + ' ' + inter.className}>
        <header className={c.header}>
          <div className={c.left}>
            <h2>Cats Crazy</h2>
            <NavComponent />
          </div>
          <SearchComponent />
        </header>
        <main className={c.main}>
          {children}
        </main>
      </body>
    </html>
  );
}