import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, View } from 'react-native';

import type { Currency } from '@/types';

export function CurrencyIcon({ currency }: { currency: Currency }) {
  return (
    <View style={[styles.icon, currency.code === 'ETH' && styles.ethIcon]} aria-hidden>
      <MaterialCommunityIcons name={currency.icon} color="#F5F3F7" size={26} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    backgroundColor: '#2A2A31',
    borderRadius: 21,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  ethIcon: {
    backgroundColor: '#111114',
  },
});
