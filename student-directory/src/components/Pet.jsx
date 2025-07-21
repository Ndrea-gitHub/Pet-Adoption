import { useState } from 'react'

function Pet(desc){
    let interest=5
    const [isAdopted,setAdopted]=useState(false)
    const [interests,changeInterest]= useState(5)
    {/*const [upinterest,moreInterest]=useState(+1)
    const [downinterest,lessInterest]=useState(-1)*/}
    

    function Adopt(){
        setAdopted(!isAdopted)
    }
    function changeInterest(){
        if(desc.treats==true){
            interests=moreInterest(+1)
        }
        else{
        interests=lessInterest(downinterest)
        }
    }
    
   return(
    <div className='pets'>
        <h2>{desc.nickname}</h2>
            <h3>Descritption: {desc.story}</h3>
            <p>Attribute Options: Treats, Rubs, Patience {desc.treats}{desc.rubs}{desc.wait}</p>
            <img src={(desc.image)} alt='image of a pet'/>

            <button onClick={changeInterest} className="trait_bttn"> Give Treats</button>

            {interest>=7?(
        <button onClick={Adopt} className="Adopt Button"> {isAdopted ? ' Adopted': 'Adopt' } </button>
        ):<p>Not eligible to adopt yet, try to build their interest</p>}
        
            {/*<button onClick={Adopt} className="Adopt Button"> {isAdopted ? 'Not Adopted': 'A little bit more' } </button>*/}
    </div>

   )
   
}

export default Pet