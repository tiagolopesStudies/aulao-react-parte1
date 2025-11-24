import { AnimatedCard } from '@/components/animated-card'
import { AnimatedGallery } from '@/components/animated-gallery'
import { ImageGallery } from '@/components/image-gallery'
import { StaggerAnimation } from '@/components/stagger-animation'

export function AnimatedComponentsPage() {
  return (
    <div className="px-2 py-6 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-semibold">Animated components</h1>

      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-xl">Animated card</h2>
        <AnimatedCard />
      </div>

      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-xl">Image Gallery</h2>
        <ImageGallery />
      </div>

      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-xl">Animated gallery</h2>
        <AnimatedGallery />
      </div>

      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-xl">Stagger animation</h2>
        <StaggerAnimation />
      </div>
    </div>
  )
}
