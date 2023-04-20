import { Provider } from 'react-redux';
import { Theme } from '@styles/Theme';
import { Router } from '@router/Router';
import { store } from './store';
import GlobalStyles from '@styles/Global.styles';
import { CalculatorProvider } from '@components/CalculatorProvider/CalculatorProvider';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';

export const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Provider store={store}>
          <CalculatorProvider>
            <Theme>
              <GlobalStyles />
              <Router />
            </Theme>
          </CalculatorProvider>
        </Provider>
      </ErrorBoundary>
    </>
  );
};
