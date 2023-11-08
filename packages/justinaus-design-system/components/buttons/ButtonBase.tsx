type Props = React.ClassAttributes<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonBase({
  children,
  ...rest
}: React.PropsWithChildren<Props>): JSX.Element {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
}
