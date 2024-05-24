import { stripe } from "@/lib/stripe.server"
import { app } from "@/utils/app.server"
import { LoaderFunctionArgs } from "@remix-run/node"
import { redirect, typedjson } from "remix-typedjson"
import { z } from "zod"

export const loader = async (args: LoaderFunctionArgs) =>
  app(args)
    .parseQuery(
      z.object({
        session_id: z.string().optional(),
      }),
    )
    .withUser()
    .build(async ({ user, query, session }) => {
      if (!user) return redirect("/auth/login")

      const stripeSessionId = query.session_id
      const stripeSession = stripeSessionId
        ? await stripe.checkout.sessions.retrieve(stripeSessionId)
        : null

      // Your condition for free trial expiration here
      // const freeTrialExpired = someCondition && user.payment.length === 0

      return typedjson({
        user,
        stripeSession,
        theme: session.get("theme"),
        freeTrialExpired: false,
      })
    })
