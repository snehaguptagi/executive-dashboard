# Executive Report Polish

A polished, single-page **executive delivery dashboard** for program/PMO reporting — built to turn raw project status into a clean, board-ready view. Think: completion %, daily pace vs. required pace, capacity planning, timeline, risk assessment, and strategic recommendations, all on one scrollable page.

> **Note:** This repo ships with **sample data only** (a fictional "Acme Manufacturing Co." master-data program). Swap the values in `src/pages/Index.tsx` and the components under `src/components/` for your own.

## Features

- **KPI cards** — completion status, current vs. required pace, time remaining, capacity, delivery buffer
- **Performance analytics** — team performance and completion-progress charts (Recharts)
- **Performance matrix** + **enhanced delivery timeline**
- **Risk assessment** with status indicators (mitigated / resolved / protected)
- **Strategic recommendations** panel
- Fully responsive, gradient executive styling, accessible shadcn/ui primitives

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- [Recharts](https://recharts.org/) for charts · [lucide-react](https://lucide.dev/) for icons
- [TanStack Query](https://tanstack.com/query) · [React Router](https://reactrouter.com/)

## Getting started

```bash
# install (npm, or bun — a bun.lockb is included)
npm install

# run the dev server
npm run dev

# production build
npm run build && npm run preview
```

## Project structure

```
src/
├── pages/
│   ├── Index.tsx        # the dashboard — header, KPI cards, section layout, sample data
│   └── NotFound.tsx
├── components/
│   ├── ExecutiveInsights.tsx       PerformanceMatrix.tsx
│   ├── TeamPerformanceChart.tsx    RiskAssessment.tsx
│   ├── CompletionProgress.tsx      StrategicRecommendations.tsx
│   ├── TimelineChart.tsx           CapacityMetrics.tsx
│   └── ui/              # shadcn/ui primitives
└── main.tsx
```

## Customizing

The dashboard content lives in `src/pages/Index.tsx` (header, client/partner labels, KPI array) and each chart/section component. There's no backend — all values are inline, so it's a drop-in template you can wire to your own data source.

## License

MIT
