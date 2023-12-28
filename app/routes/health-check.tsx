import { db } from "@/lib/db.server"

export const loader = async () => {
  try {
    // pass if we can connect to the database and perform a simply query
    const numExamples = await db.example.count()
    return new Response(`OK (# examples: ${numExamples})`)
  } catch (error: unknown) {
    console.log("healthcheck ❌", { error })
    return new Response("ERROR", { status: 500 })
  }
}
