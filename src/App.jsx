import { useState } from 'react'
import './App.css'
import NormalDistributionChart  from './components/chart.jsx'
import Title from './components/Title.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title/>
      <NormalDistributionChart/>
    </>
  )
}

export default App
