import { StyleSheet } from 'react-native';

import { Spacing } from '../../constants/spacing';
import { Typography } from '../../constants/typography';

export const styles = StyleSheet.create({
  container: {
    gap: Spacing.sm,
  },
  row: {
    alignItems: 'baseline',
    flexDirection: 'row',
    gap: Spacing.md,
    justifyContent: 'space-between',
  },
  label: {
    ...Typography.body,
    color: '#B0ABC3',
    flexShrink: 1,
  },
  value: {
    ...Typography.body,
    color: '#F5F3F7',
    flexShrink: 1,
    fontVariant: ['tabular-nums'],
    textAlign: 'right',
  },
});
