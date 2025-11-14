import { USER } from "@/features/profile/data/user";
import { FlipSentences } from "@/registry/flip-sentences";
import { VerifiedButton } from "./verified-button";
import { DownloadIcon } from "lucide-react";

export function ProfileHeader() {
  return (
    <div suppressHydrationWarning={true} className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge pr-3">
        <div className="mx-0.5 my-[3px] relative">
          <img
            className="size-40 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

      </div>

  <div className="flex flex-1 flex-col min-w-0">
        <div className="flex grow items-end pb-1 pl-4">
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex flex-row items-center pl-4 text-2xl sm:text-3xl font-semibold w-full gap-2 leading-tight">
            <span className="break-words">{USER.displayName}</span>

            {/* Verified badge: render inline immediately next to the name */}
            <VerifiedButton displayName={USER.displayName} />
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences className="font-mono text-sm text-balance text-muted-foreground">
              {USER.flipSentences}
            </FlipSentences>
          </div>
        </div>
      </div>
    </div>
  );
}
