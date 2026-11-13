import { StyleSheet } from 'react-native';

import { Spacing } from '../../constants/spacing';

export const styles = StyleSheet.create({
  card: {
    gap: Spacing.md,
    padding: Spacing.lg,
  },
  currencyRow: {
    alignSelf: 'flex-start',
    minHeight: 44,
    alignItems: 'center',
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  pressed: {
    opacity: 0.7,
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
