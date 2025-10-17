import { motion } from 'motion/react'
import { useState } from 'react'
import { FlippingCard } from '@/components/flipping-card'

export function MotionVariantPage() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <h1>Motion Variants Page</h1>

      <motion.div
        className="h-[100px] w-[100px] rounded-full bg-yellow-500 text-black flex items-center justify-center cursor-pointer"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.5 },
        }}
        initial="visible"
        animate={isVisible ? 'visible' : 'hidden'}
        transition={{ duration: 1 }}
        exit="exit"
        onClick={() => setIsVisible((current) => !current)}
      >
        Click me!
      </motion.div>

      <FlippingCard />
    </div>
  )
}
