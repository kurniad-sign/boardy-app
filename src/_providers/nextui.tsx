'use client';

import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/react';

import { LayoutChildrenProps } from '@/_types/layout';

export function UIProvider({ children }: LayoutChildrenProps) {
  const router = useRouter();

  return (
    <NextUIProvider
      navigate={router.push}
      className="flex h-full w-full flex-col"
    >
      {children}
    </NextUIProvider>
  );
}
