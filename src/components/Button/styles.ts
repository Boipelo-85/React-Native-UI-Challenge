import { StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';
import { Typography } from '../../constants/typography';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: Spacing.md,
    justifyContent: 'center',
    minHeight: 56,
    paddingHorizontal: Spacing.lg,
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.8,
  },
  title: {
    color: Colors.surface,
    ...Typography.button,
  },
});
