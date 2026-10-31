# ROZ-TRADE Project Architecture

## 1. Purpose and scope

ROZ-TRADE is a Next.js application organized around the App Router, TypeScript, React, and CSS Modules. The structure separates route entry points from reusable interface components, shared domain types, mock data, theme context, and global design tokens.

This document describes:

- The intended source tree and route mapping.
- The responsibility of every requested folder and file.
- The relationship between global CSS, design tokens, and component CSS Modules.
- The current TypeScript, Next.js, ESLint, and package configuration.
- The conventions to follow when extending the application.

The project does **not** use Tailwind CSS. Component-level styling should be implemented with colocated `*.module.css` files, while application-wide styles belong in `src/app/globals.css` and reusable variables belong in `src/styles/tokens.css`.

## 2. Technology foundation

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 with the App Router |
| UI runtime | React 19 |
| Language | TypeScript with strict checking enabled |
| Styling | CSS Modules and global CSS; no Tailwind |
| Routing | File-system routing under `src/app` |
| Font loading | `next/font/google`, currently configured for Cairo |
| Data layer | Typed mock data in `src/lib/mock-data.ts` |
| Linting | ESLint 9 with Next.js Core Web Vitals and TypeScript presets |
| Module alias | `@/*` resolves to `src/*` |

## 3. Canonical source tree

```text
src/
├─ app/
│  ├─ layout.tsx
│  ├─ globals.css
│  ├─ page.tsx
│  ├─ dashboard/
│  │  └─ page.tsx
│  └─ trade/
│     └─ page.tsx
│
├─ components/
│  ├─ layout/
│  │  ├─ Sidebar.tsx
│  │  ├─ Sidebar.module.css
│  │  ├─ TopBar.tsx
│  │  ├─ TopBar.module.css
│  │  ├─ AppShell.tsx
│  │  └─ AppShell.module.css
│  ├─ dashboard/
│  │  ├─ PrimeWalletCard.tsx
│  │  ├─ PrimeWalletCard.module.css
│  │  ├─ PrimeCommands.tsx
│  │  ├─ PrimeCommands.module.css
│  │  ├─ TournamentBanner.tsx
│  │  ├─ TournamentBanner.module.css
│  │  ├─ CopyTradingCard.tsx
│  │  ├─ CopyTradingCard.module.css
│  │  ├─ SignalsCard.tsx
│  │  ├─ SignalsCard.module.css
│  │  ├─ MarketMovers.tsx
│  │  ├─ MarketMovers.module.css
│  │  ├─ LedgerStream.tsx
│  │  └─ LedgerStream.module.css
│  ├─ trade/
│  │  ├─ TradingChart.tsx
│  │  ├─ TradingChart.module.css
│  │  ├─ ExecutionDesk.tsx
│  │  ├─ ExecutionDesk.module.css
│  │  ├─ OrderBook.tsx
│  │  ├─ OrderBook.module.css
│  │  ├─ PositionsTable.tsx
│  │  ├─ PositionsTable.module.css
│  │  ├─ SymbolHeader.tsx
│  │  └─ SymbolHeader.module.css
│  └─ common/
│     ├─ Card.tsx
│     ├─ Card.module.css
│     ├─ Button.tsx
│     ├─ Button.module.css
│     ├─ Sparkline.tsx
│     └─ Sparkline.module.css
│
├─ context/
│  └─ ThemeContext.tsx
│
├─ lib/
│  ├─ types.ts
│  └─ mock-data.ts
│
└─ styles/
   └─ tokens.css
```

## 4. Routing architecture

Next.js derives routes from directories and `page.tsx` files below `src/app`.

| URL | File | Responsibility |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Public or landing entry point. It can redirect, introduce the product, or link into the authenticated workspace. |
| `/dashboard` | `src/app/dashboard/page.tsx` | Overview workspace that composes wallet, commands, market, copy-trading, signal, tournament, and ledger components. |
| `/trade` | `src/app/trade/page.tsx` | Live trading workspace that composes the symbol header, chart, order book, execution desk, and positions table. |

`src/app/layout.tsx` is the root layout. It wraps every route, defines document-level metadata, configures the Arabic right-to-left document direction, loads the Cairo font, and imports global CSS.

Routes should remain thin composition layers. Business logic, reusable UI, and data transformations belong in components or library modules rather than being duplicated inside route files.

## 5. Application shell and global presentation

### `src/app/layout.tsx`

The root server component establishes the document contract for the application:

