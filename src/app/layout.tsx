import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "./actual.scss";
import { GoogleAnalytics } from '@next/third-parties/google'
import { ActualNav } from "@/components/actual/ActualNav";
import ActualHeader from "@/components/actual/ActualHeader";

const inter = Inter({ subsets: ["latin"] });




//metadata
const SITE_URL = "https://araceliponce.github.io"
const TITLE = 'Araceli Ponce Sanga | Desarrolladora Web | Perú'
const DESCRIPTION = 'Portafolio de desarrollo web de Araceli Ponce Sanga, especialista en desarrollo web en Perú y Tacna.'
const IMAGE_ALT = 'Imagen de portada del portafolio de Araceli Ponce Sanga'

export const metadata: Metadata = {
  title: TITLE,
  description: "Portafolio de desarrollo web.",
  keywords: "desarrollo web perú, desarrollo web tacna, ",
  // themeColor: "#000000",
  // colorScheme: "light dark",
  creator: "Araceli Ponce Sanga",
  verification: { google: "ejnsoajdKpTiqzkwcKl8BTDARjHfajbqYwORjGgP1wM" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: TITLE,
    // 1200 x 630 
    images: [{
      url: `${SITE_URL}/metadata/og.png`,
      width: 900,
      height: 473,
      alt: IMAGE_ALT
    }]
  },
  twitter: {
    card: "summary_large_image",
    // site: "",
    // creator: "",
    title: TITLE,
    description: DESCRIPTION,
    // ratio 2:1, min: 300 x 157
    images: [{
      url: `${SITE_URL}/metadata/og.png`,
      alt: IMAGE_ALT
    }]
  }

};
//fin de metadata


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`light ${inter.className}`}>

        <ActualHeader />

        {children}

        <GoogleAnalytics gaId="G-MJRXW67S50" />
      </body>
    </html>
  );
}
