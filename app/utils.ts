import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeAgo(date: Date): string {
  const now = new Date()
  const diffInMillis = now.getTime() - date.getTime()
  const diffInSeconds = Math.floor(diffInMillis / 1000)
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  const diffInHours = Math.floor(diffInMinutes / 60)
  const diffInDays = Math.floor(diffInHours / 24)

  if (diffInDays > 0) {
    return `${diffInDays}d`
  } else if (diffInHours > 0) {
    return `${diffInHours}hr`
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes}m`
  } else {
    return "Just now"
  }
}

const ZodStringToJsonTransformer = (
  str: string | undefined,
  ctx: z.RefinementCtx,
): z.infer<ReturnType<typeof JSON.parse>> => {
  if (!str) {
    return str
  }
  try {
    return JSON.parse(str)
  } catch (e) {
    ctx.addIssue({ code: "custom", message: "Invalid JSON" })
    return z.NEVER
  }
}

export function jsonString() {
  return z.string().transform(ZodStringToJsonTransformer)
}