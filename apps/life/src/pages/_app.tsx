import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import { QueryClientProvider } from '@tanstack/react-query';
import { suitRegular } from '@/fonts/suitRegular';
import AppLayout from '@/components/layout/AppLayout';
import { queryClient } from '@/helpers/query';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AppLayout>
            <main className={suitRegular.className}>
              <Component {...pageProps} />
            </main>
          </AppLayout>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}
