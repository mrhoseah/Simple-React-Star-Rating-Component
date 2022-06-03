import { useState } from 'react'
import Rating from './components/Rating'

function App() {

  return (
    <div className="App">
      <h4>Rating</h4>
      <Rating  value={1.5}/>
    </div>
  )
}

export default App
