import { StyleSheet } from 'react-native';

import { Spacing } from '../../constants/spacing';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#F4F1F3',
    backgroundImage: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 45%, #D0C5CC 100%)',
    borderRadius: 28,
    justifyContent: 'center',
    minHeight: 50,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
  disabled: {
    opacity: 0.5,
  },
  hovered: {
    backgroundColor: '#E7DCE6',
    backgroundImage: 'linear-gradient(90deg, #F7EDF6, #DACBDD)',
  },
  pressed: {
    backgroundColor: '#D1C0D2',
    backgroundImage: 'linear-gradient(90deg, #E5D7E6, #C8B7CA)',
  },
  title: {
    color: '#151216',
    fontSize: 16,
    textAlign: 'center',
  },
});
