import { Pressable, Text } from 'react-native';

import { styles } from './styles';

type SwapButtonProps = {
  onPress: () => void;
};

export function SwapButton({ onPress }: SwapButtonProps) {
  return (
    <Pressable
      accessibilityLabel="Swap currencies"
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <Text style={styles.icon}>⇅</Text>
    </Pressable>
  );
}
