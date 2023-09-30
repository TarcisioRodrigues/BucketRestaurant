"use client";
import { Providers } from "@/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import "./globals.css";
import { usePathname } from "next/navigation";
import AuthChecker from "@/Context/AuthChecker";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bucket",
  description: "Restaurante Local",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body>
        <AuthChecker>
          <Providers>
            {pathName === "/" || pathName === "/register" ? null : <Header />}
            <div className={inter.className}>{children}</div>
          </Providers>
        </AuthChecker>
      </body>
    </html>
  );
}
