import React, { Component, ErrorInfo, ReactNode } from 'react';
import testids from 'client/utils/testids';
import { Logger } from 'client/utils/logger';

interface Props {
  children: ReactNode;
  logger: Logger;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.props.logger.error('ErrorBoundary error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <h1 data-testid={testids.ERROR_BOUNDRY_MESSAGE}>
          Something went wrong.
        </h1>
      );
    }

    return this.props.children;
  }
}
