import { Component } from 'react';
import { ErrorFallback } from './ErrorFallback';

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  didCatch: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    didCatch: false,
  };

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { didCatch: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error: ', error, errorInfo);
  }

  render() {
    if (this.state.didCatch) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
