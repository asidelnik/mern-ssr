import type { Metadata } from "next";
import c from "./RootLayout.module.scss";
import { Inter } from "next/font/google";
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
      <body className={c.body + ' ' + inter.className}>{children}</body>
    </html>
  );
}
