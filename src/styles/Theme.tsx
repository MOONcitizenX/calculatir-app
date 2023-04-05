import { useTypedSelector } from 'hooks/useTypedSelector';
import React from 'react';
import { ThemeProvider } from 'styled-components';

interface ThemeProps {
  children?: React.ReactNode;
}

export const Theme: React.FC<ThemeProps> = ({ children }) => {
  const currentTheme = useTypedSelector((state) => state.theme);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};
