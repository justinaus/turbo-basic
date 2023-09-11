import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { suitRegular } from '@/fonts/suitRegular';
import AppLayout from '@/components/layout/AppLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <main className={suitRegular.className}>
        <Component {...pageProps} />
      </main>
    </AppLayout>
  );
}
