import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Pressable } from 'react-native';

import { styles } from './styles';

type SwapButtonProps = {
  onPress: () => void;
};

export function SwapButton({ onPress }: SwapButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      accessibilityLabel="Swap currencies"
      accessibilityRole="button"
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPress={onPress}
      style={({ pressed }) => [styles.button, hovered && styles.hovered, pressed && styles.pressed]}>
      <Ionicons name="swap-vertical" size={22} style={styles.icon} />
    </Pressable>
  );
}
