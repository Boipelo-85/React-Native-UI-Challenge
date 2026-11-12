import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Text, TextInput, View } from 'react-native';

import type { Currency } from '../../types';
import { styles } from './styles';

type CurrencyCardProps = {
  label: string;
  currency: Currency;
  amount: string;
  onAmountChange?: (amount: string) => void;
};

export function CurrencyCard({ label, currency, amount, onAmountChange }: CurrencyCardProps) {
  const amountLabel = `${label} amount in ${currency.code}`;

  return (
    <View style={styles.card}>
      <View style={styles.currencyRow}>
        <View style={[styles.currencyIcon, currency.code === 'ETH' && styles.ethIcon]} aria-hidden>
          <MaterialCommunityIcons
            name={currency.code === 'ETH' ? 'ethereum' : 'currency-usd'}
            size={28}
            style={styles.currencyCode}
          />
        </View>
        <Text style={styles.currencyCode}>{currency.code}</Text>
        <Ionicons name="chevron-down" size={13} style={styles.chevron} aria-hidden />
      </View>
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
        <Text style={[styles.balance, styles.balanceValue]}>{currency.balance}</Text>
      </View>
    </View>
  );
}