- Imports `src/app/globals.css`.
- Loads the Cairo font through `next/font/google`.
- Exposes the site title and description through Next.js `Metadata`.
- Sets `lang="ar"` and `dir="rtl"` for Arabic-first rendering.
- Applies the font CSS variable to the root `<html>` element.
- Renders route content through the `children` prop.

Changes to document metadata, language direction, font loading, or global providers should be made here.

### `src/app/globals.css`

This is the global stylesheet imported once by the root layout. It is the correct location for:

- CSS resets and base box-sizing rules.
- Body background, text color, and default typography.
- Global directionality or accessibility defaults.
- Root-level layout primitives that are intentionally shared.
- References to global design-token variables.

Component-specific selectors should not be placed here unless they are genuinely global.

### `src/styles/tokens.css`

This file is the design-token layer. It should define reusable CSS custom properties such as:

- Brand and semantic colors.
- Surface, border, and text colors.
- Spacing scale.
- Border radii.
- Shadows and elevation.
- Typography sizes and weights.
- Layout dimensions and breakpoints.

Tokens provide a stable visual contract between components. A component module should consume tokens rather than hard-coding repeated visual values.

## 6. Layout components

Each layout component has a TypeScript implementation and a colocated CSS Module. The component owns structure and behavior; the module owns only its scoped presentation.

### `src/components/layout/AppShell.tsx`

The application shell is the top-level authenticated workspace frame. It should coordinate the persistent navigation and top-level content region, typically by rendering `Sidebar`, `TopBar`, and a main content slot.

It should remain layout-focused and should not contain route-specific dashboard or trading logic.

### `src/components/layout/AppShell.module.css`

Defines the shell grid or flex layout, viewport sizing, responsive behavior, content overflow rules, and stacking relationships for the navigation and main content areas.

### `src/components/layout/Sidebar.tsx`

Provides primary navigation for the trading workspace. It is responsible for:

- Rendering product branding.
- Displaying account status or balance context.
- Rendering navigation items and active-route affordances.
- Providing links to dashboard and trade surfaces.
- Exposing secondary account or support actions when required.

Navigation data should preferably come from typed data in `mock-data.ts` or a future navigation configuration module.

### `src/components/layout/Sidebar.module.css`

Scopes sidebar presentation, including width, spacing, active navigation states, account summary styling, responsive collapse behavior, and visual separation from the content area.

### `src/components/layout/TopBar.tsx`

Represents the persistent top-level toolbar. It is the appropriate place for page context, symbol/account controls, notifications, profile actions, and responsive navigation triggers.

The component should receive route- or session-specific values through props rather than embedding page-specific data.

### `src/components/layout/TopBar.module.css`

Defines toolbar height, horizontal alignment, controls, separators, responsive behavior, and any sticky positioning required by the shell.

## 7. Dashboard components

Dashboard components are feature-level presentation units. Each should accept typed props where data is supplied externally and should avoid owning unrelated application state.

### `PrimeWalletCard.tsx` and `PrimeWalletCard.module.css`

Displays the account's primary balance and wallet breakdown. It can present total balance, spot funds, futures margin, staked yield, APY, and profit/loss summaries. The module controls card hierarchy, numeric emphasis, trend colors, and responsive layout.

### `PrimeCommands.tsx` and `PrimeCommands.module.css`

Provides high-frequency account actions such as deposit, withdraw, transfer, referral, certificates, assets, VIP, and API access. The component should render actions from typed command items and make interactive controls keyboard accessible.

### `TournamentBanner.tsx` and `TournamentBanner.module.css`

Displays a promotional or tournament announcement. It owns the banner content structure, call-to-action affordance, time or status presentation, and responsive artwork/decoration styling.

### `CopyTradingCard.tsx` and `CopyTradingCard.module.css`

Summarizes copy-trading opportunities or the user's copy-trading status. It may show strategy performance, risk, followers, allocation, and an action to inspect or join a strategy.

### `SignalsCard.tsx` and `SignalsCard.module.css`

Presents futures or market signals. It should communicate signal direction, confidence, instrument, timing, and risk clearly, with semantic positive and negative states.

### `MarketMovers.tsx` and `MarketMovers.module.css`

Shows instruments with notable price or volume movement. It should consume typed market-pair data and can combine price, percentage change, turnover, iconography, and small trend visualizations.

### `LedgerStream.tsx` and `LedgerStream.module.css`

Renders a chronological account activity stream, including deposits, bot executions, yield payments, and transfers. It should distinguish transaction types, amounts, timestamps, and positive/negative value changes.

