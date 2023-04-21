import { Provider } from 'react-redux';
import { ThemeProvider } from '@styles/ThemeProvider';
import { Router } from '@router/Router';
import { store } from './store';
import GlobalStyles from '@styles/Global.styles';
import { CalculatorProvider } from '@components/CalculatorProvider';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';

export const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Provider store={store}>
          <CalculatorProvider>
            <ThemeProvider>
              <GlobalStyles />
              <Router />
            </ThemeProvider>
          </CalculatorProvider>
        </Provider>
      </ErrorBoundary>
    </>
  );
};
