import ExchangeScreen from '@/screens/ExchangeScreen/ExchangeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider >
      <ExchangeScreen />
    </SafeAreaProvider>
    
  );
}
