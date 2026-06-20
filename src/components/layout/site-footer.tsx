import Link from "next/link";

import { Logo } from "@/components/brand/logo";

export function SiteFooter() {
  return (
    <footer className="border-border/60 border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Logo />
          <p className="text-muted-foreground max-w-sm text-sm">
            Film, dizi ve kitapları puanla; sana özel akıllı önerilerle yeni
            favorilerini keşfet.
          </p>
        </div>
        <nav className="text-muted-foreground flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href="/movies"
            className="hover:text-foreground transition-colors"
          >
            Filmler
          </Link>
          <Link
            href="/series"
            className="hover:text-foreground transition-colors"
          >
            Diziler
          </Link>
          <Link
            href="/books"
            className="hover:text-foreground transition-colors"
          >
            Kitaplar
          </Link>
        </nav>
      </div>
      <div className="border-border/60 border-t py-4">
        <p className="text-muted-foreground mx-auto w-full max-w-6xl px-4 text-xs sm:px-6">
          © {new Date().getFullYear()} RateThey
        </p>
      </div>
    </footer>
  );
}
