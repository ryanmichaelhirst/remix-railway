import { z } from "zod"

import { singleton } from "@/utils/singleton.server"

const EnvSchema = z.object({
  APP_ENV: z.union([z.literal("development"), z.literal("production")]).default("development"),
  DATABASE_URL: z.string().min(1),
  STRIPE_PUBLISHABLE_KEY: z.string().min(1),
  STRIPE_SECRET_KEY: z.string().min(1),
  STRIPE_SIGNING_SECRET: z.string().min(1),
  GOOGLE_OAUTH_CLIENT_ID: z.string().min(1),
  GOOGLE_OAUTH_CLIENT_SECRET: z.string().min(1),
})

const ENV = singleton("env", () => {
  console.log("⚙️ loading environment variables")

  const parsedEnv = EnvSchema.safeParse(process.env)

  if (!parsedEnv.success) {
    console.error("Error loading environment variables", parsedEnv.error)
    process.exit(1)
  }

  return parsedEnv.data
})

export { ENV }
