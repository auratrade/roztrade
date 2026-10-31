'use client';

import { useState } from 'react';
import styles from './TradingChart.module.css';

const TIMEFRAMES = ['1ث', '1د', '3د', '5د', '15د', '30د', '1س', '1ي'];

const CANDLES = Array.from({ length: 40 }, (_, i) => {
  const base = 90500 + i * 20;
  const up = Math.random() > 0.4;
  const open = base + Math.random() * 80;
  const close = up ? open + 40 + Math.random() * 60 : open - 30 - Math.random() * 60;
  const high = Math.max(open, close) + Math.random() * 30;
  const low = Math.min(open, close) - Math.random() * 30;
  return { open, close, high, low, up };
});

export function TradingChart() {
  const [tf, setTf] = useState('5د');

  return (
    <div className={styles.card}>
      <div className={styles.toolbar}>
        <div className={styles.timeframes}>
          {TIMEFRAMES.map((t) => (
            <button key={t} className={t === tf ? styles.tfActive : styles.tf} onClick={() => setTf(t)}>
              {t}
            </button>
          ))}
        </div>
        <div className={styles.indicators}>
          <span>MA(7): 91,380</span>
          <span>MA(25): 91,120</span>
          <span>EMA(99): 90,840</span>
          <button className={styles.indBtn}>المؤشرات</button>
        </div>
      </div>

      <div className={styles.chartArea}>
        <div className={styles.priceLabel} dir="ltr">$91,420.50 ↑</div>
        <svg className={styles.candles} viewBox="0 0 800 320" preserveAspectRatio="none">
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1="0" x2="800" y1={i * 80} y2={i * 80} stroke="var(--border-subtle)" strokeDasharray="3 3" />
          ))}
          {CANDLES.map((c, i) => {
            const x = i * 20 + 5;
            const scale = (v: number) => 320 - ((v - 90000) / 3000) * 320;
            const bodyTop = scale(Math.max(c.open, c.close));
            const bodyHeight = Math.abs(scale(c.open) - scale(c.close)) || 2;
            const color = c.up ? '#00e5a0' : '#ff4d6a';
            return (
              <g key={i}>
                <line x1={x + 5} x2={x + 5} y1={scale(c.high)} y2={scale(c.low)} stroke={color} strokeWidth="1" />
                <rect x={x} y={bodyTop} width="10" height={bodyHeight} fill={color} rx="1" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className={styles.footer}>
        <span>● مجمّع بينانس للعقود</span>
        <span>معدل التمويل: +0.0102%</span>
        <span>الحجم: 14.8K</span>
      </div>
    </div>
  );
}