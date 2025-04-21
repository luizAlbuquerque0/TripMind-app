import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './src/Router';

export function App() {
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
}
