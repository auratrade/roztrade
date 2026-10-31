import { MARKET_PAIRS } from '@/lib/mock-data';
import { Sparkline } from '@/components/common/Sparkline';
import styles from './MarketMovers.module.css';

export function MarketMovers() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3>محركات السوق الحية</h3>
          <p>تغذيات دفتر أوامر لحظية من أسواق عالمية</p>
        </div>
      </div>

      <div className={styles.tabs}>
        <button className={styles.tabActive}>ساخن</button>
        <button className={styles.tab}>الرابحون</button>
        <button className={styles.tab}>عقود 50x</button>
      </div>

      <div className={styles.table}>
        <div className={styles.tableHead}>
          <span>زوج التداول</span>
          <span>آخر سعر</span>
          <span>تغير 24س</span>
          <span>الاتجاه</span>
          <span>حجم 24س</span>
        </div>
        {MARKET_PAIRS.map((p) => (
          <div key={p.symbol} className={styles.row}>
            <div className={styles.pair}>
              <span className={styles.pairIcon}>{p.icon}</span>
              <div>
                <strong>{p.symbol}</strong>
                <small>{p.name}</small>
              </div>
            </div>
            <span className={styles.price} dir="ltr">{p.price}</span>
            <span className={styles.change} dir="ltr">+{p.change}%</span>
            <div className={styles.spark}>
              <Sparkline data={p.sparkline} width={80} height={24} />
            </div>
            <span className={styles.turnover} dir="ltr">{p.turnover}</span>
          </div>
        ))}
      </div>
    </div>
  );
}