"use client";

import dynamic from "next/dynamic";
import React from "react";

import { ToggleTheme } from "@/components/toggle-theme";
import type { Post } from "@/features/blog/types/post";
import type { NavItem } from "@/types/nav";

const CommandMenu = dynamic(
    () => import("@/components/command-menu").then((mod) => mod.CommandMenu),
    { ssr: false }
);

const MobileNav = dynamic(
    () => import("@/components/mobile-nav").then((mod) => mod.MobileNav),
    { ssr: false }
);

interface HeaderActionsProps {
    posts: Post[];
    navItems: NavItem[];
    children?: React.ReactNode;
}

export function HeaderActions({ posts, navItems, children }: HeaderActionsProps) {
    return (
        <div className="flex items-center *:first:mr-2">
            <CommandMenu posts={posts} />
            {children}
            <span className="mx-2 flex h-4 w-px bg-border" />
            <ToggleTheme />
            <MobileNav className="sm:hidden" items={navItems} />
        </div>
    );
}
