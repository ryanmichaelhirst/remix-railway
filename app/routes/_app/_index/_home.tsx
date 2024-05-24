import { ButtonLink } from "@/components/ButtonLink"
import { type MetaFunction } from "@remix-run/node"
import { route } from "routes-gen"
import { CtaSection } from "./CtaSection"
import FAQSection from "./FaqSection"
import { FeatureSection } from "./FeatureSection"
import { PricingSection } from "./PricingSection"

export const meta: MetaFunction = () => [{ title: "Remix Railway | Boilerplate" }]

// Inspired by: https://salient.tailwindui.com/
export default function Page() {
  return (
    <main>
      {/* Landing page content*/}
      <div className="mx-auto max-w-7xl space-y-8 px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8 lg:pt-32">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 text-center text-6xl font-semibold">Welcome to Remix Railway</div>
          <div></div>
          <div className="mb-2 space-x-2 text-2xl">
            <span>Start editing your app under</span>
            <span className="font-semibold text-blue-500">@/routes/_app</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg text-slate-600 dark:text-slate-400">Powered by</span>
            <span className="font-semibold text-slate-900">Remix</span>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <ButtonLink
            to={route("/auth/login")}
            size="lg"
            variant="default"
            className="rounded-full font-semibold"
          >
            Get Started
          </ButtonLink>
        </div>
      </div>

      {/* CTA */}
      <CtaSection />
      {/* Features */}
      <FeatureSection />
      {/* Pricing */}
      <PricingSection />
      {/* FAQ */}
      <FAQSection />
    </main>
  )
}
