import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './src/Router';
import {ThemeProvider} from '@emotion/react';
import {theme} from './src/themes';

export function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
