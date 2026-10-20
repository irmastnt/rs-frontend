# Reservation System Frontend

Welcome to the Reservation System Frontend project!

## Requirements

- Node.js 24.15.0 is the verified runtime. Angular also supports Node.js
  ^22.22.3, ^24.15.0, or >=26.0.0.
- npm 10.9.7 was used to generate the dependency lockfile.
- Angular and Angular CLI 22.2.1 were the latest stable versions when scaffolded.

## Development

Run `npm ci`, then `npm start`. Open http://localhost:4200; changes reload
in the browser automatically.

## Build and type checking

- `npm run build` creates the production website in `dist/cosmos-sandbox/browser/`.
- `npm run build:dev` creates a development build with source maps.
- `npm run watch` rebuilds the development bundle as files change.
- `npm run typecheck` checks TypeScript and Angular templates without emitting files.

## Production preview in Docker

`npm run build`, then `docker compose up -d`. Open http://localhost:8080 to see
the production build served by Caddy, the same web server used on the VPS
(config in `docker/Caddyfile`). After rebuilding, refresh the page; no restart
is needed. Stop it with `docker compose down`.

This is a minimal, standalone, zoneless Angular starter with CSS and strict
checking. There is no routing, SSR, backend, or test-runner setup; component
tests and Vitest configuration are reserved for COS-6.
