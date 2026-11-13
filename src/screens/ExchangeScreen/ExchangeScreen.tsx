import { useState } from 'react';
import { Keyboard, Modal, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/Button/Button';
import { CurrencyCard } from '@/components/CurrencyCard/CurrencyCard';
import { CurrencyPicker } from '@/components/CurrencyPicker/CurrencyPicker';
import { FeeDetails } from '@/components/FeeDetails/FeeDetails';
import { Header } from '@/components/Header/Header';
import { SwapButton } from '@/components/SwapButton/SwapButton';
import { currencies, demoBalances, getDemoRate } from '@/constants/currencies';
import type { CurrencyCode } from '@/types';
import { calculateSwapQuote, demoFees, formatAmount, rateFormat } from '@/utils/swapQuote';
import { styles } from './styles';

type Side = 'from' | 'to';

export default function ExchangeScreen() {
  const [pair, setPair] = useState<{ from: CurrencyCode; to: CurrencyCode }>({ from: 'ETH', to: 'USD' });
  const [amount, setAmount] = useState('12.695');
  const [picker, setPicker] = useState<Side | null>(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const { from, to } = pair;
  const rate = getDemoRate(from, to);
  const sendAmount = Number(amount);
  const quote = calculateSwapQuote(sendAmount, rate, from, to, demoFees);
  const gas = quote?.networkFee;
  const separateGas = gas && gas.code !== from ? gas : undefined;
  const receiveAmount = quote ? formatAmount(quote.receive, to) : '0';
  const receiveValue = quote ? `${receiveAmount} ${to}` : '—';
  const feeRows = [
    { label: 'Estimated fee', value: quote ? `${formatAmount(quote.spreadFee, to)} ${to}` : '—' },
    { label: 'You will receive', value: receiveValue },
    { label: 'Spread', value: quote ? `${demoFees.spread * 100}%` : '—' },
    { label: 'Gas fee', value: gas ? `${formatAmount(gas.amount, gas.code)} ${gas.code}` : '—' },
  ];

  let error: string | undefined;
  if (sendAmount > demoBalances[from]) {
    error = `Insufficient ${from} balance.`;
  } else if (separateGas && separateGas.amount > demoBalances[separateGas.code]) {
    error = `Insufficient ${separateGas.code} balance for gas.`;
  } else if (quote && quote.receive <= 0) {
    error = 'Enter a larger amount to cover fees and receive funds.';
  }

  function changeAmount(value: string) {
    const decimalAmount = value.replace(',', '.');
    const pattern = currencies[from].type === 'fiat' ? /^\d{0,10}(\.\d{0,2})?$/ : /^\d{0,10}(\.\d{0,6})?$/;
    if (pattern.test(decimalAmount)) setAmount(decimalAmount);
  }

  function changePair(nextPair: typeof pair) {
    if (nextPair.from !== from && currencies[nextPair.from].type === 'fiat' && amount.includes('.')) {
      const [whole, fraction] = amount.split('.');
      setAmount(`${whole}.${fraction.slice(0, 2)}`);
    }
    setPair(nextPair);
  }

  function openPicker(side: Side) {
    Keyboard.dismiss();
    setPicker(side);
  }

  function showPreview() {
    if (!quote || error) return;
    Keyboard.dismiss();
    setIsPreviewVisible(true);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Header title="Exchange" />

        <View style={styles.quote}>
          <View style={styles.currencyFields}>
            <CurrencyCard
              amount={amount}
              balance={formatAmount(demoBalances[from], from)}
              currency={currencies[from]}
              label="Send"
              onAmountChange={changeAmount}
              onSelectCurrency={() => openPicker('from')}
            />
            <View pointerEvents="box-none" style={styles.swapControl}>
              <View pointerEvents="none" style={styles.currencyDivider} />
              <SwapButton onPress={() => changePair({ from: to, to: from })} />
            </View>
            <CurrencyCard
              amount={receiveAmount}
              balance={formatAmount(demoBalances[to], to)}
              currency={currencies[to]}
              label="Receive"
              onSelectCurrency={() => openPicker('to')}
            />
          </View>
          <Text style={styles.rate}>1 {from} = {rateFormat.format(rate)} {to}</Text>
        </View>

        {error && <Text accessibilityLiveRegion="polite" style={styles.error}>{error}</Text>}
        <Button title="Preview swap" disabled={!quote || Boolean(error)} onPress={showPreview} />
        <FeeDetails rows={feeRows} />
      </ScrollView>

      {picker && (
        <CurrencyPicker
          title={picker === 'from' ? 'Choose a currency to send' : 'Choose a currency to receive'}
          selected={pair[picker]}
          excluded={picker === 'from' ? to : from}
          balances={demoBalances}
          onSelect={(code) => {
            changePair({ ...pair, [picker]: code });
            setPicker(null);
          }}
          onClose={() => setPicker(null)}
        />
      )}

      <Modal
        animationType="fade"
        onRequestClose={() => setIsPreviewVisible(false)}
        transparent
        visible={isPreviewVisible}>
        <View style={styles.previewBackdrop}>
          <View accessibilityViewIsModal style={styles.preview}>
            <Text accessibilityRole="header" style={styles.previewTitle}>Exchange preview</Text>
            <Text style={styles.previewText}>
              Send {formatAmount(sendAmount, from)} {from} and receive an estimated {receiveValue} after fees.
            </Text>
            {separateGas && (
              <Text style={styles.previewText}>
                Gas is charged separately in {separateGas.code}.
              </Text>
            )}
            <Text style={styles.previewText}>This is a demo quote.</Text>
            <Button title="Close" onPress={() => setIsPreviewVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
