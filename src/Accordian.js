import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { useState } from 'react'

const bodytext = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo aperiam aliquam vel voluptates suscipit, maxime ullam sunt necessitatibus corporis nobis eligendi totam dicta rem maiores error dolore quod in cumque asperiores quasi, omnis minima rerum deleniti? Animi, vero, reiciendis, perspiciatis repellendus nemo quaerat ut earum cum dignissimos dicta a ipsum?`
const theTitle = `The awesome title`

const Accordian = ({ title = theTitle, body = bodytext }) => {
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
