import { currencies } from '@/constants/currencies';
import type { CurrencyCode } from '@/types';

type NetworkFee = { code: CurrencyCode; amount: number };
type FeeSettings = { spread: number; networkFees: Partial<Record<CurrencyCode, NetworkFee>> };

export const demoFees: FeeSettings = {
  spread: 0.002,
  networkFees: {
    ETH: { code: 'ETH', amount: 0.0045 },
    BTC: { code: 'BTC', amount: 0.00002 },
    USDT: { code: 'ETH', amount: 0.002 },
    SOL: { code: 'SOL', amount: 0.000005 },
  },
};

const fiatAmount = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 });
const cryptoAmount = new Intl.NumberFormat('en-US', { maximumFractionDigits: 6 });
export const rateFormat = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 8 });

export function formatAmount(amount: number, code: CurrencyCode) {
  return (currencies[code].type === 'fiat' ? fiatAmount : cryptoAmount).format(amount);
}

export function calculateSwapQuote(
  amount: number,
  rate: number,
  from: CurrencyCode,
  to: CurrencyCode,
  fees: FeeSettings,
) {
  if (!Number.isFinite(amount) || amount <= 0) return null;

  const networkFee = fees.networkFees[from];
  const amountAfterNetworkFee = amount - (networkFee?.code === from ? networkFee.amount : 0);
  const spreadFee = Math.max(0, amountAfterNetworkFee) * rate * fees.spread;
  const units = currencies[to].type === 'fiat' ? 100 : 1_000_000;
  const receive = Math.floor(Math.max(0, amountAfterNetworkFee * rate - spreadFee) * units) / units;

  return { receive, spreadFee, networkFee };
}
