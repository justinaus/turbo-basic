import { QueryErrorResetBoundary } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Button } from 'ui';

const List = dynamic(() => import('@/components/users/List'), {
  ssr: false,
});

export default function Users() {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta content="User list" name="description" />
      </Head>
      <h1>Users</h1>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            // eslint-disable-next-line react/no-unstable-nested-components -- 나중에 제대로 하겠습니다..
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div>
                There was an error!{' '}
                <Button
                  css={{
                    border: '1px solid #000',
                    padding: 8,
                  }}
                  onClick={() => {
                    resetErrorBoundary();
                  }}
                >
                  Try again
                </Button>
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- 나중에 제대로 하겠습니다.. */}
                <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
              </div>
            )}
            onReset={reset}
          >
            <Suspense fallback={<div>loading</div>}>
              <List />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </>
  );
}
