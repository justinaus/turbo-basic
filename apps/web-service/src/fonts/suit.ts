import localFont from 'next/font/local';

export const suit = localFont({
  src: [
    {
      path: './SUIT-Thin.woff2',
      weight: '100',
    },
    {
      path: './SUIT-Regular.woff2',
      weight: '400',
    },
    {
      path: './SUIT-ExtraBold.woff2',
      weight: '800',
    },
  ],
});
