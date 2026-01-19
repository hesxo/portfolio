import dayjs from "dayjs";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { getIcon, Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import type { Certification } from "../../types/certifications";

const ISSUER_STYLES: Record<string, { text: string; bg: string }> = {
  coursera: { text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
  aws: { text: "text-orange-500 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-900/20" },
  google: { text: "text-blue-500 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
  microsoft: { text: "text-sky-500 dark:text-sky-400", bg: "bg-sky-50 dark:bg-sky-900/20" },
  meta: { text: "text-blue-600 dark:text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
  ibm: { text: "text-blue-700 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
  linkedin: { text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
  github: { text: "text-neutral-900 dark:text-neutral-100", bg: "bg-neutral-50 dark:bg-neutral-900/20" },
  hackerrank: { text: "text-green-500 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/20" },
  epicgames: { text: "text-neutral-800 dark:text-neutral-200", bg: "bg-neutral-50 dark:bg-neutral-900/20" },
  alison: { text: "text-red-600 dark:text-red-400", bg: "bg-red-50 dark:bg-red-900/20" },
  iet: { text: "text-cyan-700 dark:text-cyan-400", bg: "bg-cyan-50 dark:bg-cyan-900/20" },
  uom: { text: "text-red-700 dark:text-red-500", bg: "bg-red-50 dark:bg-red-900/20" },
};

export function CertificationItem({
  className,
  certification,
}: {
  className?: string;
  certification: Certification;
}) {
  const style = certification.issuerIconName
    ? ISSUER_STYLES[certification.issuerIconName as keyof typeof ISSUER_STYLES]
    : { text: "text-primary", bg: "bg-muted/50" };

  return (
    <a
      className={cn("group/cert flex items-center pr-2", className)}
      href={certification.credentialURL}
      target="_blank"
      rel="noopener"
    >
      {certification.issuerLogoURL ? (
        <Image
          src={certification.issuerLogoURL}
          alt={certification.issuer}
          width={32}
          height={32}
          quality={100}
          className="mx-4 flex size-6 shrink-0 select-none"
          unoptimized
          aria-hidden
        />
      ) : (
        <div
          className={cn(
            "mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg select-none",
            "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background transition-colors duration-300",
            "[&_svg]:size-4",
            style.text,
            style.bg
          )}
          aria-hidden
        >
          {getIcon(certification.issuerIconName) ?? <Icons.certificate />}
        </div>
      )}

      <div className="flex-1 space-y-1 border-l border-dashed border-edge p-4 pr-2">
        <h3 className="leading-snug font-medium text-balance underline-offset-4 group-hover/cert:underline">
          {certification.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <dl>
            <dt className="sr-only">Issued by</dt>
            <dd>
              <span aria-hidden>@</span>
              <span className="ml-0.5">{certification.issuer}</span>
            </dd>
          </dl>

          <Separator
            className="data-[orientation=vertical]:h-4"
            orientation="vertical"
          />

          <dl>
            <dt className="sr-only">Issued on</dt>
            <dd>
              {certification.issueDate ? (
                (() => {
                  const issued = dayjs(certification.issueDate);
                  if (issued.isValid()) {
                    return (
                      <time dateTime={issued.toISOString()}>
                        {issued.format("DD.MM.YYYY")}
                      </time>
                    );
                  }

                  return <span>—</span>;
                })()
              ) : (
                <span>—</span>
              )}
            </dd>
          </dl>
        </div>
      </div>

      {certification.credentialURL && (
        <ArrowUpRightIcon
          className="size-4 text-muted-foreground"
          aria-hidden
        />
      )}
    </a>
  );
}
