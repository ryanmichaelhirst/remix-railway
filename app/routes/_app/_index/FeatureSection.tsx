import { ColorSplash, ColorSplashProps } from "@/components/ColorSplash"
import { cn } from "@/utils"
import {
  AudioLinesIcon,
  CommandIcon,
  HistoryIcon,
  ListMusicIcon,
  LucideIcon,
  MicVocalIcon,
  MusicIcon,
} from "lucide-react"

// Inspired by: https://clusterly.ai/#pricing
export function FeatureSection() {
  return (
    <section className="mx-auto max-w-5xl space-y-10 py-16" id="features">
      <div className="mb-20 space-y-4 text-center">
        <p className="text-lg">Features</p>
        <p className="text-4xl">Why Remix Railway?</p>
      </div>

      <div className="grid grid-flow-row grid-cols-3 gap-12">
        <FeatureBlock
          icon={MusicIcon}
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="text-green-600"
          colorSplashProps={{
            className: "text-green-100",
            direction: "bottomRight",
          }}
        />
        <FeatureBlock
          icon={ListMusicIcon}
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="text-cyan-600"
          colorSplashProps={{
            className: "text-cyan-100",
            direction: "topLeft",
          }}
        />
        <FeatureBlock
          icon={HistoryIcon}
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="text-red-600"
          colorSplashProps={{
            className: "text-red-100",
            direction: "bottomLeft",
          }}
        />
        <FeatureBlock
          icon={CommandIcon}
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="text-teal-600"
          colorSplashProps={{
            className: "text-teal-100",
            direction: "topRight",
          }}
        />
        <FeatureBlock
          icon={AudioLinesIcon}
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="text-blue-600"
          colorSplashProps={{
            className: "text-blue-100",
            direction: "bottomRight",
          }}
        />
        <FeatureBlock
          icon={MicVocalIcon}
          title="Lorem Ipsum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="text-emerald-600"
          colorSplashProps={{
            className: "text-emerald-100",
            direction: "topLeft",
          }}
        />
      </div>
    </section>
  )
}

function FeatureBlock(props: {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  colorSplashProps?: ColorSplashProps
}) {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="relative mx-auto flex items-center justify-between">
        <ColorSplash {...props.colorSplashProps} />
        <props.icon className={cn("absolute left-4 size-9", props.className)} />
      </div>

      <p className="text-lg font-semibold">{props.title}</p>
      <p>{props.description}</p>
    </div>
  )
}
