type Props = {
  className?: string;
};

export default function AppLayout({
  children,
  className,
}: React.PropsWithChildren<Props>) {
  return <div className={className}>{children}</div>;
}
