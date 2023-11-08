import { css } from '@emotion/react';
import { colors } from 'jds';
import Head from 'next/head';

// https://emotion.sh/docs/best-practices#consider-defining-styles-outside-your-components
const cardCss = {
  self: css({
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderRadius: '0.5rem',
    padding: '1rem',
  }),

  title: css({
    fontSize: '1.25rem',
  }),
};

export const errorCss = css({
  color: 'red',
  fontWeight: 'bold',
});

// Use arrays to compose styles
export const largeErrorCss = css([errorCss, { fontSize: '1.5rem' }]);

// https://emotion.sh/docs/best-practices#use-the-style-prop-for-dynamic-styles
export default function Test() {
  return (
    <>
      <Head>
        <title>Test</title>
        <meta content="Users" name="description" />
      </Head>
      <div>
        <div
          css={{
            color: 'var(--background-style)',
          }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any -- test.
          style={{ ['--background-style' as any]: 'blue' }}
        >
          test1
        </div>
        <div
          css={{
            color: 'var(--background-style)',
          }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any -- test.
          style={{ ['--background-style' as any]: 'green' }}
        >
          test2
        </div>
        <div css={cardCss.self}>
          <h5 css={cardCss.title}>4444</h5>
          333
        </div>
        <div
          css={{
            color: colors.success,
          }}
        >
          123
        </div>
      </div>
    </>
  );
}
