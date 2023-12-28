import { PrismaClient } from "@prisma/client"
import invariant from "tiny-invariant"

import { singleton } from "@/utils/singleton.server"

// Hard-code a unique key, so we can look up the client when this module gets re-imported
const db = singleton("prisma", getPrismaClient)

function getPrismaClient() {
  const { DATABASE_URL } = process.env
  invariant(typeof DATABASE_URL === "string", "DATABASE_URL env var not set")

  console.log(`🔌 setting up prisma client`)
  // NOTE: during development if you change anything in this function, remember
  // that this only runs once per server restart and won't automatically be
  // re-run per request like everything else is. So if you need to change
  // something in this file, you'll need to manually restart the server.
  const client = new PrismaClient()
  // connect eagerly
  client.$connect()

  return client
}

export { db }
