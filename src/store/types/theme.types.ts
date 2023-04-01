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
