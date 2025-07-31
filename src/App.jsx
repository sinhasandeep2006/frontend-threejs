import React from 'react'
import CanvaModel from './canvas'
import Customizer from './pages/Customizer'
import Home from './pages/Home'
const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvaModel />
      <Customizer/>
    </main>
  )
}

export default App
