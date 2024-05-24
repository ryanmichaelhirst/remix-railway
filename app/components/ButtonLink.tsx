import * as React from "react"

import { Link } from "@remix-run/react"
import type { RemixLinkProps } from "@remix-run/react/dist/components"

import type { VariantProps } from "class-variance-authority"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/utils"

export interface ButtonLinkProps
  extends RemixLinkProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

// https://ui.shadcn.com/docs/components/button#link
const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "link", size, children, ...props }, ref) => {
    return (
      <Link className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
      </Link>
    )
  },
)

ButtonLink.displayName = "ButtonLink"

export { ButtonLink }
