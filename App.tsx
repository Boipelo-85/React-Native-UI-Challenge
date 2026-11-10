import { SafeAreaProvider } from 'react-native-safe-area-context';

import ExchangeScreen from './src/screens/ExchangeScreen/ExchangeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <ExchangeScreen />
    </SafeAreaProvider>
  );
}
