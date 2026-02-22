# Marma - AGENTS.md

## Build & Development Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # TypeScript check + Vite build (outputs to dist/)
npm run preview   # Preview production build locally
```

No test suite configured. No linting configured beyond TypeScript.

## Architecture & Structure

**Marma** is a fan-funded platform for artists using Vite + TypeScript + vanilla DOM.

- `src/main.ts` - Entry point
- `src/style.css` - Global styles
- `index.html` - Single-page entry point with `#app` container
- `public/` - Static assets
- `skills/` - Amp skill definitions in markdown format. Read and understand every file to understand how to approach tasks.

No database configured; no backend API routes.

## Code Style & Conventions

- **TypeScript**: Strict mode enabled (`strict: true`), no unused variables/parameters
- **Target**: ES2022 modules, bundler resolution
- **DOM**: Vanilla JS with typed selectors (`querySelector<HTMLElement>`)
- **Imports**: Use relative paths (`.ts` extension required for TS files)
- **Naming**: camelCase for variables/functions, PascalCase for types
- **Error Handling**: Use `!` for trusted DOM elements; validate user inputs
- **Formatting**: No Prettier configured; use standard TypeScript conventions
