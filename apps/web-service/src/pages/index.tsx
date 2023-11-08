import { FilledButton } from 'jds';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { getRandomHex } from 'utils';

import Count from '@/components/home/Count';
import { CountState } from '@/components/home/countState';
import PageLayout from '@/components/layout/PageLayout';
import FullWidthAutoHeightImage from '@/components/shared/image/FullWidthAutoHeightImage';

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
      <NextSeo title="Turborepo emotion realworld example - Home" />
      <PageLayout>
        <main>
          <FilledButton
            size="large"
            css={{
              backgroundColor: 'green',
            }}
            onClick={onClick}
          >
            Click!!
          </FilledButton>
          <Link href="/users">
            <FilledButton
              size="small"
              css={{
                backgroundColor: 'pink',
              }}
            >
              Go Users page
            </FilledButton>
          </Link>
          <div>
            어제보다 4℃ 높아요 · Gift 카드 등록하기 · 최대 20% 캐시백 · 61,800P
            적립 · QR 결제
          </div>
          <div
            css={{
              fontWeight: 800,
            }}
          >
            어제보다 4℃ 높아요 · Gift 카드 등록하기 · 최대 20% 캐시백 · 61,800P
            적립 · QR 결제
          </div>
          <Count />
          <FullWidthAutoHeightImage
            imageProps={{
              src: '/1024.png',
              alt: 'FUUUUULLL',
            }}
          />
        </main>
      </PageLayout>
    </>
  );
}
