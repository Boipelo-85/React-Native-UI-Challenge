import type { Currency, CurrencyCode } from '@/types';


//Declaration of currency to chhose what you wanna swap with
export const currencies: Record<CurrencyCode, Currency> = {
  ETH: { code: 'ETH', name: 'Ethereum', icon: 'ethereum', type: 'crypto' },
  BTC: { code: 'BTC', name: 'Bitcoin', icon: 'bitcoin', type: 'crypto' },
  USDT: { code: 'USDT', name: 'Tether', icon: 'alpha-t-circle-outline', type: 'crypto' },
  SOL: { code: 'SOL', name: 'Solana', icon: 'alpha-s-circle-outline', type: 'crypto' },
  USD: { code: 'USD', name: 'US Dollar', icon: 'currency-usd', type: 'fiat' },
  EUR: { code: 'EUR', name: 'Euro', icon: 'currency-eur', type: 'fiat' },
  GBP: { code: 'GBP', name: 'British Pound', icon: 'currency-gbp', type: 'fiat' },
  ZAR: { code: 'ZAR', name: 'South African Rand', icon: 'currency-sign', type: 'fiat' },
};

export const demoBalances: Record<CurrencyCode, number> = {
  ETH: 293.0187, BTC: 0.1842, USDT: 840.5, SOL: 36.75,
  USD: 12987.21, EUR: 2450, GBP: 980.45, ZAR: 18760.25,
};

const demoUsdPrices: Record<CurrencyCode, number> = {
  ETH: 3461.02, BTC: 97000, USDT: 1, SOL: 185,
  USD: 1, EUR: 1.08, GBP: 1.27, ZAR: 0.055,
};

export function getDemoRate(from: CurrencyCode, to: CurrencyCode) {
  return demoUsdPrices[from] / demoUsdPrices[to];
}
