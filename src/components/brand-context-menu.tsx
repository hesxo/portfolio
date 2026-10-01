"use client"

import { copyText } from "@/utils/copy"
import { useTiks } from "@rexa-developer/tiks/react"
import { ArrowUpRight, Type } from "lucide-react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { toast } from "@/components/ui/toast"

import { BrandMark, getMarkSVG } from "./brand-mark"
import { getWordmarkSVG } from "./brand-wordmark"

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { success } = useTiks()

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-fit">
        <ContextMenuItem render={<a href="/" target="_blank" />}>
          <ArrowUpRight />
          Open Link in New Tab
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem
          onClick={() => {
            copyText(getMarkSVG())
            toast.add({ type: "success", title: "Mark as SVG copied" })
            success()
          }}
        >
          <BrandMark />
          Copy Mark as SVG
        </ContextMenuItem>

        <ContextMenuItem
          onClick={() => {
            copyText(getWordmarkSVG())
            toast.add({ type: "success", title: "Logotype as SVG copied" })
            success()
          }}
        >
          <Type />
          Copy Logotype as SVG
        </ContextMenuItem>

      </ContextMenuContent>
    </ContextMenu>
  )
}

export default BrandContextMenu
