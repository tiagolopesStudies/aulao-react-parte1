/** biome-ignore-all lint/suspicious/noArrayIndexKey: example */
import { motion, stagger, type Variants } from 'motion/react'

const parentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.8),
    },
  },
}

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function StaggerAnimation() {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="flex gap-6"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={index}
          className="size-10 rounded-full bg-yellow-300"
          variants={childVariants}
        />
      ))}
    </motion.div>
  )
}
