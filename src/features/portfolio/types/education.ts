export type Education = {
  id: string
  school: string
  /** School logo (absolute URL or path under /public); falls back to a cap icon. */
  logo?: string
  /** Logo used in dark mode, when it differs from `logo`. */
  logoDark?: string
  degree?: string
  fieldOfStudy?: string
  period: {
    start: string
    end?: string
  }
  description?: string
  skills?: string[]
  isExpanded?: boolean
}
