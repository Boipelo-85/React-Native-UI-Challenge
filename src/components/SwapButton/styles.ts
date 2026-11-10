import { StyleSheet } from 'react-native';

import { Colors } from '../../constants/colors';
import { Spacing } from '../../constants/spacing';
import { Typography } from '../../constants/typography';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.accentSoft,
    borderColor: Colors.surface,
    borderRadius: Spacing.xl,
    borderWidth: 4,
    height: 48,
    justifyContent: 'center',
    marginVertical: -Spacing.sm,
    width: 48,
    zIndex: 1,
  },
  icon: {
    color: Colors.primary,
    ...Typography.swapIcon,
  },
  pressed: {
    opacity: 0.75,
  },
});
