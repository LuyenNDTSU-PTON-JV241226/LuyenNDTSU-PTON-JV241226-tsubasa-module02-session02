import { useState } from 'react'
import './App.css'
import ListCourse from './ss02-1/ListCourse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListCourse/>
    </>
  )
}

export default App
