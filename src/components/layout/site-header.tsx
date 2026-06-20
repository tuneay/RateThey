import Link from "next/link";
import { BookOpen, Film, Tv } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/movies", label: "Filmler", icon: Film },
  { href: "/series", label: "Diziler", icon: Tv },
  { href: "/books", label: "Kitaplar", icon: BookOpen },
];

export function SiteHeader() {
  return (
    <header className="border-border/60 bg-background/70 sticky top-0 z-50 w-full border-b backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="RateThey ana sayfa">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="text-muted-foreground hover:bg-accent hover:text-foreground inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              <Icon className="size-4" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "hidden sm:inline-flex",
            )}
          >
            Giriş
          </Link>
          <Link href="/register" className={cn(buttonVariants({ size: "sm" }))}>
            Kayıt Ol
          </Link>
        </div>
      </div>
    </header>
  );
}
