import { motion, stagger, type Variants } from 'motion/react'
import { useState } from 'react'
import { images } from '../assets/gallery'

export function AnimatedGallery() {
  const [showImages, setShowImages] = useState(false)

  function handleClick() {
    setShowImages((prev) => !prev)
  }

  const parentsVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: stagger(0.5, { from: 'first' }),
      },
    },
  }

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="mb-8 p-4 rounded-lg bg-yellow-300 text-black font-bold"
      >
        {showImages ? 'Hide images' : 'Show images'}
      </button>

      <motion.div
        className="flex flex-wrap justify-center gap-2"
        variants={parentsVariants}
        initial="hidden"
        animate={showImages ? 'visible' : 'hidden'}
      >
        {images.map(({ image, caption }) => (
          <motion.img
            key={image}
            src={image}
            alt={caption}
            className="w-[300px] rounded"
            variants={childVariants}
          />
        ))}
      </motion.div>
    </div>
  )
}
