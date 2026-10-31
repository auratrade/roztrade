'use client';

import { AppShell } from '@/components/layout/AppShell';
import { SymbolHeader } from '@/components/trade/SymbolHeader';
import { TradingChart } from '@/components/trade/TradingChart';
import { ExecutionDesk } from '@/components/trade/ExecutionDesk';
import { OrderBook } from '@/components/trade/OrderBook';
import { PositionsTable } from '@/components/trade/PositionsTable';
import styles from './trade.module.css';

export default function TradePage() {
  return (
    <AppShell>
      <div className={styles.page}>
        <SymbolHeader />
        <div className={styles.tradeGrid}>
          <div className={styles.chartCol}>
            <TradingChart />
            <PositionsTable />
          </div>
          <div className={styles.sideCol}>
            <ExecutionDesk />
            <OrderBook />
          </div>
        </div>
      </div>
    </AppShell>
  );
}