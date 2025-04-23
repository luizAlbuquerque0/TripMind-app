export interface Size {
  extraSmall: number;
  small: number;
  medium: number;
  large: number;
  extraLarge: number;
  xxl: number;
}

declare module '@emotion/react' {
  export interface Theme {
    fonts: {
      regular: string;
      bold: string;
      italic: string;
      italicBold: string;
      size: Size;
    };
    colors: {
      primary: {main: string; medium: string; light: string};
      secondary: {main: string; medium: string; light: string};
      tertiary: {main: string; light: string};
      neutral: {
        n100: string;
        n90: string;
        n80: string;
        n70: string;
        n50: string;
        n0: string;
      };
      success: {main: string; light: string};
      error: {main: string; light: string};
      alert: {main: string; light: string};
      info: {main: string; light: string};
      visited: {main: string};
      text: {main: string};
    };
    spacing: {
      xs: number;
      s: number;
      m: number;
      l: number;
      xl: number;
      '2xl': number;
      '3xl': number;
      '4xl': number;
      g: number;
    };
  }
}
