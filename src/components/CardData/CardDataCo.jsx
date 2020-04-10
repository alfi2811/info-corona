import React from 'react';


const CardData = (props) => {
    return (        
        <div className={'alert alert-light' } role="alert">                                                                
            <h4 class="alert-heading text-danger" > {props.angka}  </h4>
            <p style={{fontSize: '20px'}}>{props.kondisi} </p>
                            
            
        </div>        
    )
}

export default CardData;