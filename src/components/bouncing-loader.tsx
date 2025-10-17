import { motion } from 'motion/react'

export function BouncingLoader() {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.div
          key={`element-${index}`}
          className="size-4 bg-teal-500 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: index * 0.2,
          }}
        />
      ))}
    </div>
  )
}
