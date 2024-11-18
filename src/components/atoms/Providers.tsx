'use client';

import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import store from '~/lib/store';


export interface ProvidersProps {
  children: React.ReactNode
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider attribute="class" disableTransitionOnChange>
    <Provider store={store}>
      {children}
    </Provider>
  </ThemeProvider>
);

export default Providers;
