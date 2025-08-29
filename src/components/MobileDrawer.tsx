import { useEffect } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

// Drawer cu portal + overlay + blocare scroll
export default function MobileDrawer({ open, onClose, children }: Props) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Închidere cu ESC
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <button
        aria-label="Închide meniu"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      {/* Panou */}
      <aside
        role="dialog"
        aria-modal="true"
        className="absolute left-0 top-0 h-[100dvh] w-72 bg-white dark:bg-slate-950 border-r shadow-xl
                   translate-x-0 transition-transform will-change-transform"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b bg-gradient-to-r from-indigo-900 to-blue-600 text-white">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-white/20 grid place-items-center">€</div>
            <div>
              <h2 className="text-base font-bold leading-tight m-0">InvestSim Pro</h2>
              <p className="text-[11px] text-blue-200 m-0">Financial Planning</p>
            </div>
          </div>
          <Button
            onClick={onClose}
            variant="outline"
            className="bg-white/10 text-white border-white/30 hover:bg-white/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-6 overflow-y-auto h-[calc(100dvh-72px)]">{children}</div>
      </aside>
    </div>,
    document.body
  )
}
