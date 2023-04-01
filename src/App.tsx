import Router from '@router/Router';
import GlobalStyles from '@styles/Global.styles';
import Theme from '@styles/Theme';

const App = () => {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <Router />
      </Theme>
    </>
  );
};

export default App;
