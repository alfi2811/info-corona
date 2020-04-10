import React from 'react';


const CardGlobalData = (props) => {
    return (        
        <div className="card border-secondary mb-3">  
            <div className="card-body " style={{textAlign: 'center'}}>
                <h2 className={"card-title text-"+ props.color} >{props.angka} </h2>  
                <p className="card-text text-secondary">{props.nama} </p>

            </div>
        </div>
    )
}

export default CardGlobalData;