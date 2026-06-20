import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

/** RateThey wordmark: a gold star mark + the product name. */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-lg font-semibold tracking-tight",
        className,
      )}
    >
      <span className="bg-primary text-primary-foreground grid size-8 place-items-center rounded-lg shadow-sm">
        <Star className="size-4 fill-current" />
      </span>
      <span>
        Rate<span className="text-primary">They</span>
      </span>
    </span>
  );
}
