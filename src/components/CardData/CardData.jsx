import React from 'react';


const CardData = (props) => {
    return (        
        <div className={'alert alert-'+ props.color } role="alert">
            <p style={{fontSize: '16px'}}>{props.nameCard}</p>
            <div className="row">                
                <div className="col-6">                    
                    <h4 class="alert-heading" >Global</h4>                                
                    <p style={{fontSize: '20px'}}>Indonesia</p>
                </div>              
                <div className="col-6" style={{textAlign: 'right'}}>                    
                    <h4 class="alert-heading" > {props.global}  </h4>                                    
                    <p style={{fontSize: '20px'}}>{props.lokal} </p>
                </div>    
            </div>
            
        </div>        
    )
}

export default CardData;