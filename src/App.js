import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useLocation,
} from 'react-router-dom'

import { Container, Header } from './Elements'
import Nav from './Nav'
import './App.css'
import Menu from './Menu'
import HomePage from './HomePage'
import AboutPage from './AboutPage'

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const location = useLocation()

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
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
      </Header>
      <Container>
        <h2>Super Cool</h2>
        <AnimatePresence exitBeforeEnter>
          <Switch key={location.pathname} location={location}>
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
          </Switch>
        </AnimatePresence>
      </Container>
    </motion.div>
  )
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default AppWrapper
