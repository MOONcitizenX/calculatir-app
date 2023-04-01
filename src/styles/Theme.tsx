import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes/themes';

interface ThemeProps {
  children?: React.ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ children }) => {
  // TODO: get theme from store
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default Theme;
