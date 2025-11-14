"use client";

import * as React from "react";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { VerifiedIcon as VerifiedIconOriginal } from "./verified-icon2";

export function VerifiedButton({
	displayName,
	storageKey,
	initial = true,
}: {
	displayName: string;
	storageKey?: string;
	initial?: boolean;
}) {
	const key = storageKey ?? `verified:${displayName}`;
	const [verified, setVerified] = React.useState<boolean>(() => {
		try {
			const v = localStorage.getItem(key);
			return v == null ? initial : v === "1";
		} catch (e) {
			return initial;
		}
	});

	React.useEffect(() => {
		try {
			localStorage.setItem(key, verified ? "1" : "0");
		} catch (e) {
			// ignore storage errors
		}
	}, [key, verified]);

	return (
		<SimpleTooltip content={verified ? `${displayName} — Verified` : `${displayName} — Not verified`}>
			<button
				type="button"
				aria-pressed={verified}
				aria-label={verified ? `${displayName} — Verified` : `${displayName} — Not verified`}
				className={`inline-flex items-center justify-center p-0 text-inherit transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-ring`}
				onClick={() => setVerified((s) => !s)}
			>
				<span className="sr-only">{verified ? "Verified" : "Not verified"}</span>
			<VerifiedIconOriginal className="size-[0.6em] translate-y-px text-info select-none" data-state="closed" data-slot="tooltip-trigger" />
			</button>
		</SimpleTooltip>
	);
}
