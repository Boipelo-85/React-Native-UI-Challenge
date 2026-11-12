import { StyleSheet } from 'react-native';

import { Spacing } from '../../constants/spacing';

export const styles = StyleSheet.create({
  card: {
    gap: Spacing.md,
    padding: Spacing.lg,
  },
  currencyRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  currencyIcon: {
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
  currencyCode: {
    color: '#F5F3F7',
    fontSize: 23,
  },
  chevron: {
    color: '#B0ABC3',
  },
  amount: {
    color: '#F5F3F7',
    fontSize: 50,
    fontVariant: ['tabular-nums'],
    lineHeight: 60,
    padding: 0,
  },
  balanceRow: {
    alignItems: 'baseline',
    flexDirection: 'row',
    gap: Spacing.sm,
    justifyContent: 'space-between',
  },
  balance: {
    color: '#B0ABC3',
    fontSize: 15,
  },
  balanceValue: {
    flexShrink: 1,
    textAlign: 'right',
  },
});
