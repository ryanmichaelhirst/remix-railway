import { cn } from "@/utils"

export type ColorSplashProps = {
  className?: string
  direction?: keyof typeof DIRECTIONS
}

export function ColorSplash(props: ColorSplashProps) {
  const path = DIRECTIONS[props.direction ?? "bottomRight"]

  return (
    <svg
      className={cn("text-blue-100", props.className)}
      width="72"
      height="75"
      viewBox="0 0 72 75"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  )
}

// Direction that the long tail should spread out to
const DIRECTIONS = {
  topRight:
    "M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z",
  bottomRight:
    "M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z",
  bottomLeft:
    "M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z",
  topLeft:
    "M0 13.0264C0 33.4609 8.06546 64.0264 28.5 64.0264C48.9345 64.0264 62 50.4604 62 30.0259C62 9.59135 59.4345 4.0256 39 4.0256C18.5655 4.0256 0 -7.40819 0 13.0264Z",
}
