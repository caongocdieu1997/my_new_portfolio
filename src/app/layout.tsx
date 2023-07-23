import "./scss/main.scss";
import { Inter } from "next/font/google";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cao Ngoc Dieu",
  description: "Ngọc Diệu Front-End Dev",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="buffalo icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
