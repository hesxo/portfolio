import { BrandWordmark } from "@/components/brand-wordmark"

export default function Page() {
  return (
    <div className="max-w-screen overflow-x-clip">
      <div className="mx-auto flex h-screen flex-col items-center justify-center md:max-w-3xl">
        <BrandWordmark className="h-32 w-auto" />
      </div>
    </div>
  )
}
