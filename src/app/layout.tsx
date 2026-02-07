import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';
import { Providers } from './providers';

const msSans = localFont({
  src: '../assets/fonts/MS-Sans-Serif.ttf',
  variable: '--font-ms-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Assad Isah | Windows 95 Portfolio',
  description:
    'A Windows 95-inspired portfolio with draggable apps for resume, projects, blog, and contact.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-M9NC9LX';

  return (
    <html lang="en">
      <body className={`${msSans.variable} font-sans`}>
        <Providers>{children}</Providers>
        <Script id="gtm-data-layer" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; window.dataLayer.push({userId: '001', userProject: 'nottherealalanturing'});`}
        </Script>
        <Script
          id="gtm"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
        />
      </body>
    </html>
  );
}
