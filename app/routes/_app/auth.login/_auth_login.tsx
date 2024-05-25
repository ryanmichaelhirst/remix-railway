import GoogleLogo from "@/assets/google-logo.webp"
import { ButtonLink } from "@/components/ButtonLink"
import { Button } from "@/components/ui/button"
import { authenticator } from "@/lib/auth.server"
import { cn } from "@/utils"
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node"
import { type MetaFunction } from "@remix-run/node"
import { Form } from "@remix-run/react"

export const meta: MetaFunction = () => [{ title: "Remix Railway | Login" }]

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.authenticate("google", request, {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  })
}

export async function loader({ request }: LoaderFunctionArgs) {
  // If the user is already authenticated redirect to home page
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  })
}

export default function Page() {
  return (
    <main className="relative flex h-[80vh] grow flex-col space-y-10">
      <div className="flex flex-1 flex-col justify-center">
        <div className="mx-8 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="space-y-4 px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight">
              Sign in to your account
            </h2>

            <div className="flex items-center justify-center">
              <Form method="post" action="/auth/login">
                <Button
                  type="submit"
                  className="flex items-center justify-center space-x-3"
                  variant="outline"
                >
                  <img
                    src={GoogleLogo}
                    alt="Google logo"
                    className="h-7 w-7 rounded-full bg-gray-50 dark:bg-gray-300"
                  />
                  <span className="text-sm font-semibold leading-6">Continue with Google</span>
                </Button>
              </Form>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have a{" "}
            <ButtonLink to="https://google.com/" target="_blank" className={cn("m-0 p-0")}>
              Google
            </ButtonLink>{" "}
            account? No problem,{" "}
            <ButtonLink
              to="https://support.google.com/mail/answer/56256?hl=en"
              target="_blank"
              className={cn("m-0 p-0")}
            >
              {" "}
              sign up
            </ButtonLink>{" "}
            for free.
          </p>
        </div>
      </div>
    </main>
  )
}
