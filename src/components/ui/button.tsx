import * as React from "react"

export function Button({
  className = "",
  variant = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" }) {
  const base = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium focus:outline-none"
  const styles =
    variant === "default"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"

  return <button className={`${base} ${styles} ${className}`} {...props} />
}
