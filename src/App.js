import React, { useState } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import { Card, CardGrid, Container, Header } from './Elements'
import Nav from './Nav'
import './App.css'
import Modal from './Modal'
import Menu from './Menu'
import blue from './blue.png'
import purp from './purp.png'
import black from './black.png'
import green from './green.png'
import Accordian from './Accordian'

const App = () => {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])
  const [value, setValue] = useState(0)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isToggled, setToggle] = useState(false)
  const [isCardActive, setIsCardActive] = useState(true)

  console.log('x', x)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Menu onClick={() => setIsNavOpen(true)} />
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <h1>Header</h1>
      </Header>
      <Container>
        <h2>Super Cool</h2>
        <button onClick={() => setToggle(true)}>Toggle</button>
        <input
          type='range'
          min='-100'
          max='100'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Accordian />
        <CardGrid
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: +value }}
          exit={{ opacity: 0 }}
        >
          <Modal isToggled={isToggled} setToggle={setToggle}>
            <Card style={{ background: 'red' }}>
              <h3>Some card</h3>
              <img alt='test 123' src={blue} />
            </Card>
          </Modal>
          <Card
            // whileHover={{ scale: [1.02, 1, 1.2] }}
            // whileTap={{ background: 'var(--red)' }}
            // onHoverEnd={(e) => console.log('hover end', e)}
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              bottom: 100,
              right: 100,
            }}
            style={{ background: 'var(--purp)' }}
          >
            <h3>Some card</h3>
            <img alt='test 123' src={purp} />
          </Card>

          <AnimatePresence>
            {isCardActive && (
              <motion.div
                exit={{ height: 0, overflow: 'hidden', opacity: 0 }}
                transition={{ opacity: { duration: 0 } }}
              >
                <Card
                  style={{
                    background: 'var(--blue)',
                    x,
                    opacity,
                  }}
                  drag='x'
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(event, info) => {
                    if (Math.abs(info.point.x) > 200) {
                      setIsCardActive(false)
                    }
                  }}
                >
                  <h3>Some card</h3>
                  <img alt='test 123' src={blue} />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
          <Card style={{ background: 'var(--black)' }}>
            <h3>Some card</h3>
            <img alt='test 123' src={black} />
          </Card>
          <Card style={{ background: 'var(--green)' }}>
            <h3>Some card</h3>
            <img alt='test 123' src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  )
}

export default App
