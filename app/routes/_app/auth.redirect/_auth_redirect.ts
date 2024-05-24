import type { LoaderFunctionArgs } from "@remix-run/node"

import { authenticator } from "@/lib/auth.server"

export let loader = ({ request }: LoaderFunctionArgs) => {
  return authenticator.authenticate("google", request, {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  })
}
