import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTypedFetcher } from "remix-typedjson"
import { route } from "routes-gen"

// Source: https://maanu.dev/posts/how-to-implement-dark-mode-in-remix
// Shadcn also has a dark-mode solution - https://ui.shadcn.com/docs/dark-mode/remix
export function ThemeToggle(props: { theme: any }) {
  const fetcher = useTypedFetcher()

  const theme = fetcher.data ?? props.theme

  return (
    <div className="flex space-x-3">
      <Button
        variant="outline"
        id="theme"
        className="border-gray-100 hover:border-gray-200 hover:bg-slate-100/50 dark:border-gray-800 dark:hover:border-gray-900 dark:hover:bg-slate-800"
        onClick={() => {
          // toggle theme
          fetcher.submit(
            {
              theme: theme === "dark" ? "light" : "dark",
            },
            {
              action: route("/preferences/theme"),
              method: "POST",
            },
          )
        }}
      >
        {theme === "dark" ? (
          <MoonIcon className="h-6 w-6 text-gray-800 dark:text-gray-300" />
        ) : (
          <SunIcon className="h-6 w-6 text-yellow-400 dark:text-yellow-400" />
        )}
      </Button>
    </div>
  )
}
