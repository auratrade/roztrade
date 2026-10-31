'use client';

import { useState } from 'react';
import { POSITIONS } from '@/lib/mock-data';
import styles from './PositionsTable.module.css';

const TABS = ['الأوامر الحالية', 'سجل الأوامر', 'تتبع الاستراتيجية', 'تحليل الأرباح'];

export function PositionsTable() {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.tabs}>
          {TABS.map((t) => (
            <button
              key={t}
              className={t === tab ? styles.tabActive : styles.tab}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className={styles.actions}>
          <button className={styles.ghostBtn}>📤 مشاركة بطاقة الأرباح</button>
          <button className={styles.ghostBtn}>✕ إغلاق كل المراكز</button>
        </div>
      </div>

      <div className={styles.table}>
        <div className={styles.tableHead}>
          <span>العقد / الزوج</span>
          <span>الاتجاه</span>
          <span>الاستثمار</span>
          <span>سعر الدخول</span>
          <span>السعر الحالي</span>
          <span>العد التنازلي</span>
          <span>ربح/خسارة غير محقق</span>
          <span>الحالة</span>
        </div>

        {POSITIONS.map((p) => (
          <div key={p.id} className={styles.row}>
            <div className={styles.pairCell}>
              <span className={`${styles.dot} ${p.side === 'LONG' ? styles.dotLong : styles.dotShort}`} />
              <div>
                <strong>{p.pair}</strong>
                <small>{p.leverage}</small>
              </div>
            </div>
            <span className={`${styles.side} ${p.side === 'LONG' ? styles.long : styles.short}`}>
              {p.side === 'LONG' ? '↗ شراء' : '↘ بيع'}
            </span>
            <span dir="ltr">${p.investment.toFixed(2)} USDT</span>
            <span dir="ltr">{p.entryPrice.toLocaleString()}</span>
            <span dir="ltr">{p.markPrice.toLocaleString()}</span>
            <span className={styles.countdown} dir="ltr">⏱ {p.countdown}</span>
            <div>
              <div className={`${styles.pnl} ${p.pnl >= 0 ? styles.pos : styles.neg}`} dir="ltr">
                {p.pnl >= 0 ? '+' : ''}${p.pnl.toFixed(2)}
              </div>
              <small className={p.pnl >= 0 ? styles.pos : styles.neg} dir="ltr">
                {p.pnlPercent.toFixed(2)}% ROE
              </small>
            </div>
            <span className={`${styles.status} ${p.status === 'IN_MONEY' ? styles.inMoney : styles.atRisk}`}>
              {p.status === 'IN_MONEY' ? '● في الربح' : '▲ في خطر'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}