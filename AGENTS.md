<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# RateThey — project conventions

**Stack (all newer than typical training data — verify APIs before use):**
Next.js 16 (App Router) · React 19 · Tailwind v4 · Supabase (Auth + Postgres) ·
Prisma 7 · Zod 4 · npm. See `README.md` for the full picture and phase roadmap.

**Key gotchas:**
- **Prisma 7** uses the `prisma-client` generator (output `src/generated/prisma`, gitignored)
  and **requires a driver adapter**. Import the client from `@/server/db/prisma` (singleton
  built with `@prisma/adapter-pg`), not from `@prisma/client`.
- **Env** is validated via `src/lib/env.ts` (`@t3-oss/env-nextjs` + Zod 4). Add new vars there.
  Use `z.url()` / `z.email()` (Zod 4 top-level), not the deprecated `z.string().url()`.
- **Supabase**: server client `@/lib/supabase/server` (async, cookie-based), browser client
  `@/lib/supabase/client`. Auth lands in Phase 1 (middleware session refresh).
- Local dev uses a **cloud** Supabase project (no Docker on this machine).

**Architecture:** one-way `UI → service → repository → db`. Keep business logic in
`src/server` (framework-agnostic); route handlers / components stay thin. Authorization in
the service layer, not RLS (all DB access is server-side).

**Before committing:** `npm run typecheck && npm run lint && npm run build` must pass.
