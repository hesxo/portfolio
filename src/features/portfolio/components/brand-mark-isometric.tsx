"use client"

import { useEffect, useId, useRef } from "react"
import type { MotionValue, Transition } from "motion/react"
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

/**
 * The flat mark (`BrandMark`) on a 32px grid: 16 columns by 8 rows.
 * Each rectangle is [col, row, width, height] in cells.
 */
const MARK_RECTS: [number, number, number, number][] = [
  // H
  [0, 0, 2, 8],
  [4, 0, 2, 8],
  [2, 3, 2, 2],
  // D
  [8, 0, 2, 8],
  [10, 0, 4, 2],
  [10, 6, 4, 2],
  [14, 2, 2, 4],
]

const COLS = 16
const ROWS = 8

// One grid cell projected isometrically (matches the 64px-per-unit scale of the original artwork).
const ISO_X = 27.715
const ISO_Y = 16
const DEPTH = 32
const PRESSED_DROP = 16

const ORIGIN_X = 0.5
const ORIGIN_Y = COLS * ISO_Y + 0.5

const VIEW_WIDTH = Math.ceil((COLS + ROWS) * ISO_X + 1)
const VIEW_HEIGHT = Math.ceil(ORIGIN_Y + ROWS * ISO_Y + DEPTH + 0.5)

type Cell = { col: number; row: number }

const FILLED = new Set<string>()
for (const [c, r, w, h] of MARK_RECTS) {
  for (let col = c; col < c + w; col++) {
    for (let row = r; row < r + h; row++) {
      FILLED.add(`${col},${row}`)
    }
  }
}

const isFilled = (col: number, row: number) => FILLED.has(`${col},${row}`)

// Painter's order: cells further down-left on screen are nearer the viewer.
const CELLS: Cell[] = [...FILLED]
  .map((key) => {
    const [col, row] = key.split(",").map(Number)
    return { col, row }
  })
  .sort((a, b) => a.row - a.col - (b.row - b.col) || a.row - b.row)

function project(col: number, row: number, elevation: number) {
  const x = ORIGIN_X + (col + row) * ISO_X
  const y = ORIGIN_Y + (row - col) * ISO_Y + DEPTH - elevation
  return `${x.toFixed(2)} ${y.toFixed(2)}`
}

function buildCellPaths({ col, row }: Cell, drop: number) {
  const top = DEPTH - drop
  const p = (c: number, r: number, e = top) => project(c, r, e)

  const topFace = `M${p(col, row)}L${p(col + 1, row)}L${p(col + 1, row + 1)}L${p(col, row + 1)}Z`

  const walls: string[] = []
  const lines: string[] = []

  const hasFrontWall = !isFilled(col, row + 1)
  const hasLeftWall = !isFilled(col - 1, row)

  if (hasFrontWall) {
    walls.push(
      `M${p(col, row + 1)}L${p(col + 1, row + 1)}L${p(col + 1, row + 1, 0)}L${p(col, row + 1, 0)}Z`
    )
    lines.push(`M${p(col, row + 1, 0)}L${p(col + 1, row + 1, 0)}`)

    const continuesLeft = isFilled(col - 1, row) && !isFilled(col - 1, row + 1)
    const continuesRight = isFilled(col + 1, row) && !isFilled(col + 1, row + 1)
    if (!continuesLeft) lines.push(`M${p(col, row + 1)}L${p(col, row + 1, 0)}`)
    if (!continuesRight) {
      lines.push(`M${p(col + 1, row + 1)}L${p(col + 1, row + 1, 0)}`)
    }
  }

  if (hasLeftWall) {
    walls.push(
      `M${p(col, row)}L${p(col, row + 1)}L${p(col, row + 1, 0)}L${p(col, row, 0)}Z`
    )
    lines.push(`M${p(col, row, 0)}L${p(col, row + 1, 0)}`)

    const continuesUp = isFilled(col, row - 1) && !isFilled(col - 1, row - 1)
    const continuesDown = isFilled(col, row + 1) && !isFilled(col - 1, row + 1)
    if (!continuesUp) lines.push(`M${p(col, row)}L${p(col, row, 0)}`)
    if (!continuesDown) lines.push(`M${p(col, row + 1)}L${p(col, row + 1, 0)}`)
  }

  if (!isFilled(col, row - 1)) lines.push(`M${p(col, row)}L${p(col + 1, row)}`)
  if (!isFilled(col + 1, row)) {
    lines.push(`M${p(col + 1, row)}L${p(col + 1, row + 1)}`)
  }
  if (hasFrontWall) lines.push(`M${p(col, row + 1)}L${p(col + 1, row + 1)}`)
  if (hasLeftWall) lines.push(`M${p(col, row)}L${p(col, row + 1)}`)

  return { topFace, walls: walls.join(""), lines: lines.join("") }
}

