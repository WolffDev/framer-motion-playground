import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Squares from './Squares'

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      delay: 1,
    },
  },
}

const hVariants = {
  initial: { opacity: 0, y: -100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
    },
  },
  exit: { opacity: 0, y: 100 },
}

const AboutPage = () => (
  <motion.div
    variants={variants}
    initial='initial'
    animate='animate'
    exit='exit'
  >
    <motion.h2 variants={hVariants}>About</motion.h2>
    <Squares />
  </motion.div>
)

export default AboutPage
