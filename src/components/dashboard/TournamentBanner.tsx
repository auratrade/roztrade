import styles from './TournamentBanner.module.css';

export function TournamentBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <span className={styles.liveBadge}>بطولة مباشرة</span>
        <span className={styles.title}>⭐ بطولة ROZ العالمية للعقود الآجلة</span>
        <span className={styles.desc}>
          تنافس على جوائز تصل إلى 500,000 USDT! المرحلة الثالثة انطلقت.
        </span>
      </div>
      <div className={styles.right}>
        <div className={styles.timer}>
          <span className={styles.timerLabel}>تُغلق خلال</span>
          <span className={styles.timerValue}>04 : 18 : 32 : 41</span>
        </div>
        <button className={styles.joinBtn}>انضم للبطولة ←</button>
      </div>
    </div>
  );
}