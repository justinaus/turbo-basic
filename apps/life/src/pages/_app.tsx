import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import { suitRegular } from '@/fonts/suitRegular';
import AppLayout from '@/components/layout/AppLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <RecoilRoot>
        <AppLayout>
          <main className={suitRegular.className}>
            <Component {...pageProps} />
          </main>
        </AppLayout>
      </RecoilRoot>
    </>
  );
}
