import type { Metadata } from "next";
import { Montserrat, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-montserrat",
});

export const notoSerifJP = Noto_Serif_JP({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-noto-serif-jp",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${notoSerifJP.variable}`}>
        {children}
      </body>
    </html>
  );
}
