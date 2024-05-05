import { ConvexProvider, UIProvider } from '@/_providers';

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
          <UIProvider>{children}</UIProvider>
        </ConvexProvider>
      </body>
    </html>
  );
}
