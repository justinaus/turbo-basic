import { Button } from 'jds';
import Head from 'next/head';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { getRandomHex } from 'utils';

import Count from '@/components/home/Count';
import { CountState } from '@/components/home/countState';
import { suitExtraBold } from '@/fonts/suitExtraBold';

export default function Home() {
  useEffect(() => {
    const hex = getRandomHex();

    console.log('hex', hex);
  }, []);

  const setCount = useSetRecoilState(CountState);

  const onClick = () => {
    setCount((oldValue) => oldValue + 1);
  };

  return (
    <>
      <Head>
        <title>Turborepo Test</title>
        <meta content="Turborepo Test" name="description" />
        {/* <link href="/favicon.ico" rel="icon" /> */}
      </Head>
      <>
        <Button
          css={{
            backgroundColor: 'green',
          }}
          onClick={onClick}
        >
          Click!!
        </Button>
        <div>
          어제보다 4℃ 높아요 · Gift 카드 등록하기 · 최대 20% 캐시백 · 61,800P
          적립 · QR 결제
        </div>
        <div className={suitExtraBold.className}>
          어제보다 4℃ 높아요 · Gift 카드 등록하기 · 최대 20% 캐시백 · 61,800P
          적립 · QR 결제
        </div>
        <Count />
      </>
    </>
  );
}
