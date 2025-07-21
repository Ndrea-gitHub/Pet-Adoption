import { useState } from 'react'
function Pet(desc){
    const [isAdopted,setAdopted]=useState(false)
    function Adopt(){
        setAdopted(!isAdopted)
    }
   return(
    <div className='pets'>
        <h2>{desc.nickname}</h2>
            <h3>Descritption: {desc.story}</h3>
            <p>Attribures: Independent, Calm, Bigback {desc.att}</p>
    </div>
   )
}

export default Pet