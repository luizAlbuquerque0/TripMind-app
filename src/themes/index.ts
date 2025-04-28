import {Theme} from '@emotion/react';

export const theme: Theme = {
  fonts: {
    regular: 'RobotoCondensed-Regular',
    bold: 'RobotoCondensed-Bold',
    italic: 'RobotoCondensed-Italic',
    italicBold: 'RobotoCondensed-BoldItalic',
    size: {
      extraSmall: 12,
      small: 14,
      medium: 16,
      large: 20,
      extraLarge: 28,
      xxl: 36,
    },
  },
  colors: {
    primary: {
      main: '#4F46E5',
      medium: '#6366F1',
      light: '#E0E7FF',
    },
    secondary: {
      main: '#22D3EE',
      medium: '#67E8F9',
      light: '#CFFAFE',
    },
    tertiary: {
      main: '#F472B6',
      light: '#FBCFE8',
    },
    neutral: {
      n100: '#FFFFFF',
      n90: '#F7F7F7',
      n80: '#E6E6E6',
      n70: '#C7C7C7',
      n50: '#737373',
      n30: '#B3B3B3',
      n0: '#000000',
    },
    success: {
      main: '#008760',
      light: '#EAFDF8',
    },
    error: {
      main: '#D71920',
      light: '#FDE9E9',
    },
    alert: {
      main: '#EA580C',
      light: '#FFEEE5',
    },
    info: {
      main: '#317DA4',
      light: '#F2FBFF',
    },
    visited: {
      main: '#663399',
    },
    text: {
      main: '#262626',
    },
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
    '4xl': 104,
    g: 120,
  },
};
