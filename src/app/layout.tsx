import { ConvexProvider, UIProvider } from '@/_providers';
import { Toaster } from 'sonner';

import { geist } from '@/_utils/fonts';

import '@/_styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <ConvexProvider>
          <Toaster
            className="toaster group:"
            toastOptions={{
              classNames: {
                toast:
                  'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:shadow-lg',
                description: 'group-[.toast]:text-foreground-500',
                actionButton:
                  'group-[.toast]:bg-primary group-[.toast]:text-white',
              },
            }}
          />
          <UIProvider>{children}</UIProvider>
        </ConvexProvider>
      </body>
    </html>
  );
}
