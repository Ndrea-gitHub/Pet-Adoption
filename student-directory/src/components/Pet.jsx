import { useState } from 'react'

function Pet(desc){
    let interest=null
    const [isAdopted,setAdopted]=useState(false)
    const [upinterest,moreInterest]=useState(+1)
    const [downinterest,lessInterest]=useState(-1)

    function Adopt(){
        setAdopted(!isAdopted)
    }
    function addInterest(){
        interest=moreInterest(upinterest)
        interest=lessInterest(downinterest)
    }
   return(
    <div className='pets'>
        <h2>{desc.nickname}</h2>
            <h3>Descritption: {desc.story}</h3>
            <p>Attribures: Independent, Calm, Bigback {desc.att}</p>
            <img src={(desc.image)} alt='image of a pet'/>
            {interest>=5?(
        <button onClick={Adopt} className="Adopt Button"> {isAdopted ? 'Not Adopted': 'A little bit more' } </button>
        ):<p>Not eligible to adopt yet, try to build their interest</p>}
            {/*<button onClick={Adopt} className="Adopt Button"> {isAdopted ? 'Not Adopted': 'A little bit more' } </button>*/}
    </div>

   )
   
}

export default Pet