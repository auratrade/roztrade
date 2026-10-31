import { LEDGER_ENTRIES } from '@/lib/mock-data';
import styles from './LedgerStream.module.css';

const ICONS: Record<string, string> = {
  deposit: '✓',
  bot: '🤖',
  yield: '🪙',
  transfer: '↗',
};

export function LedgerStream() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>سجل المعاملات</h3>
        <a href="#" className={styles.fullHistory}>السجل الكامل</a>
      </div>

      <div className={styles.list}>
        {LEDGER_ENTRIES.map((e) => (
          <div key={e.id} className={styles.entry}>
            <div className={styles.icon}>{ICONS[e.type]}</div>
            <div className={styles.content}>
              <div className={styles.title}>{e.title}</div>
              <div className={styles.sub}>{e.subtitle}</div>
            </div>
            <div className={styles.amountCol}>
              <div className={`${styles.amount} ${e.amount < 0 ? styles.neg : styles.pos}`} dir="ltr">
                {e.amount > 0 ? '+' : ''}${Math.abs(e.amount).toFixed(2)}
              </div>
              <div className={styles.time}>{e.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}