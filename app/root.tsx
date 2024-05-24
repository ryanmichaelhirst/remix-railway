import { cssBundleHref } from "@remix-run/css-bundle"
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"

import stylesheet from "@/styles/tailwind.css"
import { typedjson, useTypedLoaderData } from "remix-typedjson"
import { cn } from "./utils"
import { app } from "./utils/app.server"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]

export const loader = async (args: LoaderFunctionArgs) =>
  app(args).build(async (ctx) => {
    const theme = ctx.session.get("theme")

    return typedjson({ theme })
  })

export default function App() {
  const data = useTypedLoaderData<typeof loader>()

  return (
    <html lang="en" className={cn("h-full", data.theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
