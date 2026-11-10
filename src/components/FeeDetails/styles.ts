import { StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';
import { Typography } from '../../constants/typography';

export const styles = StyleSheet.create({
  container: {
    gap: Spacing.md,
    paddingHorizontal: Spacing.xs,
    paddingVertical: Spacing.sm,
  },
  label: {
    color: Colors.textSecondary,
    ...Typography.body,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    color: Colors.text,
    ...Typography.bodyEmphasis,
  },
});
