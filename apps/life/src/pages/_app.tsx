import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { suitRegular } from '@/fonts/suitRegular';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={suitRegular.className}>
      <Component {...pageProps} />
    </main>
  );
}
