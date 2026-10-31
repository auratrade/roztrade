export interface NavItem {
  label: string;
  href: string;
  icon: string;
  badge?: string;
}

export interface WalletBreakdown {
  spot: number;
  futuresMargin: number;
  stakedYield: number;
  stakedApy: number;
}

export interface MarketPair {
  symbol: string;
  name: string;
  price: string;
  change: number;
  turnover: string;
  icon: string;
  sparkline: number[];
}

export interface Position {
  id: string;
  pair: string;
  side: 'LONG' | 'SHORT';
  investment: number;
  entryPrice: number;
  markPrice: number;
  countdown: string;
  pnl: number;
  pnlPercent: number;
  status: 'IN_MONEY' | 'AT_RISK';
  leverage: string;
}

export interface OrderBookRow {
  price: number;
  size: number;
  total: number;
}

export interface CommandItem {
  id: string;
  label: string;
  icon: string;
  badge?: string;
  highlight?: boolean;
}

export interface LedgerEntry {
  id: string;
  type: 'deposit' | 'bot' | 'yield' | 'transfer';
  title: string;
  subtitle: string;
  amount: number;
  timestamp: string;
}