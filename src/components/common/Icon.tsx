interface IconProps {
  name: string;
  size?: number;
}

const PATHS: Record<string, string> = {
  grid: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
  chart: 'M3 17l6-6 4 4 8-8M3 21h18',
  market: 'M3 3v18h18M7 14l3-3 3 3 5-5',
  users: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75',
  bolt: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  layers: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  wallet: 'M21 12V7H5a2 2 0 010-4h14v4M21 12v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7',
  headset: 'M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1v-6h3v4zM3 19a2 2 0 002 2h1v-6H3v4z',
  deposit: 'M12 5v14M5 12l7 7 7-7',
  withdraw: 'M12 19V5M5 12l7-7 7 7',
  transfer: 'M7 17l-4-4 4-4M17 7l4 4-4 4M3 13h18M21 11H3',
  referral: 'M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M8.5 7a4 4 0 100 8 4 4 0 000-8zM20 8v6M23 11h-6',
  cert: 'M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  assets: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
  vip: 'M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z',
  api: 'M8 3H5a2 2 0 00-2 2v3M21 8V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3M16 21h3a2 2 0 002-2v-3',
  search: 'M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z',
  check: 'M20 6L9 17l-5-5',
};

export function Icon({ name, size = 16 }: IconProps) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
           strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  );
}