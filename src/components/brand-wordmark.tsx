const WORDMARK_TEXT = `<text x="0" y="100" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="120" font-weight="700" letter-spacing="-4">Hasal</text>`

export function BrandWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 330 128"
      aria-hidden
      dangerouslySetInnerHTML={{ __html: WORDMARK_TEXT }}
      {...props}
    />
  )
}

export function getWordmarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 330 128">${WORDMARK_TEXT}</svg>`
}
