import { redirectBack } from "remix-utils/redirect-back"

import { sessionStorage } from "@/lib/session.server"
import { app } from "@/utils/app.server"
import { ActionFunctionArgs } from "@remix-run/node"
import { z } from "zod"

// Source: https://maanu.dev/posts/how-to-implement-dark-mode-in-remix
export const action = async (args: ActionFunctionArgs) =>
  app(args)
    .parseForm(
      z.object({
        theme: z.string(),
      }),
    )
    .build(async (ctx) => {
      ctx.session.set("theme", ctx.form.theme)

      return redirectBack(args.request, {
        fallback: "/",
        headers: {
          "Set-Cookie": await sessionStorage.commitSession(ctx.session),
        },
      })
    })
