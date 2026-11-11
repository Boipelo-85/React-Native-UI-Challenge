import { StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';

export const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    gap: Spacing.lg,
    justifyContent: 'center',
    padding: Spacing.lg,
  },
  currencyFields: {
    gap: Spacing.sm,
  },
  safeArea: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  title: {
    color: '#f5f5f5',
    fontSize: 20
  },
});
