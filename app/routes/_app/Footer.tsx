import Logo from "@/assets/logo.webp"
import { ButtonLink } from "@/components/ButtonLink"
import { useNavigate } from "@remix-run/react"
import { route } from "routes-gen"

export function Footer() {
  const navigate = useNavigate()

  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <img
            src={Logo}
            className="mx-auto h-16 w-16 cursor-pointer rounded-lg"
            alt="Lyricly logo"
            onClick={() => {
              navigate(route("/"))
            }}
          />
          <ul className="mt-5 flex justify-center gap-x-6 text-sm">
            <li className="mb-4 md:mb-0">
              <ButtonLink to={route("/") + "#features"} variant="ghost">
                Features
              </ButtonLink>
            </li>
            <li className="mb-4 md:mb-0">
              <ButtonLink to={route("/") + "#pricing"} variant="ghost">
                Pricing
              </ButtonLink>
            </li>
            <li className="mb-4 md:mb-0">
              <ButtonLink to={route("/") + "#faq"} variant="ghost">
                FAQ
              </ButtonLink>
            </li>
          </ul>
          <ul className="mt-2 flex justify-center gap-x-3 text-sm">
            <li className="mb-4 md:mb-0">
              <ButtonLink to={route("/privacy")} variant="ghost">
                Privacy
              </ButtonLink>
            </li>
            <li className="mb-4 md:mb-0">
              <ButtonLink to={route("/terms")} variant="ghost">
                Terms of Service
              </ButtonLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
