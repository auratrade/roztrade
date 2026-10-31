'use client';

import { useState } from 'react';
import { Button } from '@/components/common/Button';
import styles from './ExecutionDesk.module.css';

const CYCLES = [
  { label: '1 دقيقة', yield: '85% عائد' },
  { label: '3 دقائق', yield: '88% عائد' },
  { label: '5 دقائق', yield: '92% عائد', active: true },
  { label: '15 دقيقة', yield: '95% عائد' },
];

const PRESETS = [50, 100, 200, 500];

export function ExecutionDesk() {
  const [amount, setAmount] = useState('200');

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>مكتب التنفيذ</h3>
        <span className={styles.yieldBadge}>أقصى عائد: 95%</span>
      </div>

      <div className={styles.cycleGrid}>
        {CYCLES.map((c) => (
          <button key={c.label} className={c.active ? styles.cycleActive : styles.cycle}>
            <span>{c.label}</span>
            <small>{c.yield}</small>
          </button>
        ))}
      </div>

      <div className={styles.capital}>
        <div className={styles.capitalLabel}>رأس المال الاستثماري</div>
        <div className={styles.capitalAvail}>المتاح: $1,968.59 USDT</div>
        <div className={styles.inputWrap}>
          <span>$</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={styles.input}
            dir="ltr"
          />
          <span className={styles.unit}>USDT</span>
        </div>
      </div>

      <div className={styles.presets}>
        {PRESETS.map((p) => (
          <button key={p} className={styles.preset} dir="ltr">${p}</button>
        ))}
        <button className={styles.presetMax}>أقصى</button>
      </div>

      <div className={styles.payout}>
        <div>
          <div className={styles.payoutLabel}>الدفعة المتوقعة</div>
          <div className={styles.payoutValue} dir="ltr">+$184.00 USDT</div>
          <div className={styles.payoutPercent} dir="ltr">(+92%)</div>
        </div>
        <span className={styles.guaranteed}>سعر مضمون</span>
      </div>

      <div className={styles.protection}>
        <span>🛡 إيقاف تلقائي: حماية هامش 100%</span>
        <span>الانزلاق ≤ 0.02%</span>
      </div>

      <div className={styles.actions}>
        <Button variant="primary" size="lg" fullWidth>
          شراء ↗ <small>عائد +92%</small>
        </Button>
        <Button variant="danger" size="lg" fullWidth>
          بيع ↙ <small>عائد +92%</small>
        </Button>
      </div>
    </div>
  );
}