import { cn } from "@/utils"

export function KeyboardShortcut(
  props: React.PropsWithChildren<{ className?: string; title?: string }>,
) {
  return (
    <div
      title={props.title}
      className={cn(
        "rounded bg-slate-200 px-2 py-1 text-foreground dark:bg-[#232323] dark:text-[#a0a0a0]",
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}
