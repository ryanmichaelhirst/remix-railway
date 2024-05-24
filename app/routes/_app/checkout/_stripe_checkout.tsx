// https://docs.stripe.com/payments/accept-a-payment?platform=web&ui=embedded-form
import { stripe } from "@/lib/stripe.server"
import { app } from "@/utils/app.server"
import { ENV } from "@/utils/env.server"
import { LoaderFunctionArgs } from "@remix-run/node"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useEffect, useState } from "react"
import { redirect, typedjson, useTypedLoaderData } from "remix-typedjson"
import { route } from "routes-gen"

export const loader = async (args: LoaderFunctionArgs) =>
  app(args)
    .withUser()
    .build(async (ctx) => {
      const user = ctx.user
      if (!user) return redirect(route("/auth/login"))

      // Use card details 4242 4242 4242 4242, 12/34 and 123
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Premium",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                images: ["https://remainsolid-assets.s3.amazonaws.com/checkout_product.webp"],
              },
              unit_amount: 2000, // $20 USD
            },
            quantity: 1,
          },
        ],
        metadata: {
          userId: user.id,
        },
        mode: "payment",
        ui_mode: "embedded",
        return_url:
          ENV.APP_ENV === "development"
            ? "http://localhost:3000/dashboard?session_id={CHECKOUT_SESSION_ID}"
            : "https://remixrailway.app/dashboard?session_id={CHECKOUT_SESSION_ID}",
      })

      return typedjson({
        publishableKey: ENV.STRIPE_PUBLISHABLE_KEY,
        clientSecret: session.client_secret,
      })
    })

export default function Page() {
  const data = useTypedLoaderData<typeof loader>()
  const [stripePromise, setStripePromise] = useState<any>()

  useEffect(() => {
    if (!stripePromise && data.publishableKey) {
      setStripePromise(loadStripe(data.publishableKey))
    }
  }, [stripePromise, data.publishableKey])

  if (!stripePromise || !data.clientSecret) return null

  return (
    <div id="checkout" className="h-full bg-white">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{
          clientSecret: data.clientSecret,
        }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
