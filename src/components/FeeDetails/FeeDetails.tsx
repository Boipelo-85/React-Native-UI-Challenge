import { Text, View } from 'react-native';

import { styles } from './styles';

type FeeDetailsProps = {
  exchangeRate: string;
  fee: string;
};

export function FeeDetails({ exchangeRate, fee }: FeeDetailsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Exchange rate</Text>
        <Text style={styles.value}>{exchangeRate}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Network fee</Text>
        <Text style={styles.value}>{fee}</Text>
      </View>
    </View>
  );
}
