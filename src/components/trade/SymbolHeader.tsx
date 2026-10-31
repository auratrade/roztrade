import styles from './SymbolHeader.module.css';

export function SymbolHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.icon}>₿</div>
        <div>
          <div className={styles.pair}>BTC / USDT <span className={styles.leverage}>دائم · كروس 20x</span></div>
          <div className={styles.meta}>تغذية مؤسسية</div>
        </div>
        <div className={styles.priceBlock}>
          <div className={styles.price} dir="ltr">$91,420.50 <span className={styles.change}>+4.28%</span></div>
          <div className={styles.index} dir="ltr">Index $91,418.12 · Mark $91,421.04</div>
        </div>
      </div>

      <div className={styles.stats}>
        <div><small>أعلى 24س</small><strong dir="ltr">$92,100.00</strong></div>
        <div><small>أدنى 24س</small><strong dir="ltr">$87,650.00</strong></div>
        <div><small>حجم 24س (BTC)</small><strong dir="ltr">48,92014</strong></div>
        <div><small>الدوران (USDT)</small><strong dir="ltr">$4.46B</strong></div>
      </div>

      <div className={styles.actions}>
        <button className={styles.realBtn}>حقيقي ($1,968.59)</button>
        <button className={styles.demoBtn}>تجريبي ($50k)</button>
        <span className={styles.laser}>● تغذية ليزر: عمق 99.98%</span>
      </div>
    </div>
  );
}