import { css } from '@emotion/react';
import { useMemo } from 'react';
import { colors } from '../../constants';
import { ButtonBase } from './ButtonBase';

type Props = React.ClassAttributes<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size: 'large' | 'small';
  };

const sizeCss = {
  large: css({
    height: 100,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    fontWeight: 700,
    lineHeight: '40px',
    borderRadius: 4,
  }),
  small: css({
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 10,
    fontWeight: 500,
    lineHeight: '20px',
    borderRadius: 2,
  }),
};

const disabledCss = css({
  backgroundColor: colors.disabled,
});

export function FilledButton({
  children,
  size,
  disabled,
  ...rest
}: React.PropsWithChildren<Props>): JSX.Element {
  const sizeCssProps = useMemo(() => {
    switch (size) {
      case 'large':
        return sizeCss.large;
      case 'small':
        return sizeCss.small;
      default:
        return null;
    }
  }, [size]);

  const cssProps = useMemo(() => {
    return css([sizeCssProps, disabled ? disabledCss : null]);
  }, [disabled, sizeCssProps]);

  return (
    <ButtonBase css={cssProps} disabled={disabled} {...rest}>
      {children}
    </ButtonBase>
  );
}
