import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%', transition: { delay: 0.35 } },
}

const liVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -20 },
}

const ulVariants = {
  open: {
    scale: 1.05,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
  closed: {
    scale: 1,
  },
}

const links = ['one', 'two', 'three', 'four']

const Nav = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <MenuNav
      variants={variants}
      initial='closed'
      animate={isNavOpen ? 'open' : 'closed'}
      transition={{ damping: 300 }}
    >
      <button onClick={() => setIsNavOpen(false)}>Close</button>
      <motion.ul variants={ulVariants}>
        {links.map((link) => (
          <motion.li variants={liVariants} key={link}>
            <a href='#'>{link}</a>
          </motion.li>
        ))}
      </motion.ul>
    </MenuNav>
  )
}

const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--black);
  padding: 40px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0;
    margin: 0 0 1rem;
    font-size: 2rem;
    a {
      color: white;
      text-decoration: none;
      border-bottom: 2px transparant solid;
      transition: 0.3s ease border;
      &:hover {
        border-bottom: 2px var(--blue) solid;
      }
    }
  }
`

export default Nav

Nav.propTypes = {
  isNavOpen: PropTypes.bool,
  setIsNavOpen: PropTypes.func,
}
