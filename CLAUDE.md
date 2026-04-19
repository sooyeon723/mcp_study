# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a learning/study repository. The `web/` directory contains a React app built with Vite (React 19, Vite 8).

## Commands

All commands are run from `web/`:

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build (output: web/dist/)
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Architecture

```
web/src/
├── components/   # Reusable UI components (e.g. Header.jsx)
├── pages/        # Page-level components rendered by App.jsx (e.g. Home.jsx)
├── App.jsx       # Root component — composes Header + page
├── main.jsx      # Entry point — mounts App into #root
└── index.css     # Global styles
```

- New pages go in `src/pages/`, new shared UI in `src/components/`.
- No router is installed yet; page switching would require adding `react-router-dom`.
- ESLint is configured with `react-hooks` and `react-refresh` plugins. Unused vars starting with uppercase are ignored (pattern: `^[A-Z_]`).
