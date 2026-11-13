import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { CurrencyIcon } from '@/components/CurrencyIcon/CurrencyIcon';
import { currencies } from '@/constants/currencies';
import type { CurrencyCode } from '@/types';
import { formatAmount } from '@/utils/swapQuote';
import { styles } from '../CurrencyPicker/styles';

// Initialize the Currency picker Prop
type CurrencyPickerProps = {
  title: string;
  selected: CurrencyCode;
  excluded: CurrencyCode;
  balances: Record<CurrencyCode, number>;
  onSelect: (code: CurrencyCode) => void;
  onClose: () => void;
};

export function CurrencyPicker({ title, selected, excluded, balances, onSelect, onClose }: CurrencyPickerProps) {
  const [search, setSearch] = useState('');
  const query = search.trim().toLowerCase();
  const options = Object.values(currencies).filter(({ code, name }) =>
    code !== excluded && (code.toLowerCase().includes(query) || name.toLowerCase().includes(query)),
  );

  return (
    <Modal animationType="fade" transparent onRequestClose={onClose}>
      {/* Search for the currency ya looking for */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.backdrop}>

        {/* close button at the top right to close the pop up */}
        <Pressable accessible={false} importantForAccessibility="no" onPress={onClose} style={StyleSheet.absoluteFill} />
        <View accessibilityViewIsModal style={styles.panel}>
          <View style={styles.header}>
            <Text accessibilityRole="header" style={styles.title}>{title}</Text>
            <Pressable accessibilityLabel="Close currency picker" accessibilityRole="button" hitSlop={8} onPress={onClose} style={styles.close}>
              <Ionicons name="close" size={24} color="#F5F3F7" />
            </Pressable>
          </View>
          {/* Input text to search a currency */}
          <TextInput
            accessibilityLabel="Search currencies"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setSearch}
            placeholder="Search by name or symbol"
            placeholderTextColor="#B0ABC3"
            style={styles.search}
            value={search}
          />
          {/* scrollable view if the are alot there */}
          <ScrollView keyboardShouldPersistTaps="handled" style={styles.list}>
            {options.map((currency) => (
              <Pressable
                key={currency.code}
                accessibilityLabel={`${currency.name}, ${currency.code}, balance ${formatAmount(balances[currency.code], currency.code)}`}
                accessibilityRole="button"
                accessibilityState={{ selected: currency.code === selected }}
                onPress={() => onSelect(currency.code)}
                style={({ pressed }) => [styles.option, (pressed || currency.code === selected) && styles.selected]}>
                <CurrencyIcon currency={currency} />
                <View style={styles.name}>
                  <Text style={styles.symbol}>{currency.code}</Text>
                  <Text style={styles.secondary}>{currency.name}</Text>
                </View>
                <Text style={styles.secondary}>{formatAmount(balances[currency.code], currency.code)}</Text>
                {currency.code === selected && <Ionicons name="checkmark" size={18} color="#F5F3F7" />}
              </Pressable>
            ))}
            {options.length === 0 && <Text style={styles.empty}>No currencies found.</Text>}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

