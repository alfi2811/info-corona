import React, { Component } from 'react';
import Navbar from '../layout/Navbar/NavBar';
import Carousel from '../layout/Carousel/Carousel';
import ListData from '../ListData/ListData';
import Footer from '../layout/Footer/Footer';

class Home extends Component{
    render(){
        return (
            <div>                
                <div className="container" style={{width: '75vw'}}>
                    <Carousel />                    
                    <ListData />                    
                </div>
                <Footer />
            </div>
        )
    }

}

export default Home;