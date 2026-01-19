export function ChanhDaiMark({ className, id, ...rest }: React.ComponentProps<"svg">) {
  // Render the exact SVGs you attached: a white-logotype (light) and a
  // black-mark (dark). We render both SVG elements and toggle visibility
  // with Tailwind's `dark:` utilities so the correct one appears for the
  // active theme. Pass through props to both SVGs; if an `id` is present
  // we suffix it to avoid duplicate ids in the DOM.
  const svgClass = className ? className : "";
  const lightId = id ? `${id}-light` : undefined;
  const darkId = id ? `${id}-dark` : undefined;

  return (
    <>
      {/* Light: white background with black path (HD-logowhite.svg) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="150"
        viewBox="0 0 150 150"
        role="img"
        aria-hidden={rest["aria-hidden"] ?? true}
        className={`block dark:hidden ${svgClass}`}
        id={lightId}
        {...rest}
      >
        <rect width="150" height="150" fill="white" />
        <path d="M20 40H30V50H20V40ZM20 50H30V60H20V50ZM20 60H30V70H20V60ZM20 70H30V80H20V70ZM20 80H30V90H20V80ZM20 90H30V100H20V90ZM30 70H40V80H30V70ZM40 70H50V80H40V70ZM50 40H60V50H50V40ZM50 50H60V60H50V50ZM50 60H60V70H50V60ZM50 70H60V80H50V70ZM50 80H60V90H50V80ZM50 90H60V100H50V90ZM80 40H90V50H80V40ZM80 50H90V60H80V50ZM80 60H90V70H80V60ZM80 70H90V80H80V70ZM80 80H90V90H80V80ZM80 90H90V100H80V90ZM90 40H100V50H90V40ZM100 40H110V50H100V40ZM110 50H120V60H110V50ZM110 60H120V70H110V60ZM110 70H120V80H110V70ZM110 80H120V90H110V80ZM90 90H100V100H90V90ZM100 90H110V100H100V90Z" fill="black"/>
      </svg>

      {/* Dark: black background with white blocks (HD-logo.svg) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="150"
        viewBox="0 0 150 150"
        role="img"
        aria-hidden={rest["aria-hidden"] ?? true}
        className={`hidden dark:block ${svgClass}`}
        id={darkId}
        {...rest}
      >
        <rect width="150" height="150" fill="black" />
        <g>
          <rect x="20" y="40" width="10" height="10" fill="white" />
          <rect x="20" y="50" width="10" height="10" fill="white" />
          <rect x="20" y="60" width="10" height="10" fill="white" />
          <rect x="20" y="70" width="10" height="10" fill="white" />
          <rect x="20" y="80" width="10" height="10" fill="white" />
          <rect x="20" y="90" width="10" height="10" fill="white" />
          <rect x="30" y="70" width="10" height="10" fill="white" />
          <rect x="40" y="70" width="10" height="10" fill="white" />
          <rect x="50" y="40" width="10" height="10" fill="white" />
          <rect x="50" y="50" width="10" height="10" fill="white" />
          <rect x="50" y="60" width="10" height="10" fill="white" />
          <rect x="50" y="70" width="10" height="10" fill="white" />
          <rect x="50" y="80" width="10" height="10" fill="white" />
          <rect x="50" y="90" width="10" height="10" fill="white" />
        </g>
        <g>
          <rect x="80" y="40" width="10" height="10" fill="white" />
          <rect x="80" y="50" width="10" height="10" fill="white" />
          <rect x="80" y="60" width="10" height="10" fill="white" />
          <rect x="80" y="70" width="10" height="10" fill="white" />
          <rect x="80" y="80" width="10" height="10" fill="white" />
          <rect x="80" y="90" width="10" height="10" fill="white" />
          <rect x="90" y="40" width="10" height="10" fill="white" />
          <rect x="100" y="40" width="10" height="10" fill="white" />
          <rect x="110" y="50" width="10" height="10" fill="white" />
          <rect x="110" y="60" width="10" height="10" fill="white" />
          <rect x="110" y="70" width="10" height="10" fill="white" />
          <rect x="110" y="80" width="10" height="10" fill="white" />
          <rect x="90" y="90" width="10" height="10" fill="white" />
          <rect x="100" y="90" width="10" height="10" fill="white" />
        </g>
      </svg>
    </>
  );
}

export function getMarkSVG(color?: string, fg?: string) {
  // If caller passed a foreground color of white, return the dark SVG
  // (black bg with white blocks). Otherwise return the light svg.
  const fgColor = fg ?? color;
  const wantDark = fgColor === "#fff" || fgColor === "white" || fgColor === "white";

  if (wantDark) {
    return `<?xml version="1.0" encoding="UTF-8"?>\n<svg width="150" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">\n  <rect width="150" height="150" fill="black"/>\n  <g>\n    <rect x="20" y="40" width="10" height="10" fill="white" />\n    <rect x="20" y="50" width="10" height="10" fill="white" />\n    <rect x="20" y="60" width="10" height="10" fill="white" />\n    <rect x="20" y="70" width="10" height="10" fill="white" />\n    <rect x="20" y="80" width="10" height="10" fill="white" />\n    <rect x="20" y="90" width="10" height="10" fill="white" />\n    <rect x="30" y="70" width="10" height="10" fill="white" />\n    <rect x="40" y="70" width="10" height="10" fill="white" />\n    <rect x="50" y="40" width="10" height="10" fill="white" />\n    <rect x="50" y="50" width="10" height="10" fill="white" />\n    <rect x="50" y="60" width="10" height="10" fill="white" />\n    <rect x="50" y="70" width="10" height="10" fill="white" />\n    <rect x="50" y="80" width="10" height="10" fill="white" />\n    <rect x="50" y="90" width="10" height="10" fill="white" />\n  </g>\n  <g>\n    <rect x="80" y="40" width="10" height="10" fill="white" />\n    <rect x="80" y="50" width="10" height="10" fill="white" />\n    <rect x="80" y="60" width="10" height="10" fill="white" />\n    <rect x="80" y="70" width="10" height="10" fill="white" />\n    <rect x="80" y="80" width="10" height="10" fill="white" />\n    <rect x="80" y="90" width="10" height="10" fill="white" />\n    <rect x="90" y="40" width="10" height="10" fill="white" />\n    <rect x="100" y="40" width="10" height="10" fill="white" />\n    <rect x="110" y="50" width="10" height="10" fill="white" />\n    <rect x="110" y="60" width="10" height="10" fill="white" />\n    <rect x="110" y="70" width="10" height="10" fill="white" />\n    <rect x="110" y="80" width="10" height="10" fill="white" />\n    <rect x="90" y="90" width="10" height="10" fill="white" />\n    <rect x="100" y="90" width="10" height="10" fill="white" />\n  </g>\n</svg>`;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg width="150" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">\n  <rect width="150" height="150" fill="white"/>\n  <path d="M20 40H30V50H20V40ZM20 50H30V60H20V50ZM20 60H30V70H20V60ZM20 70H30V80H20V70ZM20 80H30V90H20V80ZM20 90H30V100H20V90ZM30 70H40V80H30V70ZM40 70H50V80H40V70ZM50 40H60V50H50V40ZM50 50H60V60H50V50ZM50 60H60V70H50V60ZM50 70H60V80H50V70ZM50 80H60V90H50V80ZM50 90H60V100H50V90ZM80 40H90V50H80V40ZM80 50H90V60H80V50ZM80 60H90V70H80V60ZM80 70H90V80H80V70ZM80 80H90V90H80V80ZM80 90H90V100H80V90ZM90 40H100V50H90V40ZM100 40H110V50H100V40ZM110 50H120V60H110V50ZM110 60H120V70H110V60ZM110 70H120V80H110V70ZM110 80H120V90H110V80ZM90 90H100V100H90V90ZM100 90H110V100H100V90Z" fill="black"/>\n</svg>`;
}
