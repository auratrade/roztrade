'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/mock-data';
import { Icon } from '@/components/common/Icon';
import styles from './Sidebar.module.css';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <div className={styles.logo}>
          <span className={styles.logoMark}>ر</span>
          <div>
            <div className={styles.logoTitle}>ROZ-TRADE</div>
            <div className={styles.logoSub}>احترافي v3.4</div>
          </div>
        </div>
      </div>

      <div className={styles.account}>
        <div className={styles.accountLabel}>الوضع المحدد</div>
        <div className={styles.accountRow}>
          <span className={styles.dot} />
          <div>
            <div className={styles.accountName}>حساب حقيقي</div>
            <div className={styles.accountBalance}>$1,968.59 USDT</div>
          </div>
          <button className={styles.switchBtn}>تبديل</button>
        </div>
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${active ? styles.active : ''}`}
            >
              <Icon name={item.icon} size={16} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <div className={styles.concierge}>
          <Icon name="headset" size={16} />
          <div>
            <div className={styles.conciergeTitle}>خدمة كبار العملاء</div>
            <div className={styles.conciergeSub}>مكتب 24/7 نشط</div>
          </div>
          <span className={styles.onlineDot} />
        </div>
        <div className={styles.latency}>● استجابة 14ms</div>
      </div>
    </aside>
  );
}