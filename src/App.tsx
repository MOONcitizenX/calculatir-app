import { Provider } from 'react-redux';
import { Theme } from '@styles/Theme';
import { Router } from '@router/Router';
import { store } from './store';
import GlobalStyles from '@styles/Global.styles';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Theme>
          <GlobalStyles />
          <Router />
        </Theme>
      </Provider>
    </>
  );
};
