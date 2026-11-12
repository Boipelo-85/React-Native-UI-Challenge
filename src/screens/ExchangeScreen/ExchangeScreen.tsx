import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CurrencyCard } from '@/components/CurrencyCard/CurrencyCard';
import { FeeDetails } from '@/components/FeeDetails/FeeDetails';
import { SwapButton } from '@/components/SwapButton/SwapButton';

import { Button } from '@expo/ui';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../components/Header/Header';
import type { Currency } from '../../types';
import { styles } from './styles';

export default function ExchangeScreen() {
  const [payCurrency, setPayCurrency] = useState<Currency>({
    code: 'USD',
    name: 'US Dollar',
  });
  const [receiveCurrency, setReceiveCurrency] = useState<Currency>({
    code: 'EUR',
    name: 'Euro',
  });
  const [amount, setAmount] = useState('');

  function swapCurrencies() {
    setPayCurrency(receiveCurrency);
    setReceiveCurrency(payCurrency);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Header title="Exchange" subtitle="" titleStyle={styles.title} />
        <Ionicons 
          name='notifications'
          style={styles.title}
         />

        <View style={styles.currencyFields}>
          <CurrencyCard
            amount={amount}
            currency={payCurrency}
            label="You pay"
            onAmountChange={setAmount}
          />
          <SwapButton onPress={swapCurrencies} />
          <CurrencyCard
            amount=""
            currency={receiveCurrency}
            label="You receive"
          />
        </View>
        <FeeDetails exchangeRate="—" fee="—" />
        <Button disabled label="Continue" />
      </ScrollView>
    </SafeAreaView>

  );
}
