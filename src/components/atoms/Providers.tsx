'use client';

import { ThemeProvider } from 'next-themes';


export interface ProvidersProps {
  children: React.ReactNode
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider attribute="class" disableTransitionOnChange>
    {children}
  </ThemeProvider>
);

export default Providers;
