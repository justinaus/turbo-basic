import Image from 'next/image';

type Props = {
  imageProps: React.ComponentProps<typeof Image>;
};

export default function FullWidthAutoHeightImage({ imageProps }: Props) {
  const { style, ...rest } = imageProps;

  return (
    <div
      css={{
        position: 'relative',
        lineHeight: 0,
      }}
    >
      <Image
        width={0}
        height={0}
        sizes="(max-width: 360px) 360px, (max-width: 480px) 480px, 720px"
        style={{ width: '100%', height: 'auto', ...style }}
        // placeholder="blur" // 일단 blur 제공.
        // blurDataURL={BLUR_DATA_URL}
        {...rest}
      />
    </div>
  );
}
