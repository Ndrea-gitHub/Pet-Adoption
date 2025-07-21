import { useState } from 'react'

function Pet(desc){
    const [isAdopted,setAdopted]=useState(false)
    const [add_interest,addInterest]=useState(0)
    const [dec_interest,decInterest]=useState(0)
    let interest=add_interest + dec_interest;

    function Adopt(){
        setAdopted(!isAdopted)
    }

    if (add_interest>10){
        addInterest(add_interest=10)
    }
    
  /*  function Interests() {
        if (desc.treats === true) {
            addInterest(add_interest + 1);
            console.log(desc.treats); 
        } else {
            decInterest(dec_interest - 1);
            console.log(desc.treats); 
        }
    }
*/
    function moreInterest(){
        addInterest(add_interest+1)
    }
   return(
    <div className='pets'>
        <h2>{desc.nickname}</h2>
            <h3>Descritption: {desc.story}</h3>
            
            
            <img src={(desc.image)} alt='image of a pet'/>
            <br></br>

            <button onClick={moreInterest} className="trait_bttn"> Give Treats</button>
            <button onClick={moreInterest} className="trait_bttn"> Gentle Rub </button>
            <button onClick={moreInterest} ClassName="trait_bttn"> Wait </button>
            <br></br>
             {interest>=7?(
        <button onClick={Adopt} className="adopt_bttn"> {isAdopted ? ' Adopted': 'Adopt' } </button>
        ):<p>Not eligible to adopt yet, try to build their interest</p>}
            <p>Interest Level: {add_interest}/10</p>
        
            {/*<button onClick={Adopt} className="Adopt Button"> {isAdopted ? 'Not Adopted': 'A little bit more' } </button>*/}
    </div>

   )
   console.log(desc.treats)
}


export default Pet