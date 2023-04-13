import { Provider } from 'react-redux';
import { Theme } from '@styles/Theme';
import { Router } from '@router/Router';
import { store } from './store';
import GlobalStyles from '@styles/Global.styles';
import { CalculatorProvider } from '@components/CalculatorProvider/CalculatorProvider';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <CalculatorProvider>
          <Theme>
            <GlobalStyles />
            <Router />
          </Theme>
        </CalculatorProvider>
      </Provider>
    </>
  );
};
