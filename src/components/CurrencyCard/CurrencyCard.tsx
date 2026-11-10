import { Text, TextInput, View } from 'react-native';

import { Colors } from '../../constants/colors';
import type { Currency } from '../../types';
import { styles } from './styles';

type CurrencyCardProps = {
  label: string;
  currency: Currency;
  amount: string;
  onAmountChange?: (amount: string) => void;
};

export function CurrencyCard({
  label,
  currency,
  amount,
  onAmountChange,
}: CurrencyCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.currency}>
          <Text style={styles.currencyCode}>{currency.code}</Text>
          <Text style={styles.currencyName}>{currency.name}</Text>
        </View>
      </View>
      <TextInput
        accessibilityLabel={`${label} amount in ${currency.code}`}
        editable={onAmountChange !== undefined}
        keyboardType="decimal-pad"
        onChangeText={onAmountChange}
        placeholder="0.00"
        placeholderTextColor={Colors.textSecondary}
        style={styles.amount}
        value={amount}
      />
    </View>
  );
}
