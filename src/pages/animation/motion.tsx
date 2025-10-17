import { motion } from 'motion/react'

export function MotionPage() {
  return (
    <div className="flex flex-col items-center p-8 gap-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-4"
      >
        Motion Page
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-lg"
      >
        This page demonstrates basic animations using the Motion library.
      </motion.p>

      <div>
        <motion.div
          className="h-[200px] w-[200px] rounded-full bg-yellow-300"
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
      </div>

      <div>
        <motion.div
          className="h-[200px] w-[200px] bg-yellow-300"
          initial={{ skewX: 40 }}
          animate={{ skewX: 0 }}
          transition={{ duration: 2 }}
        />
      </div>

      <div>
        <motion.div
          className="h-[200px] w-[200px] bg-purple-300"
          initial={{ scale: 0.5, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}
