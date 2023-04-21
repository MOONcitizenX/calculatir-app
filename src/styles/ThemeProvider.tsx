import { useTypedSelector } from '@hooks/useTypedSelector';
import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';

interface ThemeProps {
  children?: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  const currentTheme = useTypedSelector((state) => state.theme);

  return <Provider theme={currentTheme}>{children}</Provider>;
};
