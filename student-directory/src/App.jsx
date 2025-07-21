import { useState } from 'react'
import Pet from './components/Pet.jsx'
import Satisfied_Corgi from './assets/Satisfied_Corgi.png'
import 

function App() {
  return (
    <div>
        <h1>ADOPT ME</h1>
        <Pet
        nickname= "Tabby"
        story="Tabby is an indipendent cat who prefers to keep herself groomed. 
        While she is usually calm and unaffectionate her attitude can change quickly with the sight of a treat!"
        image='Satisfied_Corgi.png'
        treats={false}
        rubs={false}
        wait={true}
        />

        <Pet
        nickname= "Blaze"
        story="Blaze is an energized pup that loves affection and attention! 
        Make sure to keep up as he does not like to wait. Oh and don't forget his love of treats "
        treats={true}
        rubs={true}
        wait={false}
        />
        <Pet
        nickname="Shelly"
        story="Shelly is really fun once you get to know her. She tends to be a bit introverted 
        but can be lured out her shell with treat. Sometimes you just have to give it time"
        />
    </div>
  )
}

export default App