## 8. Trading components

Trading components form the execution workspace. They should be designed for dense information display, clear state communication, and predictable updates when live data replaces mock data.

### `TradingChart.tsx` and `TradingChart.module.css`

Owns the price-chart region. The initial scaffold can use a placeholder, while a production implementation can integrate a charting library or canvas/SVG renderer. Responsibilities include symbol/timeframe context, chart surface, loading state, and empty/error states.

### `ExecutionDesk.tsx` and `ExecutionDesk.module.css`

Provides order-entry controls. It should eventually support side selection, order type, quantity, price, leverage or margin controls, validation, fee estimates, and submit/cancel actions.

Because this component handles financially consequential actions, production behavior must validate input, show explicit errors, prevent accidental duplicate submissions, and expose clear confirmation states.

### `OrderBook.tsx` and `OrderBook.module.css`

Displays ask and bid levels with price, size, and cumulative totals. The module should support aligned numeric columns, depth visualization, a spread indicator, and visual distinction between asks and bids.

### `PositionsTable.tsx` and `PositionsTable.module.css`

Shows open positions and their status. Typical fields include pair, side, investment, entry price, mark price, countdown, P/L, leverage, and risk status. It should support responsive overflow and accessible table semantics.

### `SymbolHeader.tsx` and `SymbolHeader.module.css`

Provides the selected trading pair context, including symbol, latest price, price change, market status, and controls for changing the symbol or timeframe.

## 9. Common components

Common components are deliberately small and reusable. They should remain domain-neutral and should expose props for content, variants, accessibility labels, and interaction state.

### `Card.tsx` and `Card.module.css`

Defines a reusable surface primitive for grouping related content. It should support consistent padding, borders, radius, elevation, header/content/footer regions, and optional visual variants.

### `Button.tsx` and `Button.module.css`

Defines the shared action control. A production version should support semantic variants, sizes, disabled and loading states, native button types, keyboard focus, and accessible labels.

### `Sparkline.tsx` and `Sparkline.module.css`

Renders a compact trend visualization for cards or market rows. It should accept a numeric series and presentation options such as positive/negative tone, dimensions, and accessible alternative text.

## 10. Context and shared state

### `src/context/ThemeContext.tsx`

This module is reserved for theme state and theme actions. A complete implementation can provide:

- Light, dark, and system theme modes.
- A typed context value and provider.
- Persistence through a browser storage mechanism.
- Synchronization with the document class or data attribute.
- A safe default or explicit error when a consumer is outside the provider.

Because theme persistence uses browser APIs, the provider and browser-dependent hooks should be marked as client components and guarded against server execution.

## 11. Shared types and mock data

### `src/lib/types.ts`

Contains domain contracts shared by routes and components. Current model categories include:

- `NavItem` for navigation entries.
- `WalletBreakdown` for account balances and yield.
- `MarketPair` for market rows and sparkline values.
- `Position` for open trading positions.
- `OrderBookRow` for order-book levels.
- `CommandItem` for quick actions.
- `LedgerEntry` for account activity.

These interfaces provide compile-time consistency and should be updated before duplicating shapes in feature components.

### `src/lib/mock-data.ts`

Contains development fixtures for the dashboard and trading surfaces. It currently provides navigation items, wallet values, P/L values, market pairs, command items, order-book asks and bids, positions, ledger entries, and sparkline data.

Mock data should remain deterministic and clearly separated from production API clients. When a real data layer is introduced, preserve the existing types and replace consumers through a repository or service boundary rather than embedding network calls in presentational components.

## 12. CSS Modules and design-token conventions

CSS Modules create locally scoped class names and prevent accidental selector collisions. Follow these conventions:

1. Import the module beside its component:
   ```tsx
   import styles from './Card.module.css';
   ```
2. Use `styles.className` rather than global class names for component internals.
3. Keep selectors shallow and tied to the component's rendered structure.
4. Put repeated values in `src/styles/tokens.css`.
5. Keep global selectors limited to `globals.css`.
6. Use semantic state names such as `positive`, `negative`, `active`, `disabled`, and `loading`.
7. Preserve right-to-left behavior and test both dense desktop layouts and narrow viewports.
8. Include visible focus states and sufficient contrast for trading-critical controls.

## 13. Root configuration

Although the primary feature architecture lives under `src`, the root configuration controls how the application is built and validated.

### `package.json`

Defines the project identity, scripts, runtime dependencies, and development dependencies.

Available scripts:

