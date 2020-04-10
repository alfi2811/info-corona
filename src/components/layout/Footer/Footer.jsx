import React, { Component } from 'react'
import styled from 'styled-components';

const Footers = styled.div `
    width: 100%;
    background-color: rgb(33, 69, 107);
    padding: 30px 0px;    
    color: white;
    display: flex;
    justify-content: center;
    align-items: center ;
`;

export default class Footer extends Component {
    render(){
        return(
            
            <Footers>
                <p style={{marginBottom: '0px'}} >&copy; Copyright by Alfi Nasution</p>
            </Footers>
            
               
        )
    }

}