import './styles/global.css'
import { useState } from 'react'
import { Habit } from './components/Habit'

function App() {

  return (
    <div>
   <Habit completed={3}/>
    </div>
  )
}

export default App
