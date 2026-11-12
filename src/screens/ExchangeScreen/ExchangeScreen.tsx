import { useState } from 'react';
import { Keyboard, Modal, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/Button/Button';
import { CurrencyCard } from '@/components/CurrencyCard/CurrencyCard';
import { FeeDetails } from '@/components/FeeDetails/FeeDetails';
import { Header } from '@/components/Header/Header';
import { SwapButton } from '@/components/SwapButton/SwapButton';
import type { Currency } from '@/types';
import { styles } from './styles';

const ETH: Currency = { code: 'ETH', balance: '293.0187' };
const USD: Currency = { code: 'USD', balance: '12,987.21' };
const SAMPLE_USD_PER_ETH = 3461.02;
const usdAmount = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 });
const ethAmount = new Intl.NumberFormat('en-US', { maximumFractionDigits: 6 });

export default function ExchangeScreen() {
  const [isReversed, setIsReversed] = useState(false);
  const [amount, setAmount] = useState('12.695');
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const buyCurrency = isReversed ? USD : ETH;
  const payCurrency = isReversed ? ETH : USD;
  const rate = isReversed ? 1 / SAMPLE_USD_PER_ETH : SAMPLE_USD_PER_ETH;
  const buyAmount = Number(amount);
  const hasQuote = Number.isFinite(buyAmount) && buyAmount > 0;
  const payFormatter = isReversed ? ethAmount : usdAmount;
  const buyFormatter = isReversed ? usdAmount : ethAmount;
  const payAmount = hasQuote ? payFormatter.format(buyAmount * rate) : '0';
  const receiveValue = hasQuote ? `${buyFormatter.format(buyAmount)} ${buyCurrency.code}` : '—';
  const rateLabel = `1 ${buyCurrency.code} = ${payFormatter.format(rate)} ${payCurrency.code}`;

  const feeRows = [
    { label: 'Estimated fee', value: hasQuote ? '4.28 USD' : '—' },
    { label: 'You will receive', value: receiveValue },
    { label: 'Spread', value: hasQuote ? '0.2%' : '—' },
    { label: 'Gas fee', value: hasQuote ? '0.0045 ETH' : '—' },
  ];

  function changeAmount(value: string) {
    const decimalAmount = value.replace(',', '.');
    if (/^\d{0,10}(\.\d{0,6})?$/.test(decimalAmount)) {
      setAmount(decimalAmount);
    }
  }

  function showPreview() {
    Keyboard.dismiss();
    setIsPreviewVisible(true);
  }

  function closePreview() {
    setIsPreviewVisible(false);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Header title="Exchange" />

        <View style={styles.quote}>
          <View style={styles.currencyFields}>
            <CurrencyCard
              amount={amount}
              currency={buyCurrency}
              label="Buy"
              onAmountChange={changeAmount}
            />
            <View pointerEvents="box-none" style={styles.swapControl}>
              <View pointerEvents="none" style={styles.currencyDivider} />
              <SwapButton onPress={() => setIsReversed((reversed) => !reversed)} />
            </View>
            <CurrencyCard amount={payAmount} currency={payCurrency} label="Estimated payment" />
          </View>
          <Text style={styles.rate}>{rateLabel}</Text>
        </View>

        <Button title={`Buy ${buyCurrency.code}`} disabled={!hasQuote} onPress={showPreview} />
        <FeeDetails rows={feeRows} />
      </ScrollView>

      <Modal
        animationType="fade"
        onRequestClose={closePreview}
        transparent
        visible={isPreviewVisible}>
        <View style={styles.previewBackdrop}>
          <View accessibilityViewIsModal style={styles.preview}>
            <Text accessibilityRole="header" style={styles.previewTitle}>Exchange preview</Text>
            <Text style={styles.previewText}>
              Buy {receiveValue} for an estimated {payAmount} {payCurrency.code} before fees.
              This is a demo quote.
            </Text>
            <Button title="Close" onPress={closePreview} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
