import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Eventos',
};

export interface LayoutProps {
    children: React.ReactNode;
}

export default async function RootLayout({ children }: LayoutProps) {

    return <section className="mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
        {children}
    </section>
}