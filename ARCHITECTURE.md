# Architecture

Executive Dashboard is a **client-side single-page app** — no backend. It renders a program/PMO status view from in-memory sample data and adds a Claude-powered briefing layer.

## Stack
- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui (Radix primitives)
- Recharts (charts)
- Anthropic API, called client-side, for AI Insights

## Data flow
1. `src/pages/Index.tsx` defines `keyMetrics` (the KPI array) and composes the page from domain sections.
2. Section components (`ExecutiveInsights`, `RiskAssessment`, `PerformanceMatrix`, `TimelineChart`, `CapacityMetrics`, `TeamPerformanceChart`, `CompletionProgress`, `StrategicRecommendations`) render their own sample data via Recharts.
3. `keyMetrics` is passed to `AIInsights`, which sends a metrics summary to the Anthropic API and renders an executive summary + top risks + recommended actions.

## Key decisions
- **No backend.** Sample data is inline so it runs immediately; replace the values in `Index.tsx` and the section components with your own (or wire a data source).
- **Bring-your-own-key AI.** The Anthropic key is entered in the UI and kept in `localStorage` — never committed or bundled. (A key baked into a client build would leak in the public bundle.)
- **Sample data only.** Ships with a fictional program so nothing real is exposed; the layout is the reusable part.

## Structure
```
src/pages/Index.tsx             page composition + KPI data
src/components/AIInsights.tsx   Claude briefing panel (BYO key)
src/components/*.tsx            domain sections (charts, risk, timeline, …)
src/components/ui/              shadcn/ui primitives
```
