import { type DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    background: {
      primary: 'white',
      secondary: 'blue',
    },
    button: {
      primary: 'gray',
      secondary: 'orange',
    },
    text: {
      primary: 'black',
      secondary: 'red',
    },
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: {
      primary: 'black',
      secondary: 'blue',
    },
    button: {
      primary: 'gray',
      secondary: 'orange',
    },
    text: {
      primary: 'black',
      secondary: 'red',
    },
  },
};

export const coloredTheme: DefaultTheme = {
  colors: {
    background: {
      primary: '',
      secondary: '',
    },
    button: {
      primary: '',
      secondary: '',
    },
    text: {
      primary: '',
      secondary: '',
    },
  },
};
