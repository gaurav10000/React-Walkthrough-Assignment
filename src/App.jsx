import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Person from './components/Person/Person'
import List from './components/List/List'

function App() {
  const [count, setCount] = useState(0)
  function Gaurav(){
    document.getElementById("btn").style.backgroundColor = "red"; 
  }

  return (
    <>
    <Header title="React Walkthrough Assignment" />
      <Button text="Gaurav" onClick={Gaurav} />
      <Person name="Gaurav" age="20" />
      <List items={['Gaurav', 'Jatin', 'Sabra']} />
    </>
  )
}

export default App
