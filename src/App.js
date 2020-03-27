import React, { useState } from 'react'
import { Card, CardGrid, Container, Header } from './Elements'
import './App.css'
import Modal from './Modal'
import Menu from './Menu'
import blue from './blue.png'
import purp from './purp.png'
import black from './black.png'
import green from './green.png'
import Accordian from './Accordian'

const bodytext = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo aperiam aliquam vel voluptates suscipit, maxime ullam sunt necessitatibus corporis nobis eligendi totam dicta rem maiores error dolore quod in cumque asperiores quasi, omnis minima rerum deleniti? Animi, vero, reiciendis, perspiciatis repellendus nemo quaerat ut earum cum dignissimos dicta a ipsum?`

const App = () => {
  const [value, setValue] = useState(0)
  const [isToggled, setToggle] = useState(false)
  return (
    <div>
      <Header>
        <Menu />
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
        <Accordian title='The title!' body={bodytext} />
        <CardGrid>
          <Modal isToggled={isToggled} setToggle={setToggle}>
            <Card style={{ background: 'var(--blue)' }}>
              <h3>Some card</h3>
              <img alt='test 123' src={blue} />
            </Card>
          </Modal>
          <Card
            style={{ background: 'var(--purp)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: +value }}
            exit={{ opacity: 0 }}
          >
            <h3>Some card</h3>
            <img alt='test 123' src={purp} />
          </Card>

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
    </div>
  )
}

export default App
