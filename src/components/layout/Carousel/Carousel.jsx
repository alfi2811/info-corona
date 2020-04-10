import React, { Component } from 'react';
import coba from './coba.jpg';
import banner from './banner.jpg';
import Slider from 'react-slick';
import './Carousel.css';

export default class Carousel extends Component{
    render(){
        const settings = {
            className: "center",
            centerMode: true,            
            infinite: true,
            centerPadding: "100px",
            slidesToShow: 1,
            dots: true,
            speed: 500
          };
        return(
            <div className="mt-5">                    
            <Slider {...settings}>
            <div>
                <img src={coba} style={{width: '100%', height: '440px'}} className="px-3" alt=""/>
            </div>
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/jabarprov-covid19.appspot.com/o/public%2Fbanner%2Fbutuh-kalian-apps-pikobar-01.jpg?alt=media&token=475680cf-0570-4a13-99e6-41de843ce292" style={{width: '100%', height: '440px'}} className="px-3" alt=""/>
            </div>
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/jabarprov-covid19.appspot.com/o/public%2Fbanner%2Fbutuh-kalian-apps-pikobar-01.jpg?alt=media&token=475680cf-0570-4a13-99e6-41de843ce292" style={{width: '100%', height: '440px'}} className="px-3" alt=""/>
            </div>
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/jabarprov-covid19.appspot.com/o/public%2Fbanner%2Fbutuh-kalian-apps-pikobar-01.jpg?alt=media&token=475680cf-0570-4a13-99e6-41de843ce292" style={{width: '100%', height: '440px'}} className="px-3" alt=""/>
            </div>
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/jabarprov-covid19.appspot.com/o/public%2Fbanner%2Fbutuh-kalian-apps-pikobar-01.jpg?alt=media&token=475680cf-0570-4a13-99e6-41de843ce292" style={{width: '100%', height: '440px'}} className="px-3" alt=""/>
            </div>
            <div>
                <img src={banner} style={{width: '100%', height: '440px'}} className="px-3" alt=""/>
            </div>
            </Slider>           
            </div>
        )
    }
}