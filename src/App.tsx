import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import Router from '@router/Router';

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Router />
    </ErrorBoundary>
  );
};

// ErrorBoundary => Provider => ThemeProvider => Router
export default App;
