import type MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { ComponentProps } from 'react';

export type CurrencyCode = 'ETH' | 'BTC' | 'USDT' | 'SOL' | 'USD' | 'EUR' | 'GBP' | 'ZAR';

export type Currency = {
  code: CurrencyCode;
  name: string;
  icon: ComponentProps<typeof MaterialCommunityIcons>['name'];
  type: 'crypto' | 'fiat';
};
