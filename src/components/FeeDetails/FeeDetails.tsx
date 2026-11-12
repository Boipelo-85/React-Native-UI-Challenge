import { Text, View } from 'react-native';

import { styles } from './styles';

type FeeDetailsProps = {
  rows: readonly { label: string; value: string }[];
};

export function FeeDetails({ rows }: FeeDetailsProps) {
  return (
    <View style={styles.container}>
      {rows.map(({ label, value }) => (
        <View key={label} style={styles.row}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}
    </View>
  );
}

