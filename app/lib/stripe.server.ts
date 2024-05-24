import { ENV } from "@/utils/env.server"
import Stripe from "stripe"

export const stripe = new Stripe(ENV.STRIPE_SECRET_KEY, { apiVersion: "2024-04-10" })