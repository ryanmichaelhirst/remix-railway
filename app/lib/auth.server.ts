import { db } from "@/lib/db.server"

import { logout, sessionStorage } from "@/lib/session.server"
import { ENV } from "@/utils/env.server"
import { Authenticator } from "remix-auth"
import { GoogleStrategy } from "remix-auth-google"
import util from "util"

type SessionUser = {
  id: number
  uid: string
  accessToken: string
}

// https://github.com/sergiodxa/remix-auth
// Create an instance of the authenticator to store the user session
export let authenticator = new Authenticator<SessionUser>(sessionStorage)

console.log("auth server ENV.APP_ENV", ENV.APP_ENV)

// https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow
// Use an OAuth2 strategy to authenticate via Google API
authenticator.use(
  new GoogleStrategy(
    {
      clientID: ENV.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: ENV.GOOGLE_OAUTH_CLIENT_SECRET,
      // TODO: There is a better way to do this
      callbackURL:
        ENV.APP_ENV === "development"
          ? "http://localhost:3000/auth/redirect"
          : "https://lyrically.app/auth/redirect",
      // scope: "me",
    },
    async ({ accessToken, refreshToken, extraParams, profile }) => {
      const email = profile.emails[0].value
      const photoUrl = profile.photos[0].value

      const user = await db.user.upsert({
        where: {
          email,
        },
        update: {
          googleId: profile.id,
          email,
          name: profile.displayName,
          photoUrl,
        },
        create: {
          googleId: profile.id,
          email,
          name: profile.displayName,
          photoUrl,
        },
      })
      console.log("got upsert user", user)

      console.log("got the user", util.inspect(user, { depth: null }))

      return {
        id: user.id,
        uid: user.uid,
        accessToken,
      }
    },
  ),
)

export async function getUser(request: Request) {
  const userSession = await authenticator.isAuthenticated(request)
  if (!userSession) return null

  const user = await db.user.findFirstOrThrow({
    where: {
      id: userSession.id,
    },
    include: {
      payment: true,
    },
  })

  return {
    ...userSession,
    ...user,
  }
}

export async function requireUser(request: Request) {
  try {
    return await getUser(request)
  } catch (err) {
    throw await logout(request)
  }
}
