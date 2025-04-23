import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './src/Router';
import {ThemeProvider} from '@emotion/react';
import {theme} from './src/themes';
import Toast from 'react-native-toast-message';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/constants/queryClient';
import {AuthProvider} from './src/contexts/AuthContext';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <Router />
            <Toast position="bottom" />
          </ThemeProvider>
        </SafeAreaProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
