import { useState } from 'react'
import Pet from './components/Pet.jsx'
import Satisfied_Corgi from './assets/Satisfied_Corgi.png'

function App() {
  return (
    <div>
        <h1>ADOPT ME</h1>
        <Pet
        nickname= "Tabby"
        story="Tabby is an indipendent cat who prefers to keep herself groomed. 
        While she is usually calm and unaffectionate her attitude can change quickly with the sight of a treat!"
        image="Satisfied_Corgi.png"
        treats={true}
        rubs={false}
        wait={true}
        />
    </div>
  )
}

export default App
