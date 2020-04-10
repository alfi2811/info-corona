import React, { Component } from 'react'
import './ListData.css';
import CardData from '../CardData/CardData';
import axios from 'axios';


export default class ListData extends Component{
    
    state = {
        data: false,        
        persons: [],
        positif: 0,
        recovered: 0,
        positifGlobal: 0,
        recoveredGlobal: 0,
        death: 0,
        deathGlobal: 0
    }

    formatRupiah = (bilangan) => {
        var	reverse = bilangan.toString().split('').reverse().join('');
        var ribuan 	= reverse.match(/\d{1,3}/g);
            ribuan	= ribuan.join(',').split('').reverse().join('');

        return ribuan;
    }

    componentDidMount(){
        const dataCorona = `https://api.kawalcorona.com`;   
        const dataCoronaGlobal = `https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief`;
        const proxy = `https://cors-anywhere.herokuapp.com/`;
        axios.get(proxy + dataCorona + `/indonesia`)
            .then(res => {
                const persons = res.data;
                this.setState({ 
                    data: true,                                        
                    positif: persons[0].positif,
                    recovered : persons[0].sembuh,
                    death: persons[0].meninggal
                });                 
        })

        axios.get(proxy + dataCoronaGlobal)
            .then(res => {                
                this.setState({                     
                    positifGlobal : this.formatRupiah(res.data.confirmed),                                       
                    recoveredGlobal : this.formatRupiah(res.data.recovered),
                    deathGlobal : this.formatRupiah(res.data.deaths)
                });                                
        })  
        
    }

    render(){
        return(            
            <div className="container">
                <br/>
                <h3 className="mt-5">Angka Persebaran Corona secara Statistik</h3>
                
                <div className="mt-1">
                <ul class="nav nav-pills navUtama mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Global</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Indonesia</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Statistik</a>
                </li>                
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        
                            {
                                this.state.data ? 
                                <div className="row">
                                <div className="col-4">                              
                                <CardData color="warning" nameCard="POSITIF COVID-19" lokal={ this.state.positif } global={ this.state.positifGlobal } />                                                                                            
                                </div>                  
                                <div className="col-4">                              
                                    <CardData color="success" nameCard="SEMBUH" lokal={ this.state.recovered } global={ this.state.recoveredGlobal } />                                                                                            
                                </div>                  
                                <div className="col-4">                              
                                    <CardData color="danger" nameCard="MENINGGAL" lokal={ this.state.death } global={ this.state.deathGlobal } />                                                                                            
                                </div>                  
                                </div>
                                : <p>Please Wait....</p>
                            }                                                                      
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Hai</div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">ABOUT</div>
                </div>
                <br/><br/><br/>
                <br/><br/><br/>
                </div>                
            </div>                   
        )
    }

}