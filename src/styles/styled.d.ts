import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      background: {
        primary: string;
        secondary: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
      shadow: {
        primary: string;
        secondary: string;
      };
    };
  }
}
