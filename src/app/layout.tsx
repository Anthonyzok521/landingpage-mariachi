/* eslint-disable @next/next/no-sync-scripts */
import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Footer2 from '~/components/widgets/Footer2';
import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';
import { getAuthLogin } from './api';
import { IAuth } from '~/shared/types';

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

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function RootLayout({ children }: LayoutProps) {

  const data = await getAuthLogin() as IAuth;
  const login = data.auth;

  return (
    <html lang="es" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>

        {/* // eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src='/googletag.js'></script>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://mariachici.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mariachi Cocula Internacional" />
        <meta property="og:description" content="La mejor opción para tus fiestas y eventos. Mariachi Cocula Internacional acompaña a grandes artistas. Y tiene el mejor repertorio para tu espectáculo." />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/c070be28-c39b-4ffa-978c-0b632091376a.png?token=Aq-bwiQcbO-YxWRLsonSO_86Ou7TfZMYxJXMvmS_k-4&height=630&width=1200&expires=33264842989" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="mariachici.com" />
        <meta property="twitter:url" content="https://mariachici.com" />
        <meta name="twitter:title" content="Mariachi Cocula Internacional" />
        <meta name="twitter:description" content="La mejor opción para tus fiestas y eventos. Mariachi Cocula Internacional acompaña a grandes artistas. Y tiene el mejor repertorio para tu espectáculo." />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/c070be28-c39b-4ffa-978c-0b632091376a.png?token=Aq-bwiQcbO-YxWRLsonSO_86Ou7TfZMYxJXMvmS_k-4&height=630&width=1200&expires=33264842989" />
      </head>
      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300 dark:bg-slate-900">

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P6QSXPSL"
          height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>

        <Providers>
          <Header login={login} />
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}