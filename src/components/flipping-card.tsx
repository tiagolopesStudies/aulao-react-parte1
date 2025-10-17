import { motion } from 'motion/react'
import { useState } from 'react'

export function FlippingCard() {
  const [isFlippled, setIsFlipped] = useState(false)

  return (
    <motion.div
      onClick={() => setIsFlipped((current) => !current)}
      className="perspective-midrange"
    >
      <motion.div
        variants={{
          front: { rotateY: 0 },
          back: { rotateY: 180 },
        }}
        initial="front"
        animate={isFlippled ? 'back' : 'front'}
        transition={{ duration: 0.6 }}
        className="h-20 w-40 text-white bg-blue-500 rounded-lg shadow-lg overflow-hidden flex justify-center items-center transform-3d cursor-pointer"
      >
        Click me
      </motion.div>
    </motion.div>
  )
}
