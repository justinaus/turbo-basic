import '@/styles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'jds/styles/globals.css';

import { Global } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { emotionReset } from 'jds';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';

import AppLayout from '@/components/layout/AppLayout';
import { suit } from '@/fonts/suit';
import { queryClient } from '@/helpers/query';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Global styles={emotionReset} />
          <AppLayout className={suit.className}>
            <Seo />
            <Component {...pageProps} />
          </AppLayout>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

function Seo() {
  return (
    <DefaultSeo
      additionalLinkTags={[
        {
          rel: 'apple-touch-icon',
          href: '/76.png',
          sizes: '76x76',
        },
        {
          rel: 'icon',
          href: '/16.png',
          sizes: '16x16',
        },
        {
          rel: 'icon',
          href: '/32.png',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          href: '/196.png',
          sizes: '196x196',
        },
      ]}
      description="Turborepo emotion css props realworld example."
      openGraph={{
        type: 'website',
        images: [
          {
            url: '/1024.png',
            width: 1024,
            height: 1024,
            alt: 'Og Image Alt',
          },
        ],
      }}
      title="Turborepo emotion realworld example"
    />
  );
}
