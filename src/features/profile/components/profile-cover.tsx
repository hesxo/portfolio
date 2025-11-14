import { ChanhDaiMark } from "@/components/chanhdai-mark";
import { cn } from "@/lib/utils";
import { DownloadIcon } from "lucide-react";

export function ProfileCover() {
  return (
    <div
      suppressHydrationWarning={true}
      className={cn(
        "aspect-2/1 border-x border-edge select-none sm:aspect-3/1",
        "flex items-center justify-center text-black dark:text-white",
        "screen-line-before screen-line-after before:-top-px after:-bottom-px",
        "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
      ) + " relative"}
    >
      <ChanhDaiMark
        id="js-cover-mark"
        className="h-14 w-28 sm:h-16 sm:w-32"
      />
      {/* small download button inside the decorative top-right circle */}
      <a
        href="/vcard"
        title="Download vCard"
        aria-label="Download vCard"
        className="absolute z-20 right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-50 text-muted-foreground ring-1 ring-border hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      >
        <DownloadIcon className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only">Download vCard</span>
      </a>
    </div>
  );
}
