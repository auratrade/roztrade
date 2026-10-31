'use client';

import { AppShell } from '@/components/layout/AppShell';
import { TournamentBanner } from '@/components/dashboard/TournamentBanner';
import { PrimeWalletCard } from '@/components/dashboard/PrimeWalletCard';
import { PrimeCommands } from '@/components/dashboard/PrimeCommands';
import { CopyTradingCard } from '@/components/dashboard/CopyTradingCard';
import { SignalsCard } from '@/components/dashboard/SignalsCard';
import { MarketMovers } from '@/components/dashboard/MarketMovers';
import { LedgerStream } from '@/components/dashboard/LedgerStream';
import styles from './dashboard.module.css';

export default function DashboardPage() {
  return (
    <AppShell>
      <div className={styles.page}>
        <TournamentBanner />
        <div className={styles.grid2}>
          <PrimeWalletCard />
          <PrimeCommands />
        </div>
        <div className={styles.grid2}>
          <CopyTradingCard />
          <SignalsCard />
        </div>
        <div className={styles.gridBottom}>
          <MarketMovers />
          <LedgerStream />
        </div>
      </div>
    </AppShell>
  );
}