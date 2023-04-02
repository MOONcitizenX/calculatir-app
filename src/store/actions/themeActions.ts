import { coloredTheme, darkTheme, lightTheme } from '@styles/themes/themes';
import { type DefaultTheme } from 'styled-components';

export enum ThemeActionTypes {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
  COLORED = 'COLORED',
}

export interface ThemeAction {
  type: 'LIGHT' | 'DARK' | 'COLORED';
  payload: DefaultTheme;
}

export const setLightTheme = (): ThemeAction => {
  return {
    type: ThemeActionTypes.LIGHT,
    payload: lightTheme,
  };
};

export const setDarkTheme = (): ThemeAction => {
  return {
    type: ThemeActionTypes.DARK,
    payload: darkTheme,
  };
};

export const setColoredTheme = (): ThemeAction => {
  return {
    type: ThemeActionTypes.COLORED,
    payload: coloredTheme,
  };
};
