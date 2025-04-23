import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './src/Router';
import {ThemeProvider} from '@emotion/react';
import {theme} from './src/themes';
import Toast from 'react-native-toast-message';

export function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
        <Toast position="bottom" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
