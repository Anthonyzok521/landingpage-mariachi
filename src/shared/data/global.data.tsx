import { FooterProps, HeaderProps } from '../types';

// Header data
export const headerData: HeaderProps = {
  links: [        
    {
      label: 'Inicio',
      href: '/',
    },
    {
      label: 'Eventos',
      href: '/events',
    },
    {
      label: 'Galería',
      href: '/gallery',
    },
  ],  
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};


// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  footNote: (
    <div className="flex gap-32 mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <div>
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(https://acteam.dev/ac-logo.svg)] bg-cover md:-mt-0.5 md:h-6 md:w-[37px]"></span>
      <span>
        Creado por{' '}
        <a
          className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
          href="https://acteam.dev/"
        >
          {' '}
          Advanced Community
        </a>{' '}
        · All rights reserved.
      </span>
      </div>
      <div>
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Impulsado por{' '}
        <a
          className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
          href="https://onwidget.com/"
        >
          {' '}
          onWidget
        </a>{' '}
        · All rights reserved.
      </span>
      </div>
    </div>
  ),
};
