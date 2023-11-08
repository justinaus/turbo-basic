type Props = React.ClassAttributes<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  ...rest
}: React.PropsWithChildren<Props>): JSX.Element {
  return (
    <button
      css={{
        padding: 20,
        borderRadius: 4,
        backgroundColor: 'hotpink',
      }}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}
