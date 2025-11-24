import { motion } from 'motion/react'
import img from '../assets/nature.jpg'

export function AnimatedCard() {
  return (
    <motion.div
      className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 1.1 }}
      drag
      dragConstraints={{
        left: -50,
        right: 50,
        top: -50,
        bottom: 50,
      }}
      dragElastic={0.2}
    >
      <img
        src={img}
        alt="A scene about nature"
        className="w-full h-48 object-cover"
        draggable={false}
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-zinc-800">Card title</h2>

        <p className="text-gray-700 mb-4">
          This is a simple card create using framer motion
        </p>

        <button
          type="button"
          className="px-4 py-2 cursor-pointer bg-teal-500 text-white rounded-md hover:bg-teal-300 transition-all"
        >
          Learn more
        </button>
      </div>
    </motion.div>
  )
}
