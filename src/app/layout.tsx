import type { Metadata } from "next";
import { Bowlby_One_SC } from "next/font/google";
import "./globals.css";

const bowlbyOneSC = Bowlby_One_SC({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Burger Haven - Gourmet Burgers",
  description: "Craft burgers made with passion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bowlbyOneSC.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
