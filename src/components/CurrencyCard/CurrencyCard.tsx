import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, Text, TextInput, View } from 'react-native';

import { CurrencyIcon } from '@/components/CurrencyIcon/CurrencyIcon';
import type { Currency } from '@/types';
import { styles } from './styles';

type CurrencyCardProps = {
  label: string;
  currency: Currency;
  amount: string;
  balance: string;
  onSelectCurrency: () => void;
  onAmountChange?: (amount: string) => void;
};

export function CurrencyCard({ label, currency, amount, balance, onSelectCurrency, onAmountChange }: CurrencyCardProps) {
  const amountLabel = `${label} amount in ${currency.code}`;

  return (
    <View style={styles.card}>
      <Pressable
        accessibilityLabel={`${label} currency, ${currency.name}`}
        accessibilityRole="button"
        hitSlop={4}
        onPress={onSelectCurrency}
        style={({ pressed }) => [styles.currencyRow, pressed && styles.pressed]}>
        <CurrencyIcon currency={currency} />
        <Text style={styles.currencyCode}>{currency.code}</Text>
        <Ionicons name="chevron-down" size={13} style={styles.chevron} aria-hidden />
      </Pressable>
      {onAmountChange ? (
        <TextInput
          accessibilityLabel={amountLabel}
          keyboardType="decimal-pad"
          onChangeText={onAmountChange}
          placeholder="0.00"
          placeholderTextColor={styles.balance.color}
          style={styles.amount}
          value={amount}
        />
      ) : (
        <Text
          accessibilityLabel={`${amountLabel}: ${amount}`}
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.amount}>
          {amount}
        </Text>
      )}
      <View style={styles.balanceRow}>
        <Text style={styles.balance}>Balance</Text>
        <Text style={[styles.balance, styles.balanceValue]}>{balance}</Text>
      </View>
    </View>
  );
}
