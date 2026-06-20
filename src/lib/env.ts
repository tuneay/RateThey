import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * Type-safe, validated environment variables.
 *
 * Server-only secrets live under `server` and are never exposed to the client.
 * Anything the browser needs must be prefixed with `NEXT_PUBLIC_` and declared
 * under `client`. Accessing a server var from client code throws at runtime.
 */
export const env = createEnv({
  server: {
    // Pooled connection (Supabase Supavisor) used by the app at runtime.
    DATABASE_URL: z.url(),
    // Direct connection (port 5432) used for migrations / introspection.
    DIRECT_URL: z.url(),
    // Supabase service role key — server-side only, full access. Never expose.
    SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },
  client: {
    NEXT_PUBLIC_SUPABASE_URL: z.url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  },
  // Client vars must be destructured explicitly so Next.js can inline them.
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
