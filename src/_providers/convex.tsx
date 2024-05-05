'use client';

import { ClerkProvider, RedirectToSignIn, useAuth } from '@clerk/nextjs';
import {
  Authenticated,
  AuthLoading,
  ConvexReactClient,
  Unauthenticated,
} from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';

import { ErrorBoundary } from '@/app/ErrorBoundary';
import { LoadingAuth } from '@/_components/layout';
import { NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY } from '@/_config/clerk';
import { NEXT_PUBLIC_CONVEX_URL } from '@/_config/convex';
import { type LayoutChildrenProps } from '@/_types/layout';

const publishableKey = NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const convexUrl = NEXT_PUBLIC_CONVEX_URL;
const convex = new ConvexReactClient(convexUrl!);

export function ConvexProvider({ children }: LayoutChildrenProps) {
  return (
    <ErrorBoundary>
      <ClerkProvider publishableKey={publishableKey}>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          <Authenticated>{children}</Authenticated>
          <Unauthenticated>
            <RedirectToSignIn />
          </Unauthenticated>
          <AuthLoading>
            <LoadingAuth />
          </AuthLoading>
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </ErrorBoundary>
  );
}
