import styles from './CopyTradingCard.module.css';

export function CopyTradingCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3>تداول نسخ العقود الآجلة</h3>
          <p>نسخ تلقائي لتجار كميين مؤسسيين</p>
        </div>
        <span className={styles.tier}>ماستر المستوى 1</span>
      </div>

      <div className={styles.trader}>
        <div className={styles.avatar}>AQ</div>
        <div className={styles.info}>
          <div className={styles.name}>Apex_Quant <span className={styles.verified}>✓</span></div>
          <div className={styles.meta}>AUM: $2,840,190 USDT · 1,420 ناسخ</div>
        </div>
      </div>

      <div className={styles.stats}>
        <div><small>عائد 3 أيام</small><strong className={styles.positive}>+284.5%</strong></div>
        <div><small>نسبة الفوز</small><strong>94.2%</strong></div>
        <div><small>أقصى تراجع</small><strong className={styles.negative}>-4.12%</strong></div>
      </div>

      <div className={styles.executions}>
        <small>آخر التنفيذات:</small>
        <span>BTC لونغ +42.1%</span>
        <span>SOL لونغ +68.4%</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.primaryAction}>انسخ الآن (⟳)</button>
        <button className={styles.ghostAction}>عرض الملف</button>
      </div>
    </div>
  );
}