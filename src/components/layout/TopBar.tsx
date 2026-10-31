'use client';

import { ThemeToggle } from '@/components/common/ThemeToggle';
import styles from './TopBar.module.css';

const TICKERS = [
  { label: 'BTC/USDT', price: '$91,420.50', change: '+4.28%' },
  { label: 'ETH/USDT', price: '$3,412.10', change: '+2.15%' },
  { label: 'SOL/USDT', price: '$188.40', change: '+8.74%' },
];

export function TopBar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.tickers}>
        {TICKERS.map((t) => (
          <div key={t.label} className={styles.ticker}>
            <span className={styles.tickerLabel}>{t.label}</span>
            <span className={styles.tickerPrice} dir="ltr">{t.price}</span>
            <span className={styles.tickerChange} dir="ltr">{t.change}</span>
          </div>
        ))}
      </div>

      <div className={styles.right}>
        <div className={styles.search}>
          <input placeholder="بحث شامل: أزواج، أصول، معاملات..." />
          <kbd>⌘K</kbd>
        </div>

        <ThemeToggle />

        <button className={styles.conciergeBtn}>💬 خدمة العملاء</button>

        <div className={styles.profile}>
          <div className={styles.profileLabel}>سيادي</div>
          <div className={styles.profileTier}>VIP نخبة</div>
        </div>
      </div>
    </header>
  );
}