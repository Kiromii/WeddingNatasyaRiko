import { Playfair_Display, Italianno, Jost } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const italianno = Italianno({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italianno",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  title: "Fernanda & Gustian — Undangan Pernikahan",
  description: "Dengan penuh suka cita, kami mengundang Anda di hari pernikahan kami.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#16324F",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${playfair.variable} ${italianno.variable} ${jost.variable} font-body bg-ink-900 text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
