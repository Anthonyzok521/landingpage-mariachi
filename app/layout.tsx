import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Footer2 from '~/components/widgets/Footer2';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';
import '~/db'

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Mariachi Cocula internacional" />
        <meta property="og:description" content="La mejor opción para tus fiestas y eventos. Mariachi Cocula Internacional acompaña a grandes artistas. Y tiene el mejor repertorio para tu espectáculo." />
        <meta property="og:image" content="https://cdn.mariachici.com/images/card.png" />
        <meta property="og:url" content="https://mariachici.com" />
        <meta property="og:site_name" content="Mariachi Cocula Internacional" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mariachi Cocula internacional" />
        <meta name="twitter:description" content="La mejor opción para tus fiestas y eventos. Mariachi Cocula Internacional acompaña a grandes artistas. Y tiene el mejor repertorio para tu espectáculo." />
        <meta name="twitter:image" content="https://cdn.mariachici.com/images/card.png" />
        <meta name="keywords" content="mariachi cocula internacional, mariachis en colombia, mariachi cocula, mariachi colombia, colombia, cundinamarca, bogota, zipaquira, nemocon, tabio, mci, mariachi bogota, mariachicoculainternacional, mariachis cocula, mariachi internacional, mariachi zipaquira, mariachi jean carlos loreto, mariachi loreto, mariachi carlos" />
      </head>
      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300 dark:bg-slate-900">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}