import { StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';
import { Typography } from '../../constants/typography';

export const styles = StyleSheet.create({
  amount: {
    color: Colors.text,
    padding: 0,
    ...Typography.amount,
  },
  card: {
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    borderRadius: Spacing.lg,
    borderWidth: 1,
    gap: Spacing.lg,
    padding: Spacing.lg,
  },
  currency: {
    alignItems: 'flex-end',
    gap: Spacing.xs,
  },
  currencyCode: {
    color: Colors.text,
    ...Typography.currency,
  },
  currencyName: {
    color: Colors.textSecondary,
    ...Typography.caption,
  },
  label: {
    color: Colors.textSecondary,
    ...Typography.body,
  },
  topRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
