import Router from '@router/Router';
import GlobalStyles from '@styles/Global.styles';
import Theme from '@styles/Theme';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
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

export default App;
