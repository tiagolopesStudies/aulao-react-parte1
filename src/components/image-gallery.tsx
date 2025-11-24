import { motion } from 'motion/react'
import { images } from '../assets/gallery'

export function ImageGallery() {
  return (
    <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {images.map(({ image, caption }) => (
        <motion.div
          key={image}
          className="relative m-4 overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={image}
            alt="A scene of nature"
            className="w-full h-full object-cover"
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black text-white transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.8 }}
          >
            <p className="text-sm sm:text-lg">{caption}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
