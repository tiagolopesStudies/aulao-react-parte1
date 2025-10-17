import { motion } from 'motion/react'

export function PulsingButton() {
  return (
    <motion.button
      className="px-4 py-2 text-white rounded-md outline-none cursor-pointer"
      animate={{ scale: [1, 1.1, 1], backgroundColor: ['#3b82f6', '#2563eb', '#3b82f6'] }}
      transition={{ duration: 0.8, ease: 'easeInOut', repeat: Infinity }}
    >
      Clique me
    </motion.button>
  )
}
