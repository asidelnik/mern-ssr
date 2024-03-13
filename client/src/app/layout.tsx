import './globals.css';
import c from "./RootLayout.module.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SearchForm from "@/components/search-form/SearchForm";
import NavComponent from "@/components/nav-component/NavComponent";
import NavHabmurger from '@/components/nav-hamburger/NavHamburger';

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={c.body + ' ' + inter.className}>
        <header className={c.header}>
          <div className={c.left}>
            <h2>Cats Crazy</h2>
            <NavComponent />
          </div>
          <div className={c.right}>
            <SearchForm />
            <div className="show-on-mobile">
              <NavHabmurger />
            </div>
          </div>
        </header>
        <main className={c.main}>
          {children}
        </main>
      </body>
    </html>
  );
}