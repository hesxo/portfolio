"use client"

import { useEffect, useId, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"

const VOICE_SRC = "/audio/pain-voice.mp3"

/**
 * One entry per spoken line with its window in the voice clip, in seconds.
 * Times come from the voice-band (300-3400 Hz) energy of the clip: phrases
 * start on a rise and end on the dip before the next one. Nudge them here if
 * a line lands early or late.
 */
const LINES: {
  romaji: string
  english: string
  start: number
  end: number
}[] = [
  { romaji: "Itami o kanjiro.", english: "Feel pain.", start: 0.8, end: 1.9 },
  {
    romaji: "Itami o kangaero.",
    english: "Contemplate pain.",
    start: 3.3,
    end: 5.0,
  },
  {
    romaji: "Itami o uketore.",
    english: "Accept pain.",
    start: 9.5,
    end: 11.1,
  },
  { romaji: "Itami o shire.", english: "Know pain.", start: 11.8, end: 12.8 },
  {
    romaji: "Itami o shiranu mono ni, hontō no heiwa wa wakaran!",
    english:
      "One who does not know pain cannot possibly understand true peace.",
    start: 15.2,
    end: 19.0,
  },
  {
    romaji: "Koko yori, sekai ni itami o...",
    english: "And now, this world shall know pain.",
    start: 20.1,
    end: 22.5,
  },
  {
    romaji: "Shinra Tensei!",
    english: "Shinra Tensei!",
    start: 22.6,
    end: 25.1,
  },
]

const RAIN_DROPS = Array.from({ length: 70 }, (_, i) => ({
  left: (i * 37.3) % 100,
  delay: ((i * 53) % 100) / 100,
  duration: 0.55 + ((i * 17) % 40) / 100,
  length: 10 + ((i * 29) % 16),
  opacity: 0.25 + ((i * 13) % 50) / 100,
}))

/** Smoke plumes in the artwork, as ellipse centers and radii in percent. */
const SMOKE_PUFFS = [
  { x: 25, y: 64, rx: 6, ry: 9 },
  { x: 41, y: 55, rx: 5, ry: 8 },
  { x: 79, y: 27, rx: 5, ry: 12 },
  { x: 79, y: 48, rx: 5, ry: 10 },
  { x: 43, y: 88, rx: 7, ry: 10 },
  { x: 80, y: 92, rx: 6, ry: 8 },
]

/**
 * Maps a y position (percent of the 2:1 artwork) into the box. On wide screens
 * the box is 3:1 and shows the middle two thirds of the art (anchored at 55%,
 * keeping a strip of the mountain), so positions shift by --crop-off and
 * stretch by --crop-k.
 */
const cropY = (y: number) => `calc((${y}% - var(--crop-off)) * var(--crop-k))`

/** A copy of the artwork run through `filter` and shown only through `mask`. */
function WindLayer({ filter, mask }: { filter: string; mask: string }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ filter, maskImage: mask, WebkitMaskImage: mask }}
      aria-hidden
    >
      <img
        src="/images/pain-bw.webp"
        alt=""
        className="size-full object-cover object-[50%_75%] dark:hidden"
      />
      <img
        src="/images/pain-color.webp"
        alt=""
        className="hidden size-full object-cover object-[50%_75%] dark:block"
      />
    </div>
  )
}

/** Shows subtitles a beat early so they land with the voice, not after it. */
const SUBTITLE_LEAD_S = 0.12

/** Index of the line being spoken at `time`, or -1 during pauses. */
function activeLineAt(time: number) {
  const t = time + SUBTITLE_LEAD_S
  return LINES.findIndex((line) => t >= line.start && t < line.end)
}

