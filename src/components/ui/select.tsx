import * as React from "react"

export function Select({
  value,
  onValueChange,
  children,
  className = "",
}: {
  value: string
  onValueChange: (v: string) => void
  children: React.ReactNode
  className?: string
}) {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className={`w-full rounded-lg border border-slate-300 px-3 py-2 text-sm ${className}`}
    >
      {children}
    </select>
  )
}

export function SelectTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function SelectContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function SelectItem({ value, children }: { value: string; children: React.ReactNode }) {
  return <option value={value}>{children}</option>
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  return <>{placeholder}</>
}
