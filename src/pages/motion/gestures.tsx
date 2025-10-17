import { motion } from 'motion/react'

export function MotionGesturesPage() {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <h1>Motion Gestures Page</h1>

      <motion.div
        className="size-20 bg-yellow-300"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />

      <motion.div
        className="size-20 bg-blue-600 flex justify-center items-center"
        whileTap={{ scale: 0.8, backgroundColor: 'crimson' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Click me!
      </motion.div>

      <motion.div
        className="size-20 bg-teal-400 flex justify-center items-center text-black"
        drag="x"
      >
        Move me!
      </motion.div>

      <motion.div
        className="size-20 bg-purple-600 flex justify-center items-center text-white"
        drag
        dragConstraints={{
          bottom: 50,
          top: -50,
          left: 50,
          right: 50,
        }}
      >
        Move me!
      </motion.div>
    </div>
  )
}
