import type {
  CommandItem,
  LedgerEntry,
  MarketPair,
  NavItem,
  OrderBookRow,
  Position,
  WalletBreakdown,
} from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'الرئيسية / النظرة العامة', href: '/dashboard', icon: 'grid' },
  { label: 'التداول الحي والرسوم', href: '/trade', icon: 'chart' },
  { label: 'الأسواق', href: '/markets', icon: 'market' },
  { label: 'تداول النسخ', href: '/copy', icon: 'users' },
  { label: 'إشارات العقود الآجلة', href: '/signals', icon: 'bolt' },
  { label: 'الستاكينغ والعائد', href: '/staking', icon: 'layers' },
  { label: 'المحفظة والأصول', href: '/wallet', icon: 'wallet' },
];

export const WALLET: WalletBreakdown = {
  spot: 1240.20,
  futuresMargin: 628.39,
  stakedYield: 100.00,
  stakedApy: 18.4,
};

export const TOTAL_BALANCE = 1968.59;
export const TODAY_PNL = { amount: 142.80, percent: 7.82 };

export const MARKET_PAIRS: MarketPair[] = [
  { symbol: 'BTC/USDT', name: 'بيتكوين دائم', price: '$91,420.50', change: 4.28, turnover: '$184B', icon: '₿', sparkline: [10,18,15,22,28,25,34,30,38,42] },
  { symbol: 'ETH/USDT', name: 'إيثريوم دائم', price: '$3,412.10', change: 2.15, turnover: '$94M', icon: 'Ξ', sparkline: [20,22,18,25,30,28,32,35,33,38] },
  { symbol: 'SOL/USDT', name: 'سولانا عالي العائد', price: '$188.40', change: 8.74, turnover: '$62M', icon: '◎', sparkline: [10,14,12,20,25,22,30,35,40,45] },
  { symbol: 'AURA/USDT', name: 'عملة المنظومة', price: '$4.85', change: 12.50, turnover: '$285M', icon: '⬢', sparkline: [5,8,12,18,22,30,28,35,42,48] },
];

export const PRIME_COMMANDS: CommandItem[] = [
  { id: 'deposit', label: 'إيداع', icon: 'deposit' },
  { id: 'withdraw', label: 'سحب', icon: 'withdraw' },
  { id: 'transfer', label: 'تحويل', icon: 'transfer' },
  { id: 'referral', label: 'الإحالة', icon: 'referral', badge: '10.5%', highlight: true },
  { id: 'certificates', label: 'الشهادات', icon: 'cert', badge: '18.4% سنويًا' },
  { id: 'assets', label: 'مكتب الأصول', icon: 'assets' },
  { id: 'vip', label: 'نادي VIP', icon: 'vip' },
  { id: 'api', label: 'مفاتيح API', icon: 'api' },
];

export const ORDER_BOOK_ASKS: OrderBookRow[] = [
  { price: 91424.50, size: 1.842, total: 18.420 },
  { price: 91423.00, size: 0.915, total: 16.578 },
  { price: 91421.50, size: 3.412, total: 15.663 },
];

export const ORDER_BOOK_BIDS: OrderBookRow[] = [
  { price: 91419.00, size: 2.140, total: 12.180 },
  { price: 91418.50, size: 5.820, total: 18.000 },
  { price: 91417.00, size: 8.400, total: 26.400 },
];

export const POSITIONS: Position[] = [
  {
    id: '1',
    pair: 'BTC / USDT',
    side: 'LONG',
    investment: 200,
    entryPrice: 91240.00,
    markPrice: 91420.50,
    countdown: '01:42',
    pnl: 176.00,
    pnlPercent: 88.00,
    status: 'IN_MONEY',
    leverage: 'توربو دائم 3 دقائق',
  },
  {
    id: '2',
    pair: 'ETH / USDT',
    side: 'SHORT',
    investment: 100,
    entryPrice: 3425.00,
    markPrice: 3428.10,
    countdown: '03:15',
    pnl: -12.50,
    pnlPercent: -12.50,
    status: 'AT_RISK',
    leverage: 'دورة تسليم 5 دقائق',
  },
];

export const LEDGER_ENTRIES: LedgerEntry[] = [
  { id: '1', type: 'deposit', title: 'تم تأكيد الإيداع', subtitle: 'TRC-20 (USDT) 12 تأكيدًا', amount: 500, timestamp: 'منذ 14 دقيقة' },
  { id: '2', type: 'bot', title: 'تنفيذ بوت: Apex_Quant', subtitle: 'BTC/USDT دائم لونغ', amount: 48.20, timestamp: 'منذ ساعة' },
  { id: '3', type: 'yield', title: 'دفعة شهادة عائد', subtitle: 'AURA ستاكينغ ثابت #892', amount: 12.40, timestamp: 'اليوم 00:01 UTC' },
  { id: '4', type: 'transfer', title: 'تحويل للخزنة الباردة', subtitle: 'خزنة موثوقة (آمنة)', amount: -250, timestamp: 'أمس' },
];

export const SPARK_DATA = [10, 18, 15, 22, 28, 25, 34, 30, 38, 42];