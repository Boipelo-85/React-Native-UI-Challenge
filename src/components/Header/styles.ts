import { StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';
import { Typography } from '../../constants/typography';

export const styles = StyleSheet.create({
  container: {
    gap: Spacing.xs,
    marginBottom: Spacing.xl,
  },
  subtitle: {
    color: Colors.textSecondary,
    ...Typography.body,
  },
  title: {
    color: Colors.text,
    ...Typography.title,
  },
});
