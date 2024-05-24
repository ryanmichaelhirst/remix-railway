import { ButtonLink } from "@/components/ButtonLink"
import { route } from "routes-gen"

export function CtaSection() {
  return (
    <section className="flex flex-col bg-gradient-to-r from-blue-500 to-[#007F72] py-24">
      <div className="relative mx-auto max-w-lg text-center">
        <p className="mb-6 px-4 text-5xl text-white sm:px-0">Etiam non aliquam turpis</p>
        <p className="mb-10 px-4 text-lg text-white sm:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus magna vel felis tempor
          malesuada. Praesent eget quam nisl. Curabitur ut fringilla ipsum, eget molestie nulla.
        </p>
        <ButtonLink
          to={route("/auth/login")}
          size="lg"
          variant="outline"
          className="rounded-full text-[#007F72] dark:border-[#007F72] dark:bg-[#007F72] dark:text-white"
        >
          Get access for free
        </ButtonLink>
      </div>
    </section>
  )
}
