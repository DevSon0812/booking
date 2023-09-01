import type { Metadata } from 'next';
import { ReactNode } from 'react';

import 'windi.css';

export const metadata: Metadata = {
    title: 'Mamoru Admin Dashboard',
    description: 'Create by LB',
};

interface IRootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}
