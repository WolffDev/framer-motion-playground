import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

const COLORS = [
  'var(--red)',
  'var(--blue)',
  'var(--black)',
  'var(--purp)',
  'var(--green)',
]

const variants = {
  enter: (direction) => {
    console.log('enter direction', direction)
    return {
      opacity: 0,
      x: direction > 0 ? 1000 : -1000,
    }
  },
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => {
    console.log('exit direction', direction)
    return {
      opacity: 0,
      x: direction > 0 ? -1000 : 1000,
    }
  },
}

const Slideshow = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const index = wrap(0, COLORS.length, page)

  const paginate = (direction) => {
    console.log('setting direction', direction)
    setPage([page + direction, direction])
  }

  console.log('page', page)
  console.log('index', index)
  return (
    <div
      style={{
        position: 'relative',
        height: 400,
      }}
    >
      <AnimatePresence custom={direction}>
        <motion.div
          custom={direction}
          key={page}
          drag='x'
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          dragElastic={1}
          onDragEnd={(event, { offset, velocity }) => {
            console.log(offset.x)
            if (offset.x > 400) {
              paginate(-1)
            } else if (offset.x < -400) {
              paginate(1)
            }
          }}
          style={{
            height: 400,
            width: '100%',
            background: COLORS[index],
            position: 'absolute',
            left: 0,
            top: 0,
          }}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
        />
      </AnimatePresence>
      <div
        style={{
          zIndex: 10,
          position: 'absolute',
        }}
      >
        <button onClick={() => paginate(1)}>{'<'}</button>
        <button onClick={() => paginate(-1)}>{'>'}</button>
      </div>
    </div>
  )
}

export default Slideshow
