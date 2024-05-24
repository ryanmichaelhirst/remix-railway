import { db } from "@/lib/db.server"
import { fakerEN_US as faker } from "@faker-js/faker"

async function seed() {
  const iterations = Array.from(Array(10).keys())
  for (const iter of iterations) {
    await db.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.person.fullName(),
        googleId: faker.string.numeric(10),
      },
    })
  }
}

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
