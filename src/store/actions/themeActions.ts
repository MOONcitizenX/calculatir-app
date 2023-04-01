import { type ThemeAction, ThemeActionTypes } from '@store/types/theme.types';
import { coloredTheme, darkTheme, lightTheme } from '@styles/themes/themes';

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
