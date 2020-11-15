import React, { Component, ErrorInfo, ReactNode } from 'react';
import testids from 'client/utils/testids';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/* export class ErrorBoundary extends Component<Props, State> { */
  /* constructor(props: Props) {
   *   super(props);
   *   this.state = { hasError: false };
   * }

   * public static getDerivedStateFromError(_: Error): State {
   *   // Update state so the next render will show the fallback UI.
   *   return { hasError: true };
   * }

   * public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
   *   if (process.env.NODE_ENV !== 'test')
   *     console.error('ErrorBoundary error:', error, errorInfo);
   * }

   * render(): ReactNode {
   *   if (this.state.hasError) {
   *     // You can render any custom fallback UI
   *     return (
   *       <h1 data-testid={testids.ERROR_BOUNDRY_MESSAGE}>
   *         Something went wrong.
   *       </h1>
   *     );
   *   }

   *   return this.props.children;
   * } */
/* } */
