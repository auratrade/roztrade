import { PRIME_COMMANDS } from '@/lib/mock-data';
import { Icon } from '@/components/common/Icon';
import styles from './PrimeCommands.module.css';

export function PrimeCommands() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>الأوامر الرئيسية</h3>
        <span className={styles.sub}>8 أدوات نشطة</span>
      </div>

      <div className={styles.grid}>
        {PRIME_COMMANDS.map((cmd) => (
          <button
            key={cmd.id}
            className={`${styles.command} ${cmd.highlight ? styles.highlight : ''}`}
          >
            {cmd.badge && <span className={styles.badge}>{cmd.badge}</span>}
            <span className={styles.icon}>
              <Icon name={cmd.icon} size={20} />
            </span>
            <span className={styles.label}>{cmd.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.footer}>
        <span>🛡 حماية محفظة صلبة بدون معرفة نشطة</span>
        <strong>99.98% اتفاقية خدمة</strong>
      </div>
    </div>
  );
}