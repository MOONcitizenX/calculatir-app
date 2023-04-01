import { type ThemeAction, ThemeActionTypes } from '@store/types/theme.types';
import { lightTheme } from '@styles/themes/themes';

const initialTheme = lightTheme;

export const themeReducer = (state = initialTheme, action: ThemeAction) => {
  switch (action.type) {
    case ThemeActionTypes.LIGHT:
      return action.payload;
    case ThemeActionTypes.DARK:
      return action.payload;
    case ThemeActionTypes.COLORED:
      return action.payload;
    default:
      return state;
  }
};