- `npm run dev`: starts the Next.js development server.
- `npm run build`: creates a production build.
- `npm run start`: serves the production build.
- `npm run lint`: runs ESLint.

Runtime dependencies are Next.js, React, and React DOM. Development dependencies provide TypeScript, React and Node type definitions, ESLint, the Next.js ESLint configuration, and the React Compiler plugin.

### `package-lock.json`

Locks the resolved dependency graph and should be updated by npm when `package.json` changes. It should be committed with dependency-manifest changes to preserve reproducible installs.

### `next.config.ts`

Provides typed Next.js configuration. The current configuration enables:

- Next.js experimental agent feedback support.
- React Compiler integration.

Future image, headers, redirects, rewrites, or experimental settings should be documented here and kept narrowly scoped.

### `tsconfig.json`

Enables strict TypeScript checking, ES2022 output assumptions, DOM libraries, bundler module resolution, isolated modules, JSX transformation, incremental compilation, and the Next.js TypeScript plugin.

The `@/*` path alias maps to `src/*`, allowing imports such as:

```ts
import { MARKET_PAIRS } from '@/lib/mock-data';
```

### `eslint.config.mjs`

Uses ESLint's flat configuration format with Next.js Core Web Vitals and TypeScript rules. It explicitly ignores generated build directories and `next-env.d.ts`.

Lint errors should be resolved before merging. Warnings should be reviewed rather than routinely suppressed.

### `next-env.d.ts`

Generated Next.js type references. It should not be edited manually and is excluded from linting.

### `.env.local`

Local environment configuration for development-only values. It is intentionally not documented by value in this file because environment files may contain secrets. Add only non-secret local configuration to source control, and keep credentials out of the repository.

### `.gitignore`

Defines files and directories that Git should omit, normally including dependencies, Next.js build output, local environment files, logs, and editor artifacts.

### `README.md`

The concise onboarding document for developers. It should explain setup, development commands, environment requirements, and links to this architecture document for deeper design context.

## 14. Existing adjacent files

The workspace also contains older or auxiliary files outside the canonical tree above:

- `src/app/page.module.css`
- `src/app/dashboard/dashboard.module.css`
- `src/app/dashboard/trade/page.tsx`
- `src/app/dashboard/trade/trade.module.css`
- `src/components/layout/Header.tsx`
- `src/components/layout/Header.module.css`
- `src/components/dashboard/WalletCard.tsx`
- `src/components/common/Icon.tsx`
- `src/styles/variables.css`

These files are retained as existing project content. They should either be migrated into the canonical architecture or removed in a separate cleanup task after their imports and routes are verified. Avoid creating two competing implementations of the same responsibility.

## 15. Recommended composition

A dashboard page should compose the shell and dashboard modules approximately as follows:

```text
AppShell
├─ Sidebar
├─ TopBar
└─ main
   ├─ PrimeWalletCard
   ├─ PrimeCommands
   ├─ TournamentBanner
   ├─ CopyTradingCard
   ├─ SignalsCard
   ├─ MarketMovers
   └─ LedgerStream
```

A trade page should compose the trading workspace approximately as follows:

```text
AppShell
├─ Sidebar
├─ TopBar
└─ main
   ├─ SymbolHeader
   ├─ TradingChart
   ├─ OrderBook
   ├─ ExecutionDesk
   └─ PositionsTable
```

The exact grid is a UI decision, but the route should remain responsible for composition while each feature component remains responsible for its own presentation and local behavior.

## 16. Extension guidelines

When adding a new feature:

1. Add or update the route under `src/app`.
2. Create a feature component under the closest domain folder.
3. Add a colocated CSS Module for feature-specific styles.
4. Add or reuse a type in `src/lib/types.ts`.
5. Add temporary fixtures to `src/lib/mock-data.ts` only when needed for development.
6. Use design tokens instead of repeated literal values.
7. Keep server and client boundaries explicit.
8. Run `npm run lint` and `npm run build` before delivery.
9. Update this document when the folder responsibilities or configuration changes.

## 17. Quality and security expectations

Trading interfaces require stricter behavior than a static dashboard:

- Validate all order inputs on both client and server boundaries.
- Never treat mock data as authoritative financial data.
- Do not expose secrets through client components or committed environment files.
- Use explicit loading, error, empty, and success states.
- Prevent duplicate order submissions.
- Make critical actions keyboard accessible and visually confirm state changes.
- Keep financial calculations in typed, tested modules rather than presentation components.
- Add automated tests before introducing live execution or account mutation.

