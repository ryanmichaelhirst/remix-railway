// Source: https://github.com/dev-xo/stripe-stack/blob/main/app/routes/api%2B/webhook.ts
import { db } from "@/lib/db.server"
import { stripe } from "@/lib/stripe.server"
import { ENV } from "@/utils/env.server"
import { Prisma } from "@prisma/client"
import { ActionFunctionArgs } from "@remix-run/node"
import { typedjson } from "remix-typedjson"
import type { Stripe } from "stripe"

export const action = async (args: ActionFunctionArgs) => {
  const request = args.request
  if (request.method !== "POST") {
    throw new Error("Method not allowed")
  }

  const event = await getStripeEvent(request)

  switch (event.type) {
    case "checkout.session.completed":
      await saveStripePayment(event)
      break
    default:
      throw new Error(`Unhandled event type ${event.type}`)
  }

  return typedjson({ received: true })
}

/**
 * Gets Stripe event signature from request header.
 */
async function getStripeEvent(request: Request) {
  try {
    // Get header Stripe signature.
    const signature = request.headers.get("stripe-signature")
    if (!signature) throw new Error("Missing Stripe signature.")

    const payload = await request.text()
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      ENV.STRIPE_SIGNING_SECRET,
    ) as Stripe.Event

    return event
  } catch (err) {
    console.log(err)
    return typedjson({}, { status: 400 })
  }
}

/**
 * Save Stripe payment to database
 */
async function saveStripePayment(event: Stripe.CheckoutSessionCompletedEvent) {
  const metaUserId = event.data.object?.metadata?.userId
  if (!metaUserId) throw new Error("User id must be defined")

  const amount = event.data.object.amount_total
  if (!amount) throw new Error("Amount must be defined")

  const userId = parseInt(metaUserId)

  const payments = await db.payment.findMany({
    where: {
      userId,
    },
  })

  const processedEvent = payments.find((payment) => {
    // @ts-ignore
    return payment.payload?.id === event.id
  })
  if (processedEvent) {
    console.log("Payment has already been saved")
    return
  }

  await db.payment.create({
    data: {
      userId,
      amount: amount.toString(),
      payload: event as unknown as Prisma.JsonObject,
    },
  })
}
