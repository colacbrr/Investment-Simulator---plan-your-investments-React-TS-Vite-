import * as React from "react"

export function Slider({
  value,
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
  className = "",
}: {
  value: number[]
  min?: number
  max?: number
  step?: number
  onValueChange: (val: number[]) => void
  className?: string
}) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value[0]}
      onChange={(e) => onValueChange([Number(e.target.value)])}
      className={`w-full cursor-pointer ${className}`}
    />
  )
}
