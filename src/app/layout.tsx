import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'

const roboto = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Araceli Ponce Sanga | Desarrolladora Web | Perú",
  description: "Portafolio de desarrollo web.",
  keywords: "desarrollo web perú, desarrollo web tacna, "
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${roboto.className}`}>

        {children}

        {/* <div className="fixed bottom-3 right-3 backdrop-blur-lg py-2 px-5  is-round">
        
        </div> */}

        <GoogleAnalytics gaId="G-MJRXW67S50" />
      </body>
    </html>
  );
}
