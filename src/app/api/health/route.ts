import { NextResponse } from "next/server";

import { prisma } from "@/server/db/prisma";

export const dynamic = "force-dynamic";

/**
 * Liveness/readiness probe. Reports app status and whether the database is
 * reachable. Always returns 200 so the app boots even before Supabase is wired.
 */
export async function GET() {
  let db: "up" | "down" = "down";

  try {
    await prisma.$queryRaw`SELECT 1`;
    db = "up";
  } catch {
    db = "down";
  }

  return NextResponse.json({
    status: "ok",
    db,
    timestamp: new Date().toISOString(),
  });
}
