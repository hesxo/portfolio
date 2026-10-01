export function BrandMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 0h64v96h64V0h64v256h-64v-96H64v96H0ZM448 64H320v128h128v64H256V0h192v64ZM512 192h-64V64h64v128Z"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="currentColor" d="M0 0h32v48h32V0h32v128H64V80H32v48H0ZM224 32h-64v64h64v32h-96V0h96v32ZM256 96h-32V32h32v64Z"/></svg>`
}
