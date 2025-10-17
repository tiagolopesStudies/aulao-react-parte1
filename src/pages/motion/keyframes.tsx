import { motion } from 'motion/react'
import { BouncingLoader } from '@/components/bouncing-loader'
import { PulsingButton } from '@/components/pulsing-button'

export function MotionKeyframesPage() {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1>Motion Keyframes Page</h1>

      <div>
        <motion.div
          className="h-[200px] w-[200px] rounded-full bg-purple-300"
          animate={{ scale: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <PulsingButton />

      <div className="mt-8">
        <BouncingLoader />
      </div>
    </div>
  )
}