export function FooterPain() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: 0.3 })
  const shouldReduceMotion = useReducedMotion()
  const animate = isInView && !shouldReduceMotion

  const voice = useVoice()
  const filterId = useId().replace(/:/g, "")

  return (
    <div ref={ref} className="bg-background">
      <style>{`
        @keyframes footer-pain-rain {
          from { transform: translate3d(0, -12%, 0); }
          to { transform: translate3d(-24px, 100%, 0); }
        }
      `}</style>

      {/* Artwork with a slow camera drift and falling rain */}
      <div
        className="relative aspect-2/1 cursor-pointer overflow-hidden [--crop-k:1] [--crop-off:0%] md:aspect-11/4 md:[--crop-k:1.375] md:[--crop-off:20.5%]"
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") voice.play()
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") voice.stop()
        }}
        onClick={voice.toggle}
      >
        <motion.div className="absolute inset-0">
          <img
            src="/images/pain-bw.webp"
            alt=""
            className="size-full object-cover object-[50%_75%] dark:hidden"
            loading="lazy"
          />
          <img
            src="/images/pain-color.webp"
            alt=""
            className="hidden size-full object-cover object-[50%_75%] dark:block"
            loading="lazy"
          />

          {/* Wind: a displaced copy of the art, masked to the smoke clouds, so
              only the smoke billows. */}
          <svg className="absolute size-0" aria-hidden>
            <defs>
              <filter
                id={`${filterId}-smoke`}
                x="-10%"
                y="-10%"
                width="120%"
                height="120%"
              >
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.008"
                  numOctaves="3"
                  seed="8"
                >
                  <animate
                    attributeName="baseFrequency"
                    dur="9s"
                    values="0.008;0.013;0.008"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feDisplacementMap
                  in="SourceGraphic"
                  scale="22"
                  xChannelSelector="R"
                  yChannelSelector="B"
                />
              </filter>
            </defs>
          </svg>

          {animate && (
            <>
              <WindLayer
                filter={`url(#${filterId}-smoke)`}
                mask={SMOKE_PUFFS.map(
                  (puff) =>
                    `radial-gradient(ellipse ${puff.rx}% calc(${puff.ry}% * var(--crop-k)) at ${puff.x}% ${cropY(puff.y)}, #000 45%, transparent 100%)`
                ).join(", ")}
              />
              {/* Soft puffs drifting up from each smoke plume */}
              {SMOKE_PUFFS.map((puff, i) => (
                <motion.span
                  key={i}
                  className="pointer-events-none absolute rounded-full bg-white/70 mix-blend-screen blur-md dark:bg-zinc-100/60"
                  style={{
                    left: `${puff.x}%`,
                    top: cropY(puff.y),
                    width: `${puff.rx * 1.2}%`,
                    aspectRatio: "1",
                    translate: "-50% -50%",
                  }}
                  animate={{
                    y: ["0%", "-80%"],
                    x: ["0%", "25%"],
                    scale: [0.6, 1.4],
                    opacity: [0, 0.55, 0],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: i * 0.9,
                  }}
                />
              ))}
            </>
          )}
        </motion.div>

        {/* Darken the edges so the rain and the panel read as one scene. */}
        <div className="pointer-events-none absolute inset-0 bg-radial from-transparent from-40% to-black/25 dark:to-black/60" />

        {!shouldReduceMotion && (
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {RAIN_DROPS.map((drop, i) => (
              // A full-height column slides down one panel height, carrying
              // its drop from above the top edge to below the bottom edge.
              <span
                key={i}
                className="absolute inset-y-0 w-px"
                style={{
                  left: `${drop.left}%`,
                  animation: `footer-pain-rain ${drop.duration}s linear ${drop.delay}s infinite`,
                  animationPlayState: isInView ? "running" : "paused",
                }}
              >
                <span
                  className="absolute top-0 left-0 w-px rotate-12 rounded-full bg-zinc-950 dark:bg-sky-100"
                  style={{ height: drop.length, opacity: drop.opacity }}
                />
              </span>
            ))}
          </div>
        )}

        {/* Live subtitle over the artwork while the voice plays */}
        {voice.playing && voice.activeLine >= 0 && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-4 pt-10 pb-3 text-center">
            <motion.p
              key={voice.activeLine}
              className="font-serif text-sm/snug text-balance text-white italic sm:text-lg/snug"
              initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <span lang="en">{LINES[voice.activeLine].english}</span>
            </motion.p>
          </div>
        )}
      </div>

      {voice.syncMarks.length > 0 && (
        <p className="border-t border-line px-4 py-3 font-mono text-xs text-muted-foreground">
          Line starts: {voice.syncMarks.join(", ")}
        </p>
      )}
    </div>
  )
}

/** Loads the voice clip if present and tracks which line is being spoken. */
function useVoice() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const frameRef = useRef(0)
  const [available, setAvailable] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [activeLine, setActiveLine] = useState(-1)
  const [syncMarks, setSyncMarks] = useState<number[]>([])

  useEffect(() => {
    let cancelled = false
    fetch(VOICE_SRC, { method: "HEAD" })
      .then((res) => {
        const isAudio = res.headers.get("content-type")?.startsWith("audio")
        if (!cancelled && res.ok && isAudio) setAvailable(true)
      })
      .catch(() => {})

    return () => {
      cancelled = true
      cancelAnimationFrame(frameRef.current)
      audioRef.current?.pause()
    }
  }, [])

  const stop = () => {
    cancelAnimationFrame(frameRef.current)
    const audio = audioRef.current
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }
    setPlaying(false)
    setActiveLine(-1)
  }

  const follow = () => {
    const audio = audioRef.current
    if (!audio) return
    setActiveLine(activeLineAt(audio.currentTime))
    frameRef.current = requestAnimationFrame(follow)
  }

  const play = () => {
    if (!available || playing) return

    audioRef.current ??= new Audio(VOICE_SRC)
    const audio = audioRef.current
    audio.onended = stop
    audio.currentTime = 0
    // Browsers reject playback before the visitor has interacted with the
    // page; hover then simply does nothing until the first click or tap.
    audio
      .play()
      .then(() => {
        setPlaying(true)
        follow()
      })
      .catch(() => {})
  }

  const toggle = () => (playing ? stop() : play())

  // Timing helper: open the page with `?sync`, play the clip, and press Space
  // as each line begins. The captured start times are logged and copied.
  useEffect(() => {
    if (!playing || !new URLSearchParams(window.location.search).has("sync")) {
      return
    }

    const marks: number[] = []
    setSyncMarks([])
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code !== "Space" || !audioRef.current) return
      event.preventDefault()
      marks.push(Number(audioRef.current.currentTime.toFixed(2)))
      setSyncMarks([...marks])
      const report = `Line starts: ${marks.join(", ")}`
      console.info(report)
      void navigator.clipboard?.writeText(report).catch(() => {})
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [playing])

  return { available, playing, activeLine, syncMarks, play, stop, toggle }
}
