import { Text, View, type StyleProp, type TextStyle } from 'react-native';

import { styles } from './styles';

type HeaderProps = {
  title: string;
  subtitle: string;
  titleStyle?: StyleProp<TextStyle>;
};

export function Header({ title, subtitle, titleStyle }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
