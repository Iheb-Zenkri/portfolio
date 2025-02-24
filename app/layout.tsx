import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata: Metadata = {
  title: "Zenkri Iheb | Software Engineer Portfolio",
  description: "Zenkri Iheb - Software Engineer specialized in frontend and backend development. Explore my portfolio and projects.",
  keywords: [
    "Zenkri Iheb",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Zenkri Iheb" }],
  creator: "Zenkri Iheb",
  openGraph: {
    title: "Zenkri Iheb | Software Engineer Portfolio",
    description:
      "Zenkri Iheb - Software Engineer specialized in frontend and backend development. Explore my portfolio and projects.",
    url: "https://zenkriiheb.vercel.app",
    siteName: "Zenkri Iheb",
  },
  verification: {
    google: "4eD-DA66RmA5HmsLqx9J5IcpJVvuHQ7a8k_MQrbBFXU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
        overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
