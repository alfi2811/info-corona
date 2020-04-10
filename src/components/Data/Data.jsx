import React, { Component } from 'react'
import Navbar from '../layout/Navbar/NavBar';
import DataComplete from '../CompleteData/CompleteData'

export default class Data extends Component {
    render(){
        return(
            <div>                
                <DataComplete />
            </div>
        )
    }

}