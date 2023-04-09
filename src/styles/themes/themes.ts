import { type DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    background: {
      primary: '#c5c5c5',
      secondary: '#e2e2e2',
    },
    text: {
      primary: '#283345',
      secondary: '#d87905',
    },
    shadow: {
      primary: '#888888',
      secondary: '#ffffff',
    },
  },
};

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    background: {
      primary: '#283345',
      secondary: '#33435a',
    },
    text: {
      primary: '#F2F3F7',
      secondary: '#d87905',
    },
    shadow: {
      primary: '#1d1d1d',
      secondary: '#292929',
    },
  },
};

export const coloredTheme: DefaultTheme = {
  name: 'colored',
  colors: {
    background: {
      primary: '#e3e4a0',
      secondary: '#e2e2cc',
    },
    text: {
      primary: '#283345',
      secondary: '#dd3f3f',
    },
    shadow: {
      primary: '#bebe77',
      secondary: '#a8a887',
    },
  },
};
