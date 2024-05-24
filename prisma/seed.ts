import { db } from "@/lib/db.server"

async function seed() {}

seed()
  .then(async () => {
    console.log("🚀 Seed completed successfully")
  })
  .catch((e) => {
    console.error(e)
    console.log("❌ Seed failed")
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
