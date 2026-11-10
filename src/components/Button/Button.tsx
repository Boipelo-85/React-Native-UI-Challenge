import { Pressable, Text } from 'react-native';

import { styles } from './styles';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
};

export function Button({ title, onPress, disabled = false }: ButtonProps) {
  const isDisabled = disabled || !onPress;

  return (
    <Pressable
      accessibilityRole="button"
      disabled={isDisabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isDisabled && styles.disabled,
        pressed && !isDisabled && styles.pressed,
      ]}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}
