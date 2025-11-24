import { AnimatedCard } from '@/components/animated-card'
import { ImageGallery } from '@/components/image-gallery'

export function AnimatedComponentsPage() {
  return (
    <div className="px-2 py-6 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-semibold">Animated components</h1>

      <AnimatedCard />

      <ImageGallery />
    </div>
  )
}