type CellMode = "scene" | "mask"

function IsometricCell({
  cell,
  drop,
  mode,
  patternId,
}: {
  cell: Cell
  drop: MotionValue<number>
  mode: CellMode
  patternId: string
}) {
  const topFace = useTransform(drop, (d) => buildCellPaths(cell, d).topFace)
  const walls = useTransform(drop, (d) => buildCellPaths(cell, d).walls)
  const lines = useTransform(drop, (d) => buildCellPaths(cell, d).lines)

  if (mode === "mask") {
    return (
      <>
        <motion.path d={walls} fill="black" />
        <motion.path d={topFace} fill="black" />
        <motion.path d={lines} stroke="white" />
      </>
    )
  }

  return (
    <>
      <motion.path d={walls} className="fill-background" />
      <motion.path d={topFace} className="fill-background" />
      <motion.path d={topFace} fill={`url(#${patternId})`} />
      <motion.path d={lines} stroke="var(--stroke)" />
    </>
  )
}

function guideLine(
  from: [number, number],
  to: [number, number]
): string {
  return `M${project(from[0], from[1], 0)}L${project(to[0], to[1], 0)}`
}

const GUIDE_LINES = [
  guideLine([-40, ROWS], [COLS + 40, ROWS]),
  guideLine([0, -40], [0, ROWS + 40]),
  guideLine([COLS, -40], [COLS, ROWS + 40]),
]

/**
 * Isometric extrusion of the HD mark, in the style of tailwindcss.com.
 * Presses down on tap and lights its edges near the cursor.
 */
export function BrandMarkIsometric() {
  const id = useId()
  const ids = {
    facePattern: `hd-face-pattern-${id}`,
    radialGradient: `hd-radial-gradient-${id}`,
    edgeMask: `hd-edge-mask-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const [play] = useSound(metalClickSound)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const drop = useMotionValue(0)
  const patternTransform = useTransform(drop, (d) => `translate(0 ${d})`)

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, VIEW_WIDTH]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, VIEW_HEIGHT]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return
    }

    if (window.matchMedia("(hover: none)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  const press = () => animate(drop, PRESSED_DROP, transition)
  const release = () => animate(drop, 0, transition)

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      onTapStart={press}
      onTap={() => {
        release()
        play()
      }}
      onTapCancel={release}
    >
      <defs>
        <motion.pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
          patternTransform={patternTransform}
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </motion.pattern>

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>

        {/* Only edges left visible after occlusion get the cursor highlight. */}
        <mask
          id={ids.edgeMask}
          maskUnits="userSpaceOnUse"
          x="-100"
          y="-100"
          width={VIEW_WIDTH + 200}
          height={VIEW_HEIGHT + 200}
        >
          <g strokeWidth="1">
            {CELLS.map((cell) => (
              <IsometricCell
                key={`${cell.col},${cell.row}`}
                cell={cell}
                drop={drop}
                mode="mask"
                patternId={ids.facePattern}
              />
            ))}
          </g>
        </mask>
      </defs>

      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        {GUIDE_LINES.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      <g strokeWidth="1">
        {CELLS.map((cell) => (
          <IsometricCell
            key={`${cell.col},${cell.row}`}
            cell={cell}
            drop={drop}
            mode="scene"
            patternId={ids.facePattern}
          />
        ))}
      </g>

      <rect
        x="-100"
        y="-100"
        width={VIEW_WIDTH + 200}
        height={VIEW_HEIGHT + 200}
        fill={`url(#${ids.radialGradient})`}
        mask={`url(#${ids.edgeMask})`}
      />
    </motion.svg>
  )
}
