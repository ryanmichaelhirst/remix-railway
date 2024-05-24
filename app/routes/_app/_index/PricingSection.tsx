import { ButtonLink } from "@/components/ButtonLink"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleCheckIcon } from "lucide-react"
import { route } from "routes-gen"

export function PricingSection() {
  return (
    <section className="flex flex-col space-y-10 bg-[#007F72]/70 py-24" id="pricing">
      <div className="mx-auto space-y-4 text-center text-white">
        <h3 className="px-4 text-5xl sm:px-0">Simple pricing for everyone</h3>
        <p className="px-4 text-lg sm:px-0">
          No subscriptions or recurring charges. Pay once, own forever.
        </p>
      </div>
      <div className="mx-auto space-y-10 md:flex md:space-x-10 md:space-y-0">
        <Card>
          <CardHeader>
            <h2 className="text-2xl">$0</h2>
            <CardTitle>Free trial</CardTitle>
            <CardDescription>Limited access to most features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <ButtonLink
              // to={route("/auth/login")}
              to={route("/")}
              variant="outline"
              className="w-full rounded-full font-medium"
            >
              Get started
            </ButtonLink>
            <div className="space-y-4">
              <PriceDetail description="Lorem ipsum dolor sit amet" />
              <PriceDetail description="Lorem ipsum dolor sit amet" />
              <PriceDetail description="Lorem ipsum dolor sit amet" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-[#007F72] bg-[#007F72]">
          <CardHeader>
            <h2 className="text-2xl text-white">$20</h2>
            <CardTitle className="text-white">Premium</CardTitle>
            <CardDescription className="text-white">Full access to all features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <ButtonLink
              // to={route("/checkout")}
              to={route("/")}
              variant="default"
              className="w-full rounded-full border font-medium"
            >
              Get started
            </ButtonLink>
            <div className="space-y-4">
              <PriceDetail description="Lorem ipsum dolor sit amet" className="text-white" />
              <PriceDetail description="Lorem ipsum dolor sit amet" className="text-white" />
              <PriceDetail description="Lorem ipsum dolor sit amet" className="text-white" />
              <PriceDetail description="Lorem ipsum dolor sit amet" className="text-white" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function PriceDetail(props: { description: string; className?: string }) {
  return (
    <div className="flex items-center space-x-4">
      <CircleCheckIcon className={props.className} />
      <p className={props.className}>{props.description}</p>
    </div>
  )
}
