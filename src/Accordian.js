import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { useState } from 'react'

const Accordian = ({ title, body }) => {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <article>
      <h2 role='button' onClick={() => setIsToggled((prevState) => !prevState)}>
        {title}
      </h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            style={{ overflow: 'hidden' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p>{body}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export default Accordian

Accordian.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
}
