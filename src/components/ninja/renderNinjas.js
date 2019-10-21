import React from 'react';

const RenderNinjas = ({ninjas,deleteNinaj}) =>{
    const ninjasList = ninjas.map( ninja =>{
        //using if
     /*   if( ninja.age > 30){
            return(
            <div className='ninja' key={ninja.id}>
                <h1>{ninja.name} details</h1>
                <div>id: {ninja.id}</div>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
            </div>
            )
        } else {
            return null;
        }*/
        // using ternary operator
        
        return ninja.age > 25 ? (
           <div className='ninja container' key={ninja.id}>
                <div className='card'>
                    <div className='card-content'>
                        <h5 className="card-title blue-text">{ninja.name} details</h5>
                        <div>id: {ninja.id}</div>
                        <div>Name: {ninja.name}</div>
                        <div>Age: {ninja.age}</div>
                        <div>Belt: {ninja.belt}</div>
                        <button onClick={()=> {deleteNinaj(ninja.id)}}>Dlelte Ninaja</button>
                    </div>
                </div>
            </div> 
        
        ) : null
        
    }
    )
    return(
        <div className="ninja-list">
            {ninjasList}
        </div>

    );
}

export default RenderNinjas
