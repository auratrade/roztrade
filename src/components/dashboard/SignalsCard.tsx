import styles from './SignalsCard.module.css';

const SIGNALS = [
  {
    pair: 'BTC/USDT',
    direction: 'شراء',
    leverage: '20x',
    conviction: 92,
    entry: '$90,800.00',
    target: '$93,500.00',
    stopLoss: '$89,400.00',
  },
  {
    pair: 'ETH/USDT',
    direction: 'شراء',
    leverage: '15x',
    conviction: 88,
    entry: '$3,380.00',
    target: '$3,580.00',
    stopLoss: '$3,300.00',
  },
];

export function SignalsCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3>الإشارات ورادار الذكاء الاصطناعي</h3>
          <p>متجهات قناعة خوارزمية في الوقت الحقيقي</p>
        </div>
        <span className={styles.live}>● بث مباشر</span>
      </div>

      {SIGNALS.map((s) => (
        <div key={s.pair} className={styles.signal}>
          <div className={styles.signalHeader}>
            <span className={styles.direction}>{s.direction}</span>
            <strong>{s.pair}</strong>
            <span className={styles.leverage}>{s.leverage} رافعة</span>
            <span className={styles.conviction}>القناعة: {s.conviction}%</span>
          </div>
          <div className={styles.signalRow}>
            <div><small>منطقة الدخول</small><strong>{s.entry}</strong></div>
            <div><small>الهدف (TP)</small><strong className={styles.tp}>{s.target}</strong></div>
            <div><small>وقف الخسارة (SL)</small><strong className={styles.sl}>{s.stopLoss}</strong></div>
          </div>
          <button className={styles.executeBtn}>▶ تنفيذ الإشارة بنقرة</button>
        </div>
      ))}
    </div>
  );
}