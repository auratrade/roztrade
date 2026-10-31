import { TOTAL_BALANCE, TODAY_PNL, WALLET } from '@/lib/mock-data';
import styles from './PrimeWalletCard.module.css';

export function PrimeWalletCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>المحفظة المؤسسية الرئيسية</div>
          <div className={styles.sub}>توقيع متعدد v3 • معرف الحفظ: AUR-9884-XO</div>
        </div>
        <span className={styles.eye}>👁</span>
      </div>

      <div className={styles.label}>إجمالي صافي قيمة الأصول</div>
      <div className={styles.balance}>
        {TOTAL_BALANCE.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        <span className={styles.currency}> USDT</span>
      </div>
      <div className={styles.subBalance}>≈ $1,970.12 دولار</div>

      <div className={styles.pnl}>
        ↑ +${TODAY_PNL.amount.toFixed(2)} ({TODAY_PNL.percent}%) اليوم
      </div>

      <div className={styles.breakdown}>
        <div className={styles.breakdownItem}>
          <span>محفظة فورية</span>
          <strong>${WALLET.spot.toFixed(2)}</strong>
          <small>نسبة 63.0%</small>
        </div>
        <div className={styles.breakdownItem}>
          <span>هامش العقود</span>
          <strong>${WALLET.futuresMargin.toFixed(2)}</strong>
          <small>31.9% نشط</small>
        </div>
        <div className={styles.breakdownItem}>
          <span>الستاكينغ</span>
          <strong>${WALLET.stakedYield.toFixed(2)}</strong>
          <small>+{WALLET.stakedApy}% سنويًا</small>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.primaryAction}>⊕ إيداع سريع</button>
        <button className={styles.ghostAction}>↑ سحب</button>
        <button className={styles.ghostAction}>⇄ تحويل</button>
      </div>
    </div>
  );
}