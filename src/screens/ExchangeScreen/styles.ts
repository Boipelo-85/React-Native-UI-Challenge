import { StyleSheet } from 'react-native';

import { Spacing } from '../../constants/spacing';
import { Typography } from '../../constants/typography';

export const styles = StyleSheet.create({
  content: {
    alignSelf: 'center',
    flexGrow: 1,
    gap: Spacing.lg,
    maxWidth: 480,
    padding: Spacing.lg,
    paddingBottom: Spacing.xxl,
    width: '100%',
  },
  quote: {
    gap: Spacing.sm,
  },
  currencyFields: {
    backgroundColor: '#211E27',
    backgroundImage: 'linear-gradient(100deg, #202126, #211B24 72%, #261923)',
    borderRadius: 22,
    overflow: 'hidden',
  },
  swapControl: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: -21,
    zIndex: 1,
  },
  currencyDivider: {
    backgroundColor: '#141216',
    height: 2,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 21,
  },
  error: {
    ...Typography.body,
    color: '#FFA9B7',
  },
  rate: {
    ...Typography.body,
    color: '#F5F3F7',
    fontVariant: ['tabular-nums'],
    textAlign: 'center',
  },
  safeArea: {
    backgroundColor: '#111112',
    backgroundImage: 'linear-gradient(105deg, #111112 45%, #1E1019 100%)',
    flex: 1,
  },
  previewBackdrop: {
    alignItems: 'center',
    backgroundColor: '#0009',
    flex: 1,
    justifyContent: 'center',
    padding: Spacing.lg,
  },
  preview: {
    backgroundColor: '#211E27',
    borderRadius: 22,
    gap: Spacing.md,
    maxWidth: 400,
    padding: Spacing.lg,
    width: '100%',
  },
  previewTitle: {
    ...Typography.button,
    color: '#F5F3F7',
  },
  previewText: {
    ...Typography.body,
    color: '#D6D0DF',
  },
});
