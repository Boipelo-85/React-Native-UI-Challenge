import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';

import { styles } from './styles';

// Initialize the head props section
type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.side} aria-hidden>
        <Ionicons name="chevron-back" size={20} style={styles.backIcon} />
      </View>
      <Text accessibilityRole="header" style={styles.title}>
        {title}
      </Text>
      <View style={styles.side} aria-hidden>
        <View>
          <Ionicons name="notifications" size={23} style={styles.bellIcon} />
          <View style={styles.notificationDot} />
        </View>
      </View>
    </View>
  );
}
