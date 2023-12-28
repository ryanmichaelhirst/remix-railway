import { db } from "@/lib/db.server";

export const loader = async () => {
  try {
    // pass if we can connect to the database and perform a simply query
    await db.example.count();
    return new Response("OK");
  } catch (error: unknown) {
    console.log("healthcheck ❌", { error });
    return new Response("ERROR", { status: 500 });
  }
};
