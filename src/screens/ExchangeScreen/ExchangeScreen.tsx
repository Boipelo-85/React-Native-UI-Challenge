import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '../../components/Button/Button';
import { CurrencyCard } from '../../components/CurrencyCard/CurrencyCard';
import { FeeDetails } from '../../components/FeeDetails/FeeDetails';
import { Header } from '../../components/Header/Header';
import { SwapButton } from '../../components/SwapButton/SwapButton';
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
        <Header title="Exchange" subtitle="Convert between currencies" />
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
        <Button disabled title="Continue" />
      </ScrollView>
    </SafeAreaView>
  );
}
