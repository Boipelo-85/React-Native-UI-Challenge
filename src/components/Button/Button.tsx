import { useState } from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export function Button({ title, onPress, disabled = false }: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.disabled,
        hovered && !disabled && styles.hovered,
        pressed && !disabled && styles.pressed,
      ]}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}
