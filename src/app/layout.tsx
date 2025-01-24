import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import TopLabel from "@/components/header/TopLabel";


export const metadata: Metadata = {
  title: "Paraa Crypto",
  description: "Paraa Crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased scroll-smooth`}
      >
        <TopLabel />
        {children}
        <Footer />
      </body>
    </html>
  );
}
