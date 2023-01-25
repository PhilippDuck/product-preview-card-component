import { useState } from 'react'
import Card from './components/Card'

function App() {

  return (
    <div className="App">
      <div className='flex flex-col items-center h-screen justify-center'>
        <Card />

        <div class="text-xs font-light absolute bottom-0 m-2">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://www.linkedin.com/in/philipp-marcel-duck/">Philipp-Marcel Duck</a>.
        </div>
      </div>

    </div>
  )
}

export default App
