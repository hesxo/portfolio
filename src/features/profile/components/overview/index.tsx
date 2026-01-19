import { GlobeIcon, MapPinIcon, MarsIcon, VenusIcon, DownloadIcon } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

import { USER } from "@/features/profile/data/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { EmailItem } from "./email-item";
import { IntroItem } from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}

        <IntroItem icon={MapPinIcon} content={USER.address} />

        <PhoneItem phoneNumber={USER.phoneNumber} />

        <EmailItem email={USER.email} />

        <IntroItem
          icon={GlobeIcon}
          content={urlToName(USER.website)}
          href={USER.website}
        />

        <IntroItem
          icon={USER.gender === "male" ? MarsIcon : VenusIcon}
          content={USER.pronouns}
        />
      </PanelContent>

      {/* Download button positioned inside the panel's top-right decorative circle */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://drive.google.com/uc?export=download&id=16NAypkZlFWnzckqrpuYUNlzxOGDJZQvk"
            title="Download vCard"
            aria-label="Download vCard"
            className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-50 text-muted-foreground ring-1 ring-border hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            <DownloadIcon className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Download CV</span>
          </a>
        </TooltipTrigger>

        <TooltipContent className="rounded-full bg-black dark:bg-zinc-800 px-4 py-2 text-sm text-white font-mono">
          Download CV
        </TooltipContent>
      </Tooltip>

      <div className="pointer-events-none absolute -inset-x-px inset-y-0 rounded-2xl border" />
    </Panel>
  );
}
