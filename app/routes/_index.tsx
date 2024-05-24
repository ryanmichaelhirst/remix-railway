import { Logo } from "@/components/Logo"
import { db } from "@/lib/db.server"
import { type MetaFunction } from "@remix-run/node"
import { typedjson, useTypedLoaderData } from "remix-typedjson"

export const meta: MetaFunction = () => [{ title: "Home | Remix Render" }]

export const loader = async () => {
  const examples = await db.example.findMany({
    take: 100,
  })

  return typedjson({ examples })
}

export default function Index() {
  const data = useTypedLoaderData()

  console.log("data", data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-white">
      <Logo />
      <div>
        Welcome to{" "}
        <a
          className="text-blue-500 underline hover:opacity-50"
          href="https://remix.run/docs/en/main"
        >
          Remix
        </a>
      </div>
      <div>
        Start editing your app at:{" "}
        <span className="font-semibold text-blue-500">@/routes/_index.tsx</span>
      </div>
      <div>
        To deploy to{" "}
        <a className="text-blue-500 underline hover:opacity-50" href="https://docs.railway.app/">
          Railway
        </a>
        , create a service for this web app and a service for a postgres db.
      </div>
    </main>
  )
}
