import { Playfair_Display, Italianno, Jost } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const italianno = Italianno({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-italianno',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

const title = 'Natasya & Riko — Undangan Pernikahan';
const description = 'Dengan penuh suka cita, kami mengundang Anda di hari pernikahan kami.';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL('http://localhost:3000');

export const metadata = {
  metadataBase: siteUrl,
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Natasya & Riko',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/hero.JPEG',
        width: 1334,
        height: 2000,
        alt: 'Natasya dan Riko',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/hero.JPEG'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#16324F',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${italianno.variable} ${jost.variable} font-body bg-ink-900 text-ink antialiased`}>{children}</body>
    </html>
  );
}
