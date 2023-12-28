import { fakerEN_US as faker } from "@faker-js/faker"

import { db } from "@/lib/db.server"

async function seed() {
  Array(1000).keys()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const _index of Array(1000).keys()) {
    const randomContent = faker.lorem.sentence()

    await db.example.create({
      data: {
        content: randomContent,
      },
    })
  }

  const examples = await db.example.count()
  console.log(`✅ Seeded ${examples} examples`)
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
