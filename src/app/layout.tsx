import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'

const roboto = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const SITE_URL = "https://araceliponce.github.io"
const TITLE = 'Araceli Ponce Sanga | Desarrolladora Web | Perú'
const DESCRIPTION = 'Portafolio de desarrollo web de Araceli Ponce Sanga, especialista en desarrollo web en Perú y Tacna.'
const IMAGE_ALT = 'Imagen de portada del portafolio de Araceli Ponce Sanga'

export const metadata: Metadata = {
  title: TITLE,
  description: "Portafolio de desarrollo web.",
  keywords: "desarrollo web perú, desarrollo web tacna, ",
  themeColor: "#000000",
  colorScheme: "light dark",
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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${roboto.className}`}>

        {children}

        <GoogleAnalytics gaId="G-MJRXW67S50" />
      </body>
    </html>
  );
}
