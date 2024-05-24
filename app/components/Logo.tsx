import LogoImage from "@/assets/logo.webp"
import { useNavigate } from "@remix-run/react"

// Generated with the following Dalle-3 prompt:
//
// create a logo designed in a modern, swan minimalist symmetrical style. 
// The logo is a black vector graphic set against a clean, white background. 
// The symmetry of the design adds a sense of balance and harmony, while the use 
// of black and white creates a stark contrast, making the logo stand out. 
// The modern style of the logo suggests a forward-thinking, innovative approach. 
// Overall, this logo effectively combines simplicity and sophistication in its design.
export function Logo() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center space-x-2">
      <img
        src={LogoImage}
        className="h-16 w-16 cursor-pointer rounded-lg shadow"
        alt="Remix railway logo"
        onClick={() => {
          navigate("/")
        }}
      />
      <span
        className="cursor-pointer font-['Eleven_Twenty'] text-2xl font-normal"
        onClick={() => {
          navigate("/")
        }}
      >
        Remix railway
      </span>
    </div>
  )
}
