import { Component, ReactNode } from 'react';
import { Code } from '@nextui-org/code';
import { Link } from '@nextui-org/link';

// NOTE: Once you get Clerk working you can remove this error boundary
export class ErrorBoundary extends Component<
  { children: ReactNode },
  { error: ReactNode | null }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: unknown) {
    const errorText = '' + (error as any).toString();
    if (
      errorText.includes('@clerk/clerk-react') &&
      errorText.includes('publishableKey')
    ) {
      const [clerkDashboardUrl] = errorText.match(/https:\S+/) ?? [];
      return {
        error: (
          <>
            <p>
              Add{' '}
              <Code>
                NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY={'"<your publishable key>"'}
              </Code>{' '}
              to the <Code>.env.local</Code> file
            </p>
            {clerkDashboardUrl ? (
              <p>
                You can find it at{' '}
                <Link href={clerkDashboardUrl} target="_blank">
                  {clerkDashboardUrl}
                </Link>
              </p>
            ) : null}
            <p className="text-muted-foreground pl-8">Raw error: {errorText}</p>
          </>
        ),
      };
    }

    // propagate error to Next.js provided error boundary
    throw error;
  }

  componentDidCatch() {}

  render() {
    if (this.state.error !== null) {
      return (
        <div className="bg-destructive/30 container flex flex-col gap-4 p-8">
          <h1 className="text-xl font-bold">
            Caught an error while rendering:
          </h1>
          {this.state.error}
        </div>
      );
    }

    return this.props.children;
  }
}