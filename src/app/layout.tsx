import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ReactLenis } from '../../components/LenisWrapper'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const tiempos = localFont({
  src: [
    { path: "../../public/fonts/Tiempos Headline - Light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/Tiempos Headline - Light Italic.otf", weight: "300", style: "italic" },
    { path: "../../public/fonts/Tiempos Headline - Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Tiempos Headline - Regular Italic.otf", weight: "400", style: "italic" },
    { path: "../../public/fonts/Tiempos Headline - Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Tiempos Headline - Medium Italic.otf", weight: "500", style: "italic" },
    { path: "../../public/fonts/Tiempos Headline - Semibold.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Tiempos Headline - Semibold Italic.otf", weight: "600", style: "italic" },
    { path: "../../public/fonts/Tiempos Headline - Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Tiempos Headline - Bold Italic.otf", weight: "700", style: "italic" },
    { path: "../../public/fonts/Tiempos Headline - Black.otf", weight: "900", style: "normal" },
    { path: "../../public/fonts/Tiempos Headline - Black Italic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-tiempos",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  title: "Together | Accounts Payable Automation, Solved",
  description:
    "The complete AP automation platform for modern businesses. Automate your accounts payable, expand your vendor base, and pay anyone, anywhere, on time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
          <body className={`${inter.variable} ${tiempos.variable} font-inter`}>{children}</body>
        </ReactLenis>
    </html>
  );
}
