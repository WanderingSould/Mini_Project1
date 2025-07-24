import { Loader2 } from "lucide-react"

export function Spinner({ className = "" }) {
  return (
    <Loader2 className={`h-4 w-4 animate-spin ${className}`} />
  )
}

export function PageSpinner() {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
    </div>
  )
}
