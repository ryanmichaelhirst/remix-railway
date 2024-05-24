import { cn } from "@/utils"

export function GlassCard(props: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn("bg-[#ffffff1a] px-[6px] py-[2px]", props.className)}
      // Source: https://hype4.academy/tools/glassmorphism-generator
      style={{
        // background: "rgba( 255, 255, 255, 0.10 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 8px )",
        WebkitBackdropFilter: "blur( 4px )",
        borderRadius: "10px",
      }}
    >
      {props.children}
    </div>
  )
}
