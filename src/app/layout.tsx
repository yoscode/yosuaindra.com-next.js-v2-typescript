import "./globals.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yosua Indra - Front-End Developer",
  description:
    "Hello World! I&#39;m Yosua Indra, a Front-End Developer who builds bridges with impactful user interfaces for a more connected world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
