
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

export const metadata: Metadata = {
    metadataBase: new URL("https://sekimitsu.com"),

    title: {
        default: "Sekimitsu Masaki",
        template: "%s | Sekimitsu Masaki",
    },

    description:
        "フロントエンドエンジニア 関光正輝のポートフォリオサイト",

    keywords: [
        "フロントエンドエンジニア",
        "React",
        "Next.js",
        "WordPress",
        "Web制作",
    ],

    openGraph: {
        title: "Sekimitsu Masaki",
        description:
            "フロントエンドエンジニア 関光正輝のポートフォリオサイト",
        url: "https://sekimitsu.com",
        siteName: "Sekimitsu Masaki",
        locale: "ja_JP",
        type: "website",
        images: [
            {
                url: "/ogp.jpg",
                width: 1200,
                height: 630,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Sekimitsu Masaki",
        description:
            "フロントエンドエンジニア 関光正輝のポートフォリオサイト",
        images: ["/ogp.jpg"],
    },

    robots: {
        index: true,
        follow: true,
    },
};


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
