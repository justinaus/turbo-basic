import { ErrorBoundary } from 'react-error-boundary';

export default function PageLayout({ children }: React.PropsWithChildren) {
  return <ErrorBoundary fallback={null}>{children}</ErrorBoundary>;
}
