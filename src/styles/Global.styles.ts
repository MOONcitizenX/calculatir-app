import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*, *:before, *:after {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;
}
body{
  background-color: ${({ theme }) => theme.colors.background.secondary};
}
a {
  text-decoration: none;
  color: 'white';
}
ul {
  list-style: none;
}
`;

export default GlobalStyles;
