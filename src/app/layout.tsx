
import { Zen_Old_Mincho, Cormorant_Garamond, Zen_Kaku_Gothic_New, Space_Mono } from "next/font/google";
import "./globals.css";

export const zenOldMincho = Zen_Old_Mincho({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "900"],
    variable: "--font-zen-old-mincho",
});
export const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-cormorant-garamond",
});

export const zenKakuGothicNew = Zen_Kaku_Gothic_New({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-zen-kaku-gothic-new",
});

export const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${zenOldMincho.variable} ${cormorantGaramond.variable} ${zenKakuGothicNew.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
